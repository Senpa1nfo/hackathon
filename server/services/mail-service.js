const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMPT_HOST,
            port: process.env.SMPT_PORT,
            secure: false,
            auth: {
                user: process.env.SMPT_USER,
                pass: process.env.SMPT_PASSWORD
            }
        });
    }

    async SendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: '<strong>History Of Ukraine',
            to,
            subject: 'Активація облікового запису на History Of Ukraine',
            text: '',
            html: 
                `
                <div>
                    <h1>
                        <a href="${link}" style="text-decoration: none">Натисніть для активації</a>
                    </h1>
                </div>
                `
        });
    }
}

module.exports = new MailService();