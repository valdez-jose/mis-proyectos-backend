import { useState } from "react";
import styles from "../navbar/Navbar.module.css"

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <h2>Mi Backend</h2>
      </div>

      {/* Menú */}
      <ul
        className={`${styles.navLinks} ${
          menuAbierto ? styles.active : ""
        }`}
      >
        <li>
          <a
            href="https://tu-link-sobre-mi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sobre Mí
          </a>
        </li>

        <li>
          <a
            href="https://tu-link-portafolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mi Portafolio
          </a>
        </li>

        <li>
          <a href="#">Próximamente</a>
        </li>
      </ul>

      {/* Hamburguesa */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;