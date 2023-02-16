import logo from "../assets/logo.svg";
import { navLinks, socialLinks } from "../data/data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* Navigation links */}
        <ul className="nav-links" id="nav-links">
          {navLinks.map(({ id, href, label }) => {
            return (
              <li key={id}>
                <a href={href} className="nav-link">
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map(({ id, href, icon }) => {
            return (
              <li key={id}>
                <a href={href} target="_blank" className="nav-icon">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
