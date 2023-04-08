import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import db from "../../../db/firebase-config";
import styles from "./cartlist.module.css";
import { Link } from "react-router-dom";

const CartList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const ordersCollection = await getDocs(collection(db, "orders"));
      const ordersData = ordersCollection.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setOrders(ordersData);
    };
    getOrders();
  }, []);

  const deleteOrder = async (id) => {
    try {
      // Eliminar la orden de la colección en Firebase
      await deleteDoc(doc(db, "orders", id));

      // Actualizar el estado de las órdenes en el componente
      setOrders((prevState) => prevState.filter((order) => order.id !== id));
    } catch (error) {
      console.error("Error al eliminar la orden: ", error);
    }
  };

  return (
    <div>
      <h2 className={styles.cartListContainer}>Órdenes de compra</h2>
      {orders.length > 0 ? (
        <div className={styles.flexContainer}>
          <ul className={styles.container}>
            {orders.map((order) => (
              <li className={styles.card} key={order.id}>
                <p>ID de la orden: {order.id}</p>
                <p>Producto: {order.title}</p>
                <p>Estado: {order.estado}</p>
                <p>Fecha de creación: {order.date.toDate().toLocaleString()}</p>
                <p>Precio Unitario: ${order.price}</p>
                <p>Total: {order.units}</p>
                <button onClick={() => deleteOrder(order.id)} className={styles.confirmDelete}>
                  Borrar Órden
                </button>
              </li>
            ))}
          </ul>
          <Link to="/confirm">
            <button className={styles.confirmSale}>Confirmar Compra</button>
          </Link>
        </div>
      ) : (
        <p>No hay órdenes de compra por mostrar</p>
      )}
    </div>
  );
};

export default CartList;