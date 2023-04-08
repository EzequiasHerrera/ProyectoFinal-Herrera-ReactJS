import AddItemButton from "../AddItemButton"
import styles from "./item.module.css"

const Item = ({ product }) => {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImg} src={product.image} alt={product.title} />
      <div className={styles.btnDetails}>
        <div className={styles.itemDetails}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <h2 className={styles.price}>${product.price}</h2>
        </div>
        <div>
          <AddItemButton product={product} />
        </div>
      </div>
    </div>
  )
}

export default Item