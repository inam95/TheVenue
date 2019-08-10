import React from "react";

const Loacation = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title='123'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.2892803963873!2d-96.80559212578954!3d32.78458814390165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e993d0ea3c1ff%3A0x1859d2cc74f588e2!2sThe+Dallas+World+Aquarium!5e0!3m2!1sen!2slk!4v1535305864714"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Loacation;
