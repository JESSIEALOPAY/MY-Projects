const nodemailer = require('nodemailer')
const asyncHandler = require('express-async-handler')

const sendEmail = asyncHandler(async (mailOptions) => {

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER, // generated ethereal user
            pass: process.env.SMTP_PASS // generated ethereal password
        },
    });
    let info = await transporter.sendMail(mailOptions)

    // console.log(process.env.SMTP_HOST,process.env.SMTP_PORT, process.env.SMTP_USER, process.env.SMTP_PASS)
    console.log(info.messageId)
    // {
    //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //     to: "bar@example.com, baz@example.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    //   }
}
)
module.exports = sendEmail
