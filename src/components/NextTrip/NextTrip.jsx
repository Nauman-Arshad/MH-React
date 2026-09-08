import React from "react";
import "./NextTrip.css";

function NextTrip() {
  return (
    <section className="next-trip">
      <div className="next-trip-header">
        <p className="category-label">Easy and Fast</p>
        <h1>Book your next trip in 3 easy steps</h1>
      </div>

      <div className="next-trip-column">
        <div className="next-trip-card">
          <img src="/images/pic1.png" alt="Next Trip" />
          <div className="next-trip-card-row">
          <h4>Choose Destination</h4>
          <p>Select your preferred destination from our wide range of options.</p></div>
        </div>

        <div className="next-trip-card">
          <img src="/images/pic2.png" alt="Next Trip" />
          <div className="next-trip-card-row">
          <h4>Make Payment</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p></div>
        </div>

        <div className="next-trip-card">
          <img src="/images/pic3.png" alt="Next Trip" />
            <div className="next-trip-card-row">
          <h4>Reach Airport on Selected Date</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p></div>
        </div>
      </div>

      </section>
    ); 
}
export default NextTrip;