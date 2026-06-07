import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <NavLink
        to="/"
        className="logo"
      >
        Élégance Coiffure
      </NavLink>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Accueil
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Tarifs
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Rendez-vous
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Contact
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;