// `app/reservations/page.tsx` is the UI for the `/reservations` URL
'use client'
import { ReactNode } from 'react'
import styles from '../styles/reservations.module.css'

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <section className={`${styles.reservations}`}>
      <div
        className={`${styles.reservations__container} | mx-auto bg-primary1 px-8 py-16`}
      >
        <div className={`${styles.reservations__header}`}>
          <h1
            className={`${styles.reservations__title} | text-center font-markazi font-semibold text-primary2`}
          >
            Book Reservation
          </h1>
        </div>
        <div className={`${styles.reservations__content} | justify-center`}>
          {children}
        </div>
      </div>
    </section>
  )
}
