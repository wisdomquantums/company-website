import transporter from "../utils/emailTransporter.js";

export const sendEmailController = async (req, res) => {
    const { first_name, last_name, email, phone, service, message } = req.body;

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission - ${first_name}`,
            html: `
        <h2>New Contact Form Query</h2>
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        res.json({ success: true, message: "Email sent successfully" });
    } catch (err) {
        console.error("Email Error:", err);
        res.status(500).json({ success: false, message: "Email failed" });
    }
};
