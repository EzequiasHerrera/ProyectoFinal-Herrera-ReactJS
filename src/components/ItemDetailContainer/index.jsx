import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import db from "../../../db/firebase-config";
import Item from "../Item";
import styles from "./itemdetailcontainer.module.css"

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const getItem = async () => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)
    if (docSnap.data()) {
      setItem(docSnap.data())
    } else {
      console.log("No existe el documento.")
    }
  }

  useEffect(() => {
    getItem();
  }, [id]);

  return (
    <div className={styles.container}>
      <Item product={item} />
    </div>
  )
}

export default ItemDetailContainer