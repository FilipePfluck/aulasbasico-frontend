import styles from './styles.module.css'

import Link from 'next/link'

function CreateProductButton (){
    return(
        <Link href="/product/create">
            <button className={styles.button}>
                Novo produto
            </button>
        </Link>
    )
}

export default CreateProductButton