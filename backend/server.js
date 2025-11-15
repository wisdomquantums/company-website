import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

// Routes
import emailRoutes from "./src/routes/email.routes.js";

// WhatsApp webhook
import whatsappWebhook from "./src/webhook/whatsapp.webhook.js";

dotenv.config();
const app = express();

/* ======================================================
   DYNAMIC CORS FROM .env
====================================================== */
const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",")
    : [];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true); // Mobile/Postman
            if (allowedOrigins.includes(origin)) return callback(null, true);
            return callback(new Error("CORS blocked: " + origin));
        },
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
    })
);

app.options("*", cors());
app.use(express.json());

/* ======================================================
   ROUTES
====================================================== */
app.use("/api", emailRoutes);
app.use("/", whatsappWebhook);

/* ======================================================
   ROOT ROUTE
====================================================== */
app.get("/", (_, res) => {
    res.send("WisdomQuantum Backend Running Successfully");
});

/* ======================================================
   START SERVER
====================================================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
