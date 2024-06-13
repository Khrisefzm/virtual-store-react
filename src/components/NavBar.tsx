// import styles from "./NavBar.module.css";
import NavButton from "./NavButton";

function NavBar() {
  const navContent = [
    { text: "Ofertas", link: "/Offers" },
    { text: "Cómo comprar", link: "/" },
    { text: "Costos y tarifas", link: "/" },
    { text: "Mis pedidos", link: "/" },
    { text: "Garantía", link: "/" },
  ];
  return (
    <nav id="navbar" className="w-full py-[15px] px-[20px] bg-[#ff3b3c]">
      <ul className="w-full max-w-[1080px] flex justify-between line-none text-[14px] m-auto">
        {navContent.map((element, key) => (
          <NavButton key={key} text={element.text} link={element.link} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
