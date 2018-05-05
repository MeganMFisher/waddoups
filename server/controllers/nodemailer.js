const nodemailer = require('nodemailer');

module.exports = {
    contactAdmin: (req, res) => {   
        
        const { email, description } = req.body;
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: process.env.USER_EMAIL, //sender email address
                pass: process.env.USER_PASS //sender email password
            }
        });
    
        let mailOptions = {
            from: `"Alyssa Waddoups Fitness" <${process.env.USER_EMAIL}>`, // sender email address
            to: process.env.ADMIN_EMAIL, //email address you want to send email to.
            subject: email, // Subject line
            text: description  //body of email.       
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                res.send(error)
            }
            res.status(200).send(info);
        });
    }
}