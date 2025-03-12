import nodemailer from "nodemailer";
import 'dotenv/config'

// ✅ Step 1: Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS  // Your email password or app password
    }
});

// ✅ Step 2: Function to Send Welcome Email
export const sendWelcomeEmail = async (email, name) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "☕ Welcome to the Noir Brew Family!",
        html: `
            <div style="max-width: 600px; margin: auto; padding: 20px; background: #ffffff; border-radius: 10px; text-align: center; font-family: 'Questa Sans Bold', sans-serif; color: rgb(18, 45, 18);">
                
                <h1 style="color: rgb(18, 45, 18); font-size: 28px;">Welcome to the Noir Brew Family! ☕</h1>
                
                <p style="font-size: 16px; line-height: 1.6;">
                    We’re thrilled to have you on board and can’t wait to share all the exciting things brewing at Noir Brewing Company.
                </p>
                
                <p style="font-size: 16px; line-height: 1.6;">
                    By subscribing to our newsletter, you’ll be the first to know about exclusive events, new coffee releases, special promotions, and behind-the-scenes updates from our team. Whether it’s a new seasonal roast, a latte art competition, or a cozy live music night, you’ll always have the inside scoop!
                </p>

                <p style="font-size: 16px; line-height: 1.6;">
                    Thank you for being part of our community—we’re here to make every sip special. Stay tuned, and we’ll see you soon for your next favorite cup of coffee! ☕
                </p>
                
                <a href="https://www.noirbrew.com" style="display: inline-block; background: rgb(18, 45, 18); color: #ffffff; padding: 12px 20px; font-size: 16px; text-decoration: none; border-radius: 5px; margin-top: 15px; font-weight: bold;">
                    Coffee is One Click Away →
                </a>
                
                <p style="margin-top: 20px; font-size: 14px; color: rgb(18, 45, 18); font-weight: bold;">With gratitude,</p>
                <p style="font-weight: bold; font-size: 16px;">Noir Brew Team</p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Welcome email sent to:", email);
    } catch (error) {
        console.error("❌ Error sending email:", error);
    }
};
