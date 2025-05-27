
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-black flex">
        <div className="navbar-container">
            <Link to="/" className="text-white text-2xl font-bold">
            GLUG NITC
            </Link>
            <ul className="nav-menu">
            <li className="nav-item">
                <Link to="/about" className="nav-links">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-links">Contact</Link>
            </li>
            <li className="nav-item">
                <Link to="/events" className="nav-links">Events</Link>
            </li>
            </ul>
        </div>
        </nav>
    );
}

export default Navbar;