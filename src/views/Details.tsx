import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import products from "../assets/products.js";

function Details() {
  const { productId } = useParams();

  // Find the product with the matching id NOTE: find, findIndex and filter doesn't found the product
  let index = 0;
  for (let i = 0; i < products.length; i++) {
    if (
      products[i].id === productId ||
      products[i].id === productId?.slice(1)
    ) {
      index = i;
    }
  }
  const product = products[index];

  return (
    <main>
      {product ? (
        <>
          <div className={styles["details-container"]}>
            <div id="details" className={styles["columns-container"]}>
              <section className={styles["product-images-block"]}>
                <div className={styles["product-images"]}>
                  {product.images.map((image) => (
                    <img
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
                      {product.colors.map((color) => (
                        <option value={color}>{color}</option>
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
                        <img src="/truck.png" alt="Truck" />
                      </span>
                      <span className={styles["policy-desc"]}>
                        Agrega el producto al carrito para conocer los costos de
                        envío
                      </span>
                    </li>
                    <li>
                      <span className={styles["policy-icon"]}>
                        <img src="/plane.png" alt="Plane" />
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
              <div
                id="product-container"
                className={styles["product-container"]}
              >
                <a className={styles["product-card"]} href="./details.html">
                  <img
                    className={styles["product-img"]}
                    src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                    alt="Kindle Paperwhite"
                  />
                  <div className={styles["product-info"]}>
                    <span className={styles["product-title"]}>
                      Kindle Paperwhite
                    </span>
                    <span className={styles["product-description"]}>Black</span>
                    <div className={styles["product-price-block"]}>
                      <span className={styles["product-price"]}>100000</span>
                      <span className={styles["product-discount"]}>
                        50% Off
                      </span>
                    </div>
                    <div className={styles["product-tax-policy"]}>
                      Incluye impuesto País y percepción AFIP
                    </div>
                  </div>
                </a>
                <a className={styles["product-card"]} href="./details.html">
                  <img
                    className={styles["product-img"]}
                    src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                    alt="Kindle Paperwhite"
                  />
                  <div className={styles["product-info"]}>
                    <span className={styles["product-title"]}>
                      Kindle Paperwhite
                    </span>
                    <span className={styles["product-description"]}>Black</span>
                    <div className={styles["product-price-block"]}>
                      <span className={styles["product-price"]}>100000</span>
                      <span className={styles["product-discount"]}>
                        50% Off
                      </span>
                    </div>
                    <div className={styles["product-tax-policy"]}>
                      Incluye impuesto País y percepción AFIP
                    </div>
                  </div>
                </a>
                <a className={styles["product-card"]} href="./details.html">
                  <img
                    className={styles["product-img"]}
                    src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                    alt="Kindle Paperwhite"
                  />
                  <div className={styles["product-info"]}>
                    <span className={styles["product-title"]}>
                      Kindle Paperwhite
                    </span>
                    <span className={styles["product-description"]}>Black</span>
                    <div className={styles["product-price-block"]}>
                      <span className={styles["product-price"]}>100000</span>
                      <span className={styles["product-discount"]}>
                        50% Off
                      </span>
                    </div>
                    <div className={styles["product-tax-policy"]}>
                      Incluye impuesto País y percepción AFIP
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>El producto no existe</>
      )}
    </main>
  );
}

export default Details;
