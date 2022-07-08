const nodemailer = require("nodemailer");
exports.verifyemail=async(email,URL,id,OTP)=>{
  
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "532d2066111809",
      pass: "00a365ca478820"
    }
      });
      await transport.sendMail({
        from: "baainzzy256@gmail.com", 
        to: email,
        subject: "purchase verification",
        html: `<div>
        
        <p>Click <a href="${URL+"/"+id+"/"+'verify-email'+"/"+OTP}">!!!${URL}!!${id}!!!${OTP}</a> to reset your password</p>
        
        </div>`,
      });
  
} 

exports.emailverified=async(email)=>{
  
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "532d2066111809",
      pass: "00a365ca478820"
    }
      });
      await transport.sendMail({
        from: "baainzzy256@gmail.com", 
        to: email,
        subject: "verification successful",
        html: `<div>verification succesfulley
        </div>`,
      });
} 


