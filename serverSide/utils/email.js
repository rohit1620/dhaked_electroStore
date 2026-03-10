const nodemailer=require("nodemailer");

const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
})

const sendOtpMail=async(email,otp,type)=>{
    try {
        const mailOption={
            from:process.env.EMAIL,
            to:email,
            subject:type,
            html:`<div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
                    <h2 style="color: #111;">${type}</h2>
                    <p style="color: #555; font-size: 16px;">${otp}</p>
                    <div style="margin: 20px auto; padding: 15px; font-size: 24px; font-weight: bold; background: #f4f4f4; width: max-content; letter-spacing: 5px;">
                        ${otp}
                    </div>
                    <p style="color: #999; font-size: 12px;">This code expires in 5 minutes. If you didn't request this, please ignore this email.</p>
                </div>`
        }
        await transport.sendMail(mailOption);
        console.log("mail succussfully send")
    } catch (error) {
        console.log("error",error)
    }
}

module.exports=sendOtpMail