import Card from "../Card"
import styles from "./itemlistcontainer.module.css"

const HomeItemListContainer = ({ products, cantMostrada }) => {

  console.log(cantMostrada);

  return (
    //RETORNA UN MAP DE LOS PRIMEROS N PRODUCTOS EN CARDS
    <div className={styles.homeContainer}>
      <h1>¡BIENVENIDO A CHIMA!</h1>
      <h3>Aquí hay productos que quizás le podrían interesar:</h3>
      <div className={styles.itemContainer}>
        {products.slice(0, cantMostrada).map((product) => (
          //LE PASO UN KEY ID Y EL PRODUCTO PARA QUE GENERE LA CARD
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default HomeItemListContainer