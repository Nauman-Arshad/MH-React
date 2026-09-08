import React from 'react';
import './Destination.css';

function Destination() {
  return (
    <section className="destination">
      <div className="destination-header">
        <p className="category-label">Top Selling</p>
        <h1>Top Destinations</h1>
      </div>
        <div className="destination-row">
            <div className="destination-card">
                <img src="/images/img-1.png" alt="destination" />
            </div>
             <div className="destination-card">
                <img src="/images/img-2.png" alt="destination" />
            </div>
             <div className="destination-card">
                <img src="/images/img-3.png" alt="destination" />
            </div>
        </div>

      </section>
  );
}
export default Destination;