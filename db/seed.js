import { collection, addDoc } from "firebase/firestore";
import db from "./firebase-config";
import products from "../products.json"

const itemsCollectionRef = collection(db, "items");

const promises = products.map(product => addDoc(itemsCollectionRef, product))

Promise.all(promises).then(() => {
  console.log("Done");
  process.exit(0);
});