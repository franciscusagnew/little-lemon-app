'use client'
import RestaurantFood from '../../../public/images/restaurantfood.jpg'
import Image from 'next/image'
import styles from '../styles/hero.module.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className={`${styles.hero} | bg-primary1 px-8 md:px-20`}>
      <div className={`${styles.hero__container} py-16`}>
        <div className={`${styles.hero__left}`}>
          <h1 className={`${styles.hero__title} | font-markazi text-primary2`}>
            Little Lemon
          </h1>
          <p className={`${styles.hero__subtitle} | text-highlight1`}>
            Chicago
          </p>
          <p className={`${styles.hero__body} | my-3 pb-4 text-highlight1`}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div className={`${styles.cta_section}`}>
            <button
              className={`${styles.hero__button} |max-h-[48px] min-h-[48px] min-w-[250px] rounded-md bg-primary2 shadow-sm hover:bg-primary1 hover:text-primary2 hover:outline-double hover:outline-4 hover:outline-primary2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary2`}
              type='submit'
            >
              <Link role='button' href='/reservations'>
                Reserve a table
              </Link>
            </button>
          </div>
        </div>
        <div className={`${styles.hero__right}`}>
          <Image
            className={`${styles.hero__image}`}
            src={RestaurantFood}
            alt='Restaurant Food'
          />
        </div>
      </div>
    </section>
  )
}
