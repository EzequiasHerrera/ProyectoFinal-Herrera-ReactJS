import styles from "./additembutton.module.css"
import { FaShoppingCart } from "react-icons/fa"
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import { useState } from "react";
import db from "../../../db/firebase-config";

const AddItemButton = ({ product }) => {

  const [orders, setOrders] = useState([]);
  const ordersRef = collection(db, "orders");

  const getOrders = async () => {
    const ordersCollection = await getDocs(ordersRef);
    const orders = ordersCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setOrders(orders);
  }

  const addItem = async (e) => {
    const currentTimestamp = Timestamp.now();
    e.preventDefault();

    const order = {
      date: currentTimestamp,
      estado: "generada",
      price: product.price,
      title: product.title,
      units: 1
    }
    await addDoc(ordersRef, order);
    getOrders();
  }

  return (
    <button onClick={addItem} className={styles.addbutton}><FaShoppingCart /> Agregar al Carrito</button>
  )
}

export default AddItemButton