import { navLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {navLinks.map(({ id, href, label }) => {
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {label}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(({ id, href, icon }) => {
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon">
                <i className={`fab fa-${icon}`}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
