import React from 'react';
import './Testimonials.scss';
const Testimonials = () => {
  return (
    <div>
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        <div className="testimonial">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sapien magna. Nullam laoreet ac dolor sit amet tincidunt. Duis lobortis mi nec orci iaculis eleifend. Proin luctus euismod quam non vestibulum."</p>
          <p><strong>John Doe</strong>, CEO</p>
        </div>
        <div className="testimonial">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sapien magna. Nullam laoreet ac dolor sit amet tincidunt. Duis lobortis mi nec orci iaculis eleifend. Proin luctus euismod quam non vestibulum."</p>
          <p><strong>Jane Doe</strong>, CFO</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
