'use client'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

interface linksNavBarProps {
    id: number, 
    title: string, 
    url: string
}

const links: linksNavBarProps[] = [
    {
      id: 1,
      title: "Ínicio",
      url: "/",
    },
    {
      id: 2,
      title: "Portfólio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "Sobre",
      url: "/about",
    },
    {
      id: 5,
      title: "Contato",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
];



const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href={'/'} className={styles.logo}>Nilton Rocha</Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                <button 
                 className={styles.logout}
                 onClick={() => {console.log(`logged out`)}}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar