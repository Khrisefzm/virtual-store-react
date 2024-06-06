import { useState } from "react";
import styles from "./Thumbs.module.css";

export default function Thumbs({ images, title }) {
  const [thumb, setThumb] = useState(images[0] || "/mock1.jpg");

  return (
    <section className={styles["product-images-block"]}>
      <div className={styles["product-images"]}>
        {images.map((image, index) => (
          <img
            key={index}
            className={styles["mini-img"]}
            src={image}
            alt={title}
            onClick={() => setThumb(image)}
          />
        ))}
      </div>
      <img className={styles["big-img"]} id="big-img" src={thumb} alt={title} />
    </section>
  );
}
