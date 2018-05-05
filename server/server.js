require('dotenv').config()

const express = require('express')
, bodyParser = require('body-parser')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, massive = require('massive')
, session = require('express-session')
, clientCtrl = require('./controllers/clients')
, servicesCtrl = require('./controllers/services')
, invoicesCtrl = require('./controllers/invoices')

const app = express();

// app.use(express.static( `${__dirname}/../build`));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.DATABASE_URL).then( db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');

    db.users.find_user([ profile.identities[0].user_id ]).then( user => {
        if ( user[0] ) {
            return done( null, user[0] );       
        } else {        
         db.users.create_user([profile.displayName, profile.emails[0].value, profile.picture, profile.identities[0].user_id]).then( user => {        
               return done( null, user[0] ); 
            })
        }   
    })
}))

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    app.get('db').users.find_session_user([user.id]).then( user => {
        return done(null, user[0]);
    })
    done(null, user);
});

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/admin',
    failureRedirect: 'http://localhost:3000/#/'
}))

app.get('/auth/authorized', (req, res, next) => {
    if (!req.user) {
        return res.status(404).send('User not found');
    } else {
        return res.status(200).send(req.user);
    }
});
    
app.get('/auth/logout', (req, res) => {
    req.logOut();
    return res.redirect(302, 'http://localhost:3000/#/');
});



app.get('/api/clients', clientCtrl.getClients);
app.post('/api/clients', clientCtrl.addClient);
// app.put('/api/clients', clientCtrl.updateClientSurvey) ???

app.get('/api/invoices', invoicesCtrl.getInvoices);
app.post('/api/invoices', invoicesCtrl.addInvoice);

app.get('/api/services', servicesCtrl.getServices);
app.post('/api/services', servicesCtrl.addService);
app.put('/api/services', servicesCtrl.updateService);
app.delete('/api/services', servicesCtrl.deleteService);






let PORT = 3005;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})  