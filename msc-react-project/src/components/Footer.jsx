import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="footer-brand">MSC<span>.</span></Link>
          <p>Clear thinking. Better marketing. Sustainable growth.</p>
        </div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <small>© {new Date().getFullYear()} Marketing Support Consultancy. Student project.</small>
      </div>
    </footer>
  );
}
