import React from 'react'

import { FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import styles from './styles.module.css'

interface ProductCardProps {
    id: number
    name: string
    image: string
    description: string
    price: number,
    deleteItem: (id: number) => void
}

const ProductCard: React.FC<ProductCardProps> = ({name, image, description, price, id, deleteItem}) => {

    return(
        <div className={styles.card}>
            <img className={styles.image} src={image} alt="Tênis"/>
            <strong className={styles.productName}>{name}</strong>
            <span className={styles.productDescription}>{description}</span>
            <strong className={styles.productPrice}>{price}</strong>
            <FiTrash2 onClick={()=>deleteItem(id)} className={styles.trashcan}/>
        </div>
    )
}

export default ProductCard