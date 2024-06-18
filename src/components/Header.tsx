import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="w-full h-[150px] bg-red pt-[20px] px-[20px] flex flex-col items-center">
      <div className="w-full max-w-[1080px] flex justify-between items-center grow">
        <Link to="/" className="w-1/3 flex items-center grow justify-start">
          <img
            className="h-[50px]"
            src="./tiendamia-logo.svg"
            width="218"
            alt="Logo store"
          />
        </Link>
        <form className="w-1/3 flex items-center grow justify-center">
          <input
            className="h-[60px] rounded-[15px] border-none w-full p-10 mx-[20px] text-[14px] text-center"
            type="text"
            placeholder="Search"
            id="search"
          />
        </form>
        <ul className="w-1/3 flex items-center grow justify-end line-none">
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
