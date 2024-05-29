import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <Link to="/" className={styles["header-logo"]}>
          <img
            className={styles["header-logo-img"]}
            src="./tiendamia-logo.svg"
            width="218"
            alt="Logo store"
          />
        </Link>
        <form className={styles["header-form"]}>
          <input
            className={styles["header-input"]}
            type="text"
            placeholder="Search"
            id="search"
          />
        </form>
        <ul className={styles["header-social"]}>
          <li id="facebook" className={styles["header-li"]}>
            <a className={styles["header-a"]} href="https://facebook.com">
              <img
                className={styles["header-social-img"]}
                src="./facebook.png"
              />
            </a>
          </li>
          <li id="instagram" className={styles["header-li"]}>
            <a className={styles["header-a"]} href="https://instagram.com">
              <img
                className={styles["header-social-img"]}
                src="./instagram.png"
              />
            </a>
          </li>
          <li id="cart" className={styles["header-li"]}>
            <Link to="/cart" className={styles["header-a"]}>
              <img
                className={styles["header-social-img"]}
                src="./shopping-cart.svg"
              />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
