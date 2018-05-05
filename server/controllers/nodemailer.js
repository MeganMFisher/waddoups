const nodemailer = require('nodemailer');
var schedule = require('node-schedule');
const _ = require('lodash');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
    }
});

module.exports = {
    contactAdmin: (req, res) => {   
        
        const { email, description } = req.body;
    
        let mailOptions = {
            from: `"Alyssa Waddoups Fitness" <${process.env.USER_EMAIL}>`,
            to: process.env.ADMIN_EMAIL,
            subject: email,
            text: description      
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                res.send(error)
            }
            res.status(200).send(info);
        });
    },

    emailClientSurvey: (req, res) => {       
        const { email } = req.body;
    
        let mailOptions = {
            from: `"Alyssa Waddoups Fitness" <${process.env.USER_EMAIL}>`, 
            to: email,
            subject: 'Welcome!', 
            text: 'Please complete the attached survey.',
            attachments: [{
                filename: 'Survey.pdf',
                path: 'https://drive.google.com/file/d/1EIw5Z4tAXU7GOiA_gkqvMGvHjGSncatl/view?usp=sharing',
                contentType: 'application/pdf'
              }], function (err, info) {
                 if(err){
                   console.error(err);
                   res.send(err);
                 }
                 else{
                   console.log(info);
                   res.send(info);
                 }
              }        
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                res.send(error)
            }
            res.status(200).send(info);
        });
    },

    // monthlyReminder: (req, res) => {  
    //     const db = req.app.get('db');
    //     db.clients.get_subscribedClients().then(resp => {
    //         // res.send(resp)
    //         _.map(resp, client => {
    //             let mailOptions = {
    //                 from: `"Alyssa Waddoups Fitness" <${process.env.USER_EMAIL}>`, 
    //                 to: client.email,
    //                 subject: 'A New Month Is Approaching!', 
    //                 text: 'Please go to my website to purchase another month of training!',       
    //             };
            
    //             transporter.sendMail(mailOptions, (error, info) => {
    //                 if (error) {
    //                     console.log(error)
    //                     res.send(error)
    //                 }
    //                 res.status(200).send(info);
    //             });
    //         })            
    //     })      
    // }
}


schedule.scheduleJob({hour: 12, minute: 30, dayOfWeek: 6}, function(){
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
