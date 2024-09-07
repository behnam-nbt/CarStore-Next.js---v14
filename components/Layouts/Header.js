import React from 'react'
import styles from './Layout.module.css'
import Link from "next/link";

function Header() {
    return (
        <div className={styles.header}>
            <Link href="/">
                <h1 style={{borderBottom:"1px solid #000"}}>Car Store</h1>
                <p>Choose & Buy Your Car</p>
            </Link>
        </div>
    )
}

export default Header
