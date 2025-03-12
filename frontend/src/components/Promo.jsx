import { useState } from "react";
import axios from 'axios';
import { set } from "mongoose";

const Promo = () => {
    const [formState, setFormState] = useState({
        email: '',
        name: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const sendEmail = async (email, name) => {
        const data = await axios.post('/api/subscribe', {
            email,
            name
        });
        setSubmitted(true)
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = formState.email;
        const name = formState.name;
        sendEmail(email, name);
        setFormState({
            email: '',
            name: ''
        });
    }

    return (
        <div>
            <h2>Sign up and recieve 200% off or something</h2>
            {
                submitted ? <p>Thanks for subscribing!</p> : (
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" id="email" name="email" value={formState.email} onChange={handleChange} />
                        <input type="text" placeholder="Name" id="name" name="name" value={formState.name} onChange={handleChange} />
                        <button type="submit" >Subscribe</button>
                    </form>
                )
            }

        </div>
    );
};

export default Promo;
