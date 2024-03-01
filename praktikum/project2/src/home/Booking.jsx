import React from 'react';
import './Booking.css'; 

const Booking = () => {
  return (
    <section className="booking">
      <div className="container">
        <h2>Booking Your Adventure</h2>
        <form className="booking-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Destination" />
          <input type="date" placeholder="Date" />
          <button type="submit" className="btn">Booking Now</button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
