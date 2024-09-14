'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/navbar.module.css'

export default function NavBar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      name: 'Home',
      href: '/',
      ariaLabel: 'Go to the Home page',
    },
    {
      name: 'About',
      href: '/about',
      ariaLabel: 'Learn more about Little Lemon',
    },
    {
      name: 'Menu',
      href: '/menu',
      ariaLabel: 'View our menu',
    },
    {
      name: 'Reservations',
      href: '/reservations',
      ariaLabel: 'Book a table',
    },
    {
      name: 'Order Online',
      href: '/order',
      ariaLabel: 'Order online',
    },
    {
      name: 'Login',
      href: '/login',
      ariaLabel: 'Login to your account',
    },
  ]
  return (
    <header className='px-8 md:pr-8' data-pg-collapsed>
      <nav className='flex flex-wrap items-center justify-evenly py-3 md:justify-normal'>
        <Link href='/' className='mr-3' tabIndex={0}>
          <Image
            alt='Little Lemon Logo'
            className={`${styles.nav_logo} | w-44 md:w-52`}
            width={100}
            height={100}
            src={'../../../public/Asset_16@4x.png'}
          />
        </Link>
        <div className='md:ml-auto md:px-2 lg:order-2'>
          <div className='ml-auto flex flex-row'>
            <Link href='#' className='px-2 py-4' aria-label='View cart'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                width='1.25em'
                height='1.25em'
                className='inline-block'
              >
                <g>
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z'></path>
                </g>
              </svg>
              <span>(0)</span>
            </Link>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='hover:bg-primary1-500 hover:text-primary2-500 text-primary1-500 rounded py-2 pl-3 md:px-3 lg:hidden'
        >
          <svg
            className={`h-4 w-4 fill-current ${isOpen ? 'hidden' : 'block'}`}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
          <svg
            className={`h-4 w-4 fill-current ${isOpen ? 'block' : 'hidden'}`}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
          </svg>
        </button>
        <div
          data-name='nav-menu'
          className={`w-full flex-grow space-y-2 lg:flex lg:w-auto lg:items-center lg:space-x-4 lg:space-y-0 ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className='ml-auto flex flex-col lg:flex-row'>
            {navItems.map((item, index) => (
              <Link
                key={index}
                className={`link ${pathname === item.href ? 'active' : ''} px-0 py-2 text-base text-gray-800 hover:rounded-lg hover:bg-primary2 lg:px-4`}
                href={{ pathname: item.href }}
                tabIndex={index + 1}
                onClick={() => setIsOpen(!isOpen)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
