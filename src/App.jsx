import './App.css'
import db from '../db/firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { useEffect, useState } from 'react'
import HomeItemListContainer from './components/HomeItemListContainer'
import CartList from './components/CartList'
import PayContainer from './components/PayContainer'

function App() {
  //AQUI GUARDO EL ARRAY DE PRODUCTOS
  const [products, setProducts] = useState([])
  const itemsRef = collection(db, "items")
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProducts(items);
    setLoading(false);
  };

  // ACA EFECTÚO EL LLAMADO
  useEffect(() => {
    getProducts()
  }, [])

  if (loading) {
    return <h1>Cargando...</h1>;
  }


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<HomeItemListContainer products={products} cantMostrada={4} />} />
        <Route path="/products" element={<ItemListContainer products={products} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer products={products} />} />
        <Route path="/item/:id" element={<ItemDetailContainer products={products} />} />
        <Route path="/confirm" element={<PayContainer />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
