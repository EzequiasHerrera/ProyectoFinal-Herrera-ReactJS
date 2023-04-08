import Card from "../Card"
import styles from "./itemlistcontainer.module.css"
import { useLocation, useParams } from 'react-router-dom';

const ItemListContainer = ({ products }) => {
  const location = useLocation();
  const { categoryId } = useParams();
  let filteredProducts = products;

  if (categoryId) {
    filteredProducts = products.filter((product) => product.category === categoryId);
  }

  //DEVUELVO LOS CARDS DE LOS PRODUCTOS FILTRADOS O NO
  return (
    //RETORNA UN MAP DE TODOS LOS PRODUCTOS EN CARDS
    <div className={styles.itemContainer}>
      {filteredProducts.map((product) => (
        //LE PASO UN KEY ID Y EL PRODUCTO PARA QUE GENERE LA CARD
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemListContainer