const nodemailer = require('nodemailer');

module.exports={
    mailTransporter: nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:"kasumicomerce@gmail.com",
            pass: "bosyynmkdbdplijq"
        },
    }), 
      
    //  OTP : `${Math.floor(1000 + Math.random() * 9000)}`,

}