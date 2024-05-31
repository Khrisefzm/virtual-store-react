import { useState } from "react";
import styles from "./Checkout.module.css";

export default function Checkout({ product }) {
  const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const isInCart = cart.find((productCart) => productCart.id === product.id);
  const defaultButton = isInCart ? true : false;

  const [button, setButton] = useState(defaultButton);
  const [quantity, setQuantity] = useState(1);

  function subTotal(e) {
    setQuantity(Number(e.target.value));
  }

  const manageCart = () => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }

    const cartProduct = { ...product, quantity };

    let newCart = [...cart];
    const isInCart = cart.find((productCart) => productCart.id === product.id);

    if (!isInCart) {
      newCart.push(cartProduct);
      setButton(true);
    } else {
      newCart = cart.filter((each) => each.id !== product.id);
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className={styles["product-checkout-block"]}>
      <div className={styles["checkout-container"]}>
        <span className={styles["checkout-total-label"]}>Total:</span>
        <h2 id="price" className={styles["checkout-total-price"]}>
          $ {(product.price * quantity).toLocaleString()}
        </h2>
        <p className={styles["checkout-description"]}>Incluye impuesto PAIS.</p>
        <ul className={styles["checkout-policy-list"]}>
          <li>
            <span className={styles["policy-icon"]}>
              <img src="./truck.png" alt="Truck" />
            </span>
            <span className={styles["policy-desc"]}>
              Agrega el producto al carrito para conocer los costos de envío
            </span>
          </li>
          <li>
            <span className={styles["policy-icon"]}>
              <img src="./plane.png" alt="Plane" />
            </span>
            <span className={styles["policy-desc"]}>
              Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
              envío normal
            </span>
          </li>
        </ul>
        <div className={styles["checkout-process"]}>
          <div className={styles["top"]}>
            <input
              type="number"
              min="1"
              defaultValue={quantity}
              onChange={(e) => subTotal(e)}
            />
            <button
              type="button"
              className={button ? styles["remove-btn"] : styles["cart-btn"]}
              onClick={() => {
                manageCart();
              }}
            >
              {button ? "Quitar del Carrito" : "Añadir al Carrito"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
