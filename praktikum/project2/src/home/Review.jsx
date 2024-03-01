import React from 'react';
import './Review.css';

const Review = () => {
  return (
    <section className="review-section">
      <div className="container">
        <h2>Customer Reviews</h2>
        <div className="review-container">
          <div className="review">
            <img src="./img/haruto.jpeg" alt="Customer" />
            <h3>John Doe</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ligula at leo sodales accumsan."</p>
          </div>
          <div className="review">
            <img src="./img/jenoooo.jpg" alt="Customer" />
            <h3>Jane Smith</h3>
            <p>"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras non nisi et purus rutrum ultricies."</p>
          </div>
          <div className="review">
            <img src="./img/jeno2.jpg" alt="Customer" />
            <h3>David Brown</h3>
            <p>"Curabitur aliquam sapien a erat efficitur, a tincidunt ligula congue. Duis commodo vestibulum lorem, nec rhoncus est fringilla nec."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
