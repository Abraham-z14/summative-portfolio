import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        Portfolio
      </Link>

      <nav>
        <Link to="/">Projects</Link>
      </nav>
    </header>
  );
}

export default Header;
