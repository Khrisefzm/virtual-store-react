import styles from "./Home.module.css";
import products from "../assets/products.js";
import Hero from "../components/Hero.js";
import ProductCart from "../components/ProductCart.js";

function Home() {
  return (
    <>
      <Hero firstText={"tecnología"} secondText={"renovada"} />
      <main>
        <div className={styles["product-container"]} id="products">
          {products?.map((product, index) => {
            return (
              <ProductCart
                key={index}
                id={product.id}
                image={product.images[0]}
                title={product.title}
                color={product.colors[0]}
                price={product.price}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Home;
