import { useState } from "react";
import axios from 'axios';

const Promo = () => {
    const [formState, setFormState] = useState({
        email: '',
        name: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Track errors from API

    // API request to send email
    const sendEmail = async (email, name) => {
        try {
            setLoading(true); // Start loading
            const response = await axios.post('/api/subscribe', { email, name });
            if (response.status === 200) {
                setSubmitted(true); // Mark as submitted
            }
        } catch (error) {
            setError('Something went wrong. Please try again later.'); // Handle API errors
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // Handle form input change
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(formState.email, formState.name);
        setFormState({ email: '', name: '' }); // Clear form state after submission
    };

    return (
        <div>
            <h2>Sign up and receive 200% off or something</h2>
            {submitted ? (
                <p>Thanks for subscribing!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={loading}>Subscribe</button>
                </form>
            )}

            {/* Loading Spinner */}
            {loading && <p>Loading...</p>}

            {/* Display error message */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Promo;
