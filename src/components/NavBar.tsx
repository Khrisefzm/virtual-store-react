import styles from "./NavBar.module.css";
import NavButton from "./NavButton";

function NavBar() {
  const navContent = [
    { text: "Ofertas", link: "/" },
    { text: "Cómo comprar", link: "/" },
    { text: "Costos y tarifas", link: "/" },
    { text: "Mis pedidos", link: "/" },
    { text: "Garantía", link: "/" },
  ];
  return (
    <nav id="navbar">
      <ul className={styles["nav-ul"]}>
        {navContent.map((element, key) => (
          <NavButton key={key} text={element.text} link={element.link} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
