import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../db/firebase-config";
import CartWidget from "../CartWidget";
import Logo from "../Logo";
import styles from "./navbar.module.css";

const NavBar = () => {
  let activeStyle = {
    textDecoration: "none",
  };

  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const getOrders = async () => {
      const ordersCollection = await getDocs(collection(db, "orders"));
      let total = 0;
      ordersCollection.forEach((doc) => {
        const data = doc.data();
        total += data.units;
      });
      setTotalItems(total);
    };
    getOrders();
  }, []);

  return (
    <nav className={styles.navbar}>
      <NavLink to="/home" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <Logo />
      </NavLink>
      <NavLink to="/products" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p>Productos</p>
      </NavLink>
      <NavLink to="/category/yerba">
        <p>Yerbas</p>
      </NavLink>
      <NavLink to="/cart" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <CartWidget totalItems={totalItems} />
      </NavLink>
    </nav>
  );
};

export default NavBar;