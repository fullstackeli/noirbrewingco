import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Reusable Event Component
const EventCard = ({ image, title, description, link, buttonText }) => (
  <div style={styles.event}>
    <img src={image} alt={title} style={styles.eventImage} />
    <h2 style={styles.eventTitle}>{title}</h2>
    <p style={styles.eventDescription}>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" style={styles.button}>
      {buttonText}
    </a>
  </div>
);

const EventsPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted with:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '' }); // Reset form
    setTimeout(() => closePopup(), 2000); // Close after 2 seconds for feedback
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.headerFooter}>
        <h1>Noir Brew Happenings</h1>
        <nav>
          <RouterLink to="/" style={styles.navLink}>Home</RouterLink>
          <RouterLink to="/shop" style={styles.navLink}>Shop</RouterLink>
          <RouterLink to="/our-story" style={styles.navLink}>Our Story</RouterLink>
          <RouterLink to="/menu" style={styles.navLink}>Menu</RouterLink>
          <RouterLink to="/events" style={styles.navLink}>Happenings</RouterLink>
        </nav>
      </header>

      {/* Main Content */}
      <div style={styles.container}>
        <EventCard
          image="/images/dj.jpg"
          title="Coffee & House"
          description="Join us for a day of house music where coffee & beats come together. - March 15, 12PM -7:30PM"
          link="https://www.healthandbass.com/post/why-house-music-feels-so-good?utm_source=chatgpt.com"
          buttonText="Learn More"
        />
        <EventCard
          image="/images/latteart.jpg"
          title="Latte Art Throwdown"
          description="Baristas go head-to-head in a friendly competition to create the best latte art. - March 22, 1PM - 3PM"
          link="https://barist.art/"
          buttonText="Practice"
        />
        <EventCard
          image="/images/bookclub.jpg"
          title="Book Club: The Inherited Mind"
          description="A discussion on mental health and generational struggles. - Every Thursday, 7PM - 8:00PM"
          link="https://www.barnesandnoble.com/w/the-inherited-mind-james-longman/1145322298"
          buttonText="Join Us"
        />
        <EventCard
          image="/images/latino.jpg"
          title="Latino Support Fundraiser"
          description="Supporting the Latino community, raising awareness, and donating to impactful organizations. - April 5, All Day"
          link="https://hispanicheritage.org/"
          buttonText="Learn More"
        />
        <EventCard
          image="/images/coffeeluca.jpg"
          title="Coffee with Your Fur Baby"
          description="Bring your furry friend & enjoy coffee together! Complimentary pet treats for every guest who brings a pet. - April 12, All Day"
          link="https://newsinhealth.nih.gov/2018/02/power-pets"
          buttonText="Learn More"
        />
      </div>

      {/* Subscribe Button */}
      <div style={styles.subscribeContainer}>
        <button style={styles.subscribeBtn} onClick={openPopup}>
          Subscribe to our Newsletter
        </button>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div style={styles.popup} onClick={closePopup}>
          <div style={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.closeButton}
              onClick={closePopup}
              aria-label="Close subscription form"
            >
              &times;
            </button>
            <h2>Subscribe to Our Newsletter</h2>
            <form onSubmit={submitForm}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={styles.popupInput}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.popupInput}
              />
              <button type="submit" style={styles.button}>
                Submit
              </button>
            </form>
            {formSubmitted && <p style={{ color: 'green' }}>Thank you for subscribing!</p>}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.headerFooter}>
        <p>&copy; 2025 Noir Brew. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EventsPage;
