import { useEffect, useState, FormEvent } from 'react'
import Header from '../../components/Header'
import api from '../../services/api'

import styles from './create.module.css'

function CreateProduct (){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState(0)

    function handleSubmit (e: FormEvent){
        e.preventDefault()

        api.post('/products', {
            name,
            description,
            image_url: image,
            price
        }).then(response => console.log(response))
    }

    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <h1 className={styles.title}>Criar novo produto</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input 
                        placeholder="Nome do produto" 
                        className={styles.input} 
                        type="text"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                    <input 
                        placeholder="Url da imagem" 
                        className={styles.input} 
                        type="text"
                        value={image}
                        onChange={(e)=>{setImage(e.target.value)}}
                    />
                    <input 
                        placeholder="Preço" 
                        className={styles.input} 
                        type="number"
                        value={price}
                        onChange={(e)=>{setPrice(Number(e.target.value))}}
                    />
                    <textarea 
                        placeholder="Descriçãp" 
                        className={styles.textarea}
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                    />

                    <button type="submit" className={styles.button}>Criar produto</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct