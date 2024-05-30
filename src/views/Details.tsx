import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import products from "../assets/products.js";
import ProductCart from "../components/ProductCart";

function Details() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const porductsOnSale = products.filter((product) => product.onsale === true);

  return (
    <main>
      {product ? (
        <div className={styles["details-container"]}>
          <div id="details" className={styles["columns-container"]}>
            <section className={styles["product-images-block"]}>
              <div className={styles["product-images"]}>
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    className={styles["mini-img"]}
                    src={image}
                    alt={product.title}
                  />
                ))}
              </div>
              <img
                className={styles["big-img"]}
                id="big-img"
                src={product.images[0]}
                alt={product.title}
              />
            </section>
            <div className={styles["product-description-block"]}>
              <h1 className={styles["product-title"]}>{product.title}</h1>
              <form className={styles["product-selector"]}>
                <fieldset className={styles["product-fieldset"]}>
                  <label className={styles["product-label"]} htmlFor="color">
                    Color
                  </label>
                  <select
                    className={styles["product-select"]}
                    typeof="text"
                    aria-placeholder="Selecciona un color"
                    id="color"
                  >
                    {product.colors.map((color, index) => (
                      <option key={index} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </form>
              <div className={styles["product-description"]}>
                <span className={styles["product-label"]}>Descripción</span>
                <p>{product.description}</p>
              </div>
            </div>
            <div className={styles["product-checkout-block"]}>
              <div className={styles["checkout-container"]}>
                <span className={styles["checkout-total-label"]}>Total:</span>
                <h2 id="price" className={styles["checkout-total-price"]}>
                  $ {product.price}
                </h2>
                <p className={styles["checkout-description"]}>
                  Incluye impuesto PAIS.
                </p>
                <ul className={styles["checkout-policy-list"]}>
                  <li>
                    <span className={styles["policy-icon"]}>
                      <img src="./truck.png" alt="Truck" />
                    </span>
                    <span className={styles["policy-desc"]}>
                      Agrega el producto al carrito para conocer los costos de
                      envío
                    </span>
                  </li>
                  <li>
                    <span className={styles["policy-icon"]}>
                      <img src="./plane.png" alt="Plane" />
                    </span>
                    <span className={styles["policy-desc"]}>
                      Recibí aproximadamente entre 10 y 15 días hábiles,
                      seleccionando envío normal
                    </span>
                  </li>
                </ul>
                <div className={styles["checkout-process"]}>
                  <div className={styles["top"]}>
                    <input type="number" min="1" defaultValue="1" />
                    <button type="button" className={styles["cart-btn"]}>
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>El producto no existe</>
      )}
    </main>
  );
}

export default Details;
