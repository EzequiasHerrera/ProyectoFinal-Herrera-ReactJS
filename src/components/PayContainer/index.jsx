import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import db from "../../../db/firebase-config";
import styles from "./paycontainer.module.css";

const PayContainer = () => {
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

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

  useEffect(() => {
    let price = 0;
    orders.forEach((order) => {
      price += order.price * order.units;
    });
    setTotalPrice(price);
  }, [orders]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
  };

  const handleConfirmClick = async () => {
    if (
      name !== "" &&
      lastName !== "" &&
      phone !== "" &&
      email !== "" &&
      confirmEmail !== "" &&
      email === confirmEmail
    ) {
      await Promise.all(
        orders.map(async (order) => {
          await deleteDoc(collection(db, "orders").doc(order.id));
        })
      );
      alert("La compra ha sido confirmada y las órdenes han sido eliminadas.");
    } else {
      alert("Por favor, complete todos los campos y confirme su correo electrónico.");
    }
  };

  return (
    <div>
      <div className={styles.flexContainer}>
        <h2 className={styles.payContainer}>Confirmar Compra</h2>
        <div className={styles.orderSummary}>
          <h3>Resumen de la compra</h3>
          <p>Total a pagar: ${totalPrice}</p>
          <ul className={styles.orderList}>
            {orders.map((order) => (
              <li key={order.id}>
                {order.title} ({order.units} unidades) - ${order.price * order.units}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.checkoutForm}>
          <h3>Detalles del comprador</h3>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Apellido:</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmEmail">Confirmar correo electrónico:</label>
            <input type="email" id="confirmEmail" name="confirmEmail" value={confirmEmail} onChange={handleConfirmEmailChange} />
          </div>
          <button className={styles.buttonConfirmSale} onClick={handleConfirmClick}>Confirmar Compra</button>
        </div>
      </div>
    </div>
  );
};

export default PayContainer;