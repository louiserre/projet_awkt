// Importation du module nodemailer
import nodemailer from "nodemailer";

export function serverEmail(email,sujet,message) {

  const transporter = nodemailer.createTransport({ 
    service:"gmail",
    port : process.env.PORT_SERVER_EMAIL, 
    host : "smtp.gmail.com", 
       auth : { 
            user:process.env.USER_SERVER_EMAIL,
            pass:process.env.PASSWORD_SERVER_EMAIL,
        }, 
    secure: true //false
  });

  const optionConfig = {
    from: process.env.USER_NODEMAILER,  // sender address
      to: email,   // list of receivers
      subject: sujet,
      html: message
  };

  return transporter.sendMail(optionConfig, function (err, info){ 
    if(err){      
      return err;
    }      
      return info; 
  });
};



