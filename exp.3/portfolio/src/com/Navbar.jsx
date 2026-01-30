import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT LOGO / NAME → GO TO PROFILE */}
      <Link to="/" className="logo">
        Arnav <span>Mishra</span>
      </Link>

      {/* RIGHT NAV LINKS */}
      <div className="nav-links">
        <Link to="/">Profile</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
      </div>
    </nav>
  );
}
