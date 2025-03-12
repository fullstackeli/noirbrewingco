import 'dotenv/config'
import express from 'express';
import connectDB from './config/db.js';
import subscribeRoute from './routes/subscribe.js';
import path from "path";
import { fileURLToPath } from 'url';

console.log(process.env.NODE_ENV)

connectDB();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();
app.use(express.json());

app.use('/api', subscribeRoute);

if( process.env.NODE_ENV == 'production'){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
