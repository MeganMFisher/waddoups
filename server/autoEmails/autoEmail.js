const nodemailer = require('nodemailer');
var schedule = require('node-schedule');
const _ = require('lodash');



schedule.scheduleJob({hour: 13, minute: 14, dayOfWeek: 6}, function(){
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    });

    //run once a day, if it has been (moment) 25 days since last purchase and subscribed ///join on clients and invoices where email is the same
    const db = req.app.get('db');
    db.clients.get_subscribedClients().then(resp => {
        _.map(resp, client => {
            let mailOptions = {
                from: `"Alyssa Waddoups Fitness" <${process.env.USER_EMAIL}>`, 
                to: client.email,
                subject: 'A New Month Is Approaching!', 
                text: 'Please go to my website to purchase another month of training!',       
            };
        
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error)
                    res.send(error)
                }
                res.status(200).send(info);
            });
        })            
    }) 
});