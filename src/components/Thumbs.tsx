import styles from "./Thumbs.module.css";

export default function Thumbs({ images, title }) {
  return (
    <section className={styles["product-images-block"]}>
      <div className={styles["product-images"]}>
        {images.map((image, index) => (
          <img
            key={index}
            className={styles["mini-img"]}
            src={image}
            alt={title}
          />
        ))}
      </div>
      <img
        className={styles["big-img"]}
        id="big-img"
        src={images[0]}
        alt={title}
      />
    </section>
  );
}
