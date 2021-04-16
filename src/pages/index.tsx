import { useState, useEffect } from 'react'

import api from '../services/api'

import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

import styles from './home.module.css'

interface Product { 
  id: number,
  name: string
  description: string
  image_url: string
  price: number
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  function handleDeleteItem (id: number){
    api.delete(`/products/${id}`)

    const newProducts = products.filter(product => {
      return product.id !== id
    })

    setProducts(newProducts)
  }


  useEffect(()=>{
    api.get('/products').then((response) => {
      console.log(response.data)
      setProducts(response.data)
    })
  },[])

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.content}>
        <h1 className={styles.title}>Lista de produtos</h1>
        <div className={styles.grid}>
          {products.map((product)=>{
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image_url}
                price={product.price}
                deleteItem={handleDeleteItem}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
