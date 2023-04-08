import { Link } from "react-router-dom"
import styles from "./card.module.css"

const Card = ({ product }) => {
  return (
    <Link to={`/item/${product.id}`} className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>${product.price}</p>
      </div>
    </Link>
  )
}

export default Card