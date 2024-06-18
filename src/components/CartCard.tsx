import styles from "./CartCard.module.css";

export default function CartCard({
  id,
  image,
  title,
  color,
  description,
  price,
  quantity,
}: {
  id: string;
  image: string;
  title: string;
  color: string;
  description: string;
  price: number;
  quantity: number;
}) {
  return (
    <article
      className="bg-gray rounded-[5px] p-[30px] m-[10px] h-[220px] flex justify-between w-full items-center
    sm:w-full
    md:w-[680px]"
    >
      <img className={styles["product-img"]} src={image} alt="ipad" />
      <div className={styles["product-details"]}>
        <strong className={styles["product-title"]}>{title}</strong>
        <span className={styles["product-description"]}>- {color}</span>
        <p className={styles["product-description"]}>{description}</p>
        <input
          className={styles["product-input"]}
          type="number"
          name="quantity"
          defaultValue={quantity}
          min="1"
          id={id}
        />
      </div>
      <strong className={styles["price"]}>$ {price}</strong>
    </article>
  );
}
