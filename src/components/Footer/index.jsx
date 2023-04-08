import styles from "./footer.module.css"
import { BsInstagram } from "react-icons/bs"
import { BiLockAlt } from "react-icons/bi"
import LineVertical from "../LineVertical"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.containerInfo}>
        <p>NUESTRAS REDES SOCIALES</p>
        <div className={styles.containerTextIcon}>
          <BsInstagram className={styles.element} />
          <p className={styles.element}>INSTAGRAM</p>
        </div>
      </div>
      <LineVertical />
      <div className={styles.containerInfo}>
        <p>ADMINISTRADOR</p>
        <div className={styles.containerTextIcon}>
          <BiLockAlt className={styles.element} />
          <p className={styles.element}>ADMINISTRADOR</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer