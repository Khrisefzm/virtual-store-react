import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import products from "../assets/products.js";
import Hero from "../components/Hero.js";

function Home() {
  return (
    <>
      <Hero firstText={"tecnología"} secondText={"renovada"} />
      <main>
        <div className={styles["product-container"]} id="products">
          {products &&
            products.map((product, index) => {
              return (
                <Link
                  key={index}
                  to={`/details/:${product.id}`}
                  className={styles["product-card"]}
                >
                  <img
                    className={styles["product-img"]}
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <div className={styles["product-info"]}>
                    <span className={styles["product-title"]}>
                      iPad Pro 12.9
                    </span>
                    <span className={styles["product-description"]}>
                      Silver
                    </span>
                    <div className={styles["product-price-block"]}>
                      <span className={styles["product-price"]}>900000</span>
                      <span className={styles["product-discount"]}>
                        50% Off
                      </span>
                    </div>
                    <div className={styles["product-tax-policy"]}>
                      Incluye impuesto País y percepción AFIP
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </main>
    </>
  );
}

export default Home;
