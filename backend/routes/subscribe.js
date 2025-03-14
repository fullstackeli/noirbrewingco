import express from 'express';
import Subscriber from '../models/email.model.js';
import { sendWelcomeEmail } from '../services/emailService.js';

const router = express.Router();

router.post('/subscribe', async (req, res) => {
    console.log("ROUTE HIT!!!")
    const { email, name } = req.body;

    try {
        let subscriber = await Subscriber.findOne({ email });
        console.log("Mongo works!!!")
        if (subscriber) {
            return res.status(409).json({ message: 'This email is already subscribed.' });
        }

        subscriber = new Subscriber({ email, name });
        await subscriber.save();
        console.log("Sending mail!!!")
        await sendWelcomeEmail(email, name);

        res.status(201).json({ message: 'Subscription successful and email sent!' });
    } catch (error) {
        res.status(500).json({ message: 'Error subscribing', error });
    }
});

export default router;
