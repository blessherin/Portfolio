import nodemailer from 'nodemailer';

export default async function handler(req,res) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowed'});
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail', // atau 'Mailtrap', 'SendGrid', dll.
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: 'New Contact Message',
            text: message,
            html: `
				<h3>New Message From ${name}</h3>
				<p><strong>Email:</strong> ${email}</p>
				<p>${message}</p>
			`,
        });
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email send error:', err);
        return res.status(500).json({ message: 'Failed to send email' });
    }
}