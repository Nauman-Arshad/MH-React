import React from 'react';
import './Service.css';

function Service() {
  return (
    <section className="services">
      <div className="services-header">
        <p className="category-label">CATEGORY</p>
        <h1>We Offer Best Services</h1>
      </div>

      <div className="pattern-image">
        <img src="/images/pattern.png" alt="pattern" />
        </div>
      
        <div className="service-row">
         <div className="service">
        <img src="/images/service 1.png" alt="pattern" />
        <h3>Calculated Weather </h3>
        <p>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>

         <div className="service">
        <img src="/images/service 2.png" alt="pattern" />
        <h3>Best Flights</h3>
        <p>Engrossed listening. Park gate sell they west hard for the.</p>
        </div>

         <div className="service">
        <img src="/images/service 3.png" alt="pattern" />
        <h3>Local Events</h3>
        <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
        </div>

         <div className="service">
        <img src="/images/service 4.png" alt="pattern" />
        <h3>Customization</h3>
        <p>We deliver outsourced aviation services for military customers</p>
        </div>
        </div>
        
    </section>
  );
};

export default Service;