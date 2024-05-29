import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";

function NavButton({ text, link }) {
  return (
    <>
      <li className={styles["nav-li"]}>
        <Link to={link} className={styles["nav-a"]}>
          {text}
        </Link>
      </li>
    </>
  );
}

export default NavButton;
