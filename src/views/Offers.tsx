import styles from "./Offers.module.css";
import products from "../assets/products";
import ProductCart from "../components/ProductCart";
import Hero from "../components/Hero";

export default function Offers() {
  const porductsOnSale = products.filter((product) => product.onsale === true);
  return (
    <>
      <Hero firstText={"Grandes"} secondText={"Ofertas"} />
      <main>
        <div className={styles["sales-block"]}>
          <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
          <div id="product-container" className={styles["product-container"]}>
            {porductsOnSale?.map((product, index) => (
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
        </div>
      </main>
    </>
  );
}
