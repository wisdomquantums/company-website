import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ======================================================
   CORS CONFIG — FIXES ALL PRE-FLIGHT ERRORS
====================================================== */
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://wisdomquantums.com",
            "https://www.wisdomquantums.com",
            "https://your-frontend-domain.com"
        ],
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
    })
);

// Allow OPTIONS preflight
app.options("*", cors());

app.use(express.json());

/* ======================================================
   ZOHO SMTP TRANSPORTER
====================================================== */
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,          // smtp.zoho.in
    port: Number(process.env.EMAIL_PORT),  // 465
    secure: process.env.EMAIL_SECURE === "true", // true/false
    auth: {
        user: process.env.EMAIL_USER,        // info@yourdomain.com
        pass: process.env.EMAIL_PASS,        // Zoho app password
    },
});

// SMTP connection check
transporter.verify((err, success) => {
    if (err) {
        console.log("SMTP Error:", err);
    } else {
        console.log("SMTP Connected Successfully.");
    }
});

/* ======================================================
   ROUTE: SEND EMAIL
====================================================== */
app.post("/send-email", async (req, res) => {
    const { first_name, last_name, email, phone, service, message } = req.body;

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // receive in your Zoho inbox
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
    } catch (error) {
        console.error("Email send error:", error);
        res.status(500).json({ success: false, message: "Email sending failed" });
    }
});

/* ======================================================
   START SERVER
====================================================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
