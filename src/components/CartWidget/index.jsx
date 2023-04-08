import { FaShoppingCart } from "react-icons/fa"
import styles from "./cartwidget.module.css"

const CartWidget = ({ totalItems }) => {
  return (
    <div className={styles.cartContainer}>
      <FaShoppingCart />
      <p>{totalItems}</p>
    </div>
  )
}

export default CartWidget