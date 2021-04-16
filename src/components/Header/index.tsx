import Link from 'next/link'

import styles from './styles.module.css'

import CreateProductButton from '../CreateProductButton'

function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.content}>
                <Link href="/">
                    <h1 className={styles.logo}>LOGO</h1>
                </Link>
                <CreateProductButton/>
            </div>
        </header>
    )
}

export default Header