import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_brand">
          <h3>Travely</h3>
          <p>Travel with us</p>
        </div>
        <nav className="footer_nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
        <div className="footer_bottom">
          <p>&copy; 2024 Travely. All rights reserved.</p>
        </div>
    </footer>
  );
};
export default Footer;
