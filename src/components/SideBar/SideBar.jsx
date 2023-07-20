"use client";
import Link from "next/link";
import styles from './sidebar.module.css'

function SideBar() {
    return (
        <div className={styles.container}>
            <Link href="/">Home</Link>
            <Link href="/page01">Page01</Link>
            <Link href="/page02">Page02</Link>
        </div>
    )
}

export default SideBar