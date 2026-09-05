import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header_logo">Travely</div>
      <nav className="header_nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
