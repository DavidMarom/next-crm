"use client";
import Link from "next/link";
import styles from './sidebar.module.css'

function SideBar() {
    return (
        <div className={styles.container}>
            <Link href="/"><div className={styles.sidebarbtn}>Home</div></Link>
            <Link href="/page01"><div className={styles.sidebarbtn}>Page01</div></Link>
            <Link href="/page02"><div className={styles.sidebarbtn}>Page02</div></Link>
        </div>
    )
}

export default SideBar