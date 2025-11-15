import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const router = express.Router();

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const WHATSAPP_PHONE_ID = process.env.WHATSAPP_PHONE_ID;

/* ======================================================
   VERIFY WEBHOOK
====================================================== */
router.get("/webhook", (req, res) => {
    const VERIFY_TOKEN = process.env.WEBHOOK_VERIFY_TOKEN || "WQ_VERIFY_TOKEN";

    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token === VERIFY_TOKEN) {
        return res.status(200).send(challenge);
    }

    return res.status(403).send("Verification failed");
});

/* ======================================================
   RECEIVE INCOMING MESSAGE + AUTO-REPLY
====================================================== */
router.post("/webhook", async (req, res) => {
    try {
        const entry =
            req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

        if (entry && entry.from) {
            const userNumber = entry.from;

            const autoReplyMsg =
                `Hello! 👋  
Thank you for contacting Wisdom Quantum Solutions.

Our Services:
• Website Development
• Mobile App Development
• UI/UX Designing
• Digital Marketing
• Branding & Logo Design

Please share your requirement:
1. Project Type:
2. Budget:
3. Timeline:

Our team will respond shortly.`;

            await fetch(`https://graph.facebook.com/v18.0/${WHATSAPP_PHONE_ID}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${WHATSAPP_TOKEN}`,
                },
                body: JSON.stringify({
                    messaging_product: "whatsapp",
                    to: userNumber,
                    type: "text",
                    text: { body: autoReplyMsg },
                }),
            });
        }

        res.sendStatus(200);
    } catch (err) {
        console.error("WhatsApp Webhook Error:", err);
        res.sendStatus(500);
    }
});

export default router;
