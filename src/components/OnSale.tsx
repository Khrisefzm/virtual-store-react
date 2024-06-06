import styles from "./OnSale.module.css";
import products from "../assets/products";
import ProductCart from "./ProductCart";
import { useState } from "react";

export default function OnSale() {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(3);

  const porductsOnSale = products.filter((product) => product.onsale === true);
  const productsToShow = porductsOnSale.slice(from, to);

  console.log(from);
  console.log(to);
  function next() {
    if (to >= porductsOnSale.length) {
      setFrom(0);
      setTo(3);
      return false;
    }
    setFrom(from + 3);
    setTo(to + 3);
  }

  function prev() {
    if (from <= 0) {
      setFrom(porductsOnSale.length - 3);
      setTo(porductsOnSale.length);
      return false;
    }
    setFrom(from - 3);
    setTo(to - 3);
  }

  return (
    <div className={styles.slide}>
      <button className={styles.arrow} onClick={() => prev()}>
        🡰
      </button>
      <div id="product-container" className={styles["product-container"]}>
        {productsToShow?.map((product, index) => (
          <ProductCart
            key={index}
            id={product.id}
            title={product.title}
            image={product.images[0]}
            color={product.colors[0]}
            price={product.price}
            onSale={product.onsale}
            discount={product.discount}
          />
        ))}
      </div>
      <button className={styles.arrow} onClick={() => next()}>
        🡲
      </button>
    </div>
  );
}
