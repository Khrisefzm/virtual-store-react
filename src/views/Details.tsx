import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import products from "../assets/products";
import Thumbs from "../components/Thumbs";
import Description from "../components/Description";
import Checkout from "../components/Checkout";
import OnSale from "../components/OnSale";

function Details() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  return (
    <main>
      {product ? (
        <div className={styles["details-container"]}>
          <div id="details" className={styles["columns-container"]}>
            <Thumbs images={product.images} title={product.title} />
            <Description
              title={product.title}
              colors={product.colors}
              description={product.description}
            />
            <Checkout product={product} />
          </div>
          <div className={styles["sales-block"]}>
            <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
            <OnSale />
            {/* <div id="product-container" className={styles["product-container"]}>
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
            </div> */}
          </div>
        </div>
      ) : (
        <>El producto no existe</>
      )}
    </main>
  );
}

export default Details;
