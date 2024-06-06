import { Link } from "react-router-dom";
import styles from "./ProductCart.module.css";

export default function ProductCart({
  id,
  image,
  title,
  color,
  price,
  onSale,
  discount,
}) {
  return (
    <Link to={`/details/${id}`} className={styles["product-card"]}>
      <img className={styles["product-img"]} src={image} alt={title} />
      <div className={styles["product-info"]}>
        <span className={styles["product-title"]}>{title}</span>
        <span className={styles["product-description"]}>{color}</span>
        {onSale ? (
          <span className={styles["product-original-price"]}>
            {`Antes: `}
            <span className={styles["label-original-price"]}> $ {price}</span>
          </span>
        ) : (
          <></>
        )}
        <div className={styles["product-price-block"]}>
          <span className={styles["product-price"]}>
            $ {onSale ? (price * discount) / 100 : price}
          </span>
          <span className={styles["product-discount"]}>
            {onSale ? `${discount}% OFF` : ""}
          </span>
        </div>
        <div className={styles["product-tax-policy"]}>
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </Link>
  );
}
