/* eslint-disable react/jsx-key */
'use client'

import Link from 'next/link'
import Logo from '../../../public/images/Asset 9@4x.png'
import Image from 'next/image'
import styles from '../styles/footernav.module.css'

const FooterNav = () => {
  const navLinks = [
    {
      text: 'Home',
      href: '/',
      ariaLabel: 'Go to the Home page',
    },
    {
      text: 'About',
      href: '/about',
      ariaLabel: 'Learn more about Little Lemon',
    },
    {
      text: 'Menu',
      href: '/menu',
      ariaLabel: 'View our menu',
    },
    {
      text: 'Reservation',
      href: '/reservations',
      ariaLabel: 'Book a table',
    },
    {
      text: 'Order Online',
      href: '/order',
      ariaLabel: 'Order online',
    },
    {
      text: 'Login',
      href: '/login',
      ariaLabel: 'Login to your account',
    },
  ]
  const contactLinks = [
    {
      text: 'Address',
      href: '/',
      ariaLabel: 'Address',
    },
    {
      text: 'Phone',
      href: '/',
      ariaLabel: 'Phone',
    },
    {
      text: 'Email',
      href: '/',
      ariaLabel: 'Email',
    },
  ]
  const socialLinks = [
    {
      text: 'Facebook',
      href: 'https://www.facebook.com',
      ariaLabel: 'Follow Us on Facebook',
    },
    {
      text: 'Twitter',
      href: 'https://www.x.com',
      ariaLabel: 'Follow Us on Twitter',
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com',
      ariaLabel: 'Follow Us on Instagram',
    },
  ]
  return (
    <footer className='footer mt-16 bg-primary1 px-8 py-16 text-highlight1 md:px-20'>
      <nav className={`${styles.footer__container}`}>
        <div className={`${styles.footer__image}`}>
          <Image src={Logo} alt='Little Lemon Logo' priority={true} />
        </div>
        <div className={`${styles.footer__navigation}`}>
          <p className={`${styles.footer__header} font-semibold text-primary2`}>
            Navigation
          </p>
          <ul
            className={`${styles.footer__nav__items}`}
            role='listbox'
            aria-label='Footer Navigation'
          >
            {navLinks.map((item) => (
              <li
                className={`${styles.footer__nav__links}`}
                role='option'
                // aria-label={item}
                aria-selected
              >
                <Link
                  role='button'
                  href={{ pathname: item.href }}
                  aria-label={item.ariaLabel}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.footer__contact}`}>
          <p className={`${styles.footer__header} font-semibold text-primary2`}>
            Contact
          </p>
          <ul
            className={`${styles.footer__nav__items}`}
            role='listbox'
            aria-label='Footer Navigation'
          >
            {contactLinks.map((item) => (
              <li
                className={`${styles.footer__nav__links}`}
                role='option'
                aria-selected
              >
                <Link
                  role='button'
                  href={{ pathname: item.href }}
                  aria-label={item.ariaLabel}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer__social'>
          <p className={`${styles.footer__header} font-semibold text-primary2`}>
            Social Media
          </p>
          <ul
            className={`${styles.footer__nav__items}`}
            role='listbox'
            aria-label='Footer Navigation'
          >
            {socialLinks.map((item) => (
              <li
                className={`${styles.footer__nav__links}`}
                role='option'
                aria-selected
              >
                <Link
                  role='button'
                  href={{ pathname: item.href }}
                  aria-label={item.ariaLabel}
                  target='_blank'
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </footer>
  )
}

export default FooterNav
