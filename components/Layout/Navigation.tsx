"use client"

import React, { useState } from 'react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import Logo from '../Logo'
import HamburgerNav from '../Hamburger'

const Navigation = () => {

    const [menuItems, setMenuItesm] = useState([
        { value: 'Home', slug: '/' },
        { value: 'About', slug: '/events' },
        { value: 'Blog', slug: '/blog' },
        { value: 'FAQ', slug: '/faq' },
        { value: 'Help', slug: '/help' },
        { value: 'Terms', slug: '/terms' },
        { value: 'Contact', slug: '/contact' },
    ])

    const pathname = usePathname()

    return (
        <nav className='z-[1013] bg-white shadow-deep absolute bottom-[90%] lg:bottom-0 w-full h-[10vh] border-t border-white-shade-4 soft-shadow'>
            <div className='container flex justify-between items-center h-full'>
                <ul className='navigation hidden h-full lg:flex items-center gap-x-10 text-white-shade-10 font-opensans font-medium'>
                    {
                        menuItems.map((link) => {
                            const isActive = pathname.startsWith(link.slug)
                            return (
                                <li className={isActive ? 'active' : 'normal'}>
                                    <Link href={link.slug}>
                                        {link.value}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Link href={"/"}>
                    <Logo />
                </Link>
                <HamburgerNav />
            </div>
        </nav>
    )

}

export default Navigation