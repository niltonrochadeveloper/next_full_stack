import Link from 'next/link'
import React from 'react'

interface linksNavBarProps {
    id: number, 
    title: string, 
    url: string
}

const links: linksNavBarProps[] = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
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
        <div>
            <Link href={'/'}>Nilton Rocha</Link>
            <div>
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar