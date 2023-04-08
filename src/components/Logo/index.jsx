import styles from "./logo.module.css"

const Logo = () => {
  return (
    <div href="" className={styles.logoTexto}>
      <img className={styles.logo} src="src/assets/chimarrao.png" alt="chima_logo" />
      <p>CHIMA</p>
    </div>
  )
}

export default Logo