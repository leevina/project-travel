import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <img src="./img/landscape.jpeg" alt="" />
        <h1>About Us</h1>
        <p>Temukan petualangan Anda yang tak terlupakan dengan kami! Jelajahi destinasi indah di seluruh dunia dan buat kenangan yang abadi.</p>
        <p>
          Jelajahi destinasi indah di seluruh dunia dan buat kenangan yang abadi.Nikmati liburan sempurna dengan layanan kami yang memukau. Dari pantai eksotis hingga puncak gunung yang menakjubkan, kami memiliki semua yang Anda butuhkan
          untuk perjalanan yang tak terlupakan.
        </p>
        <button className="btn">Learn More</button>
      </div>
    </section>
  );
};

export default AboutUs;
