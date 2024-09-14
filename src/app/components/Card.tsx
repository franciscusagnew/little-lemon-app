'use client'

import GreekSalad from '../../../public/images/greek salad.jpg'
import Bruchetta from '../../../public/images/bruchetta.jpg'
import LemonDessert from '../../../public/images/lemon dessert.jpg'
import Image from 'next/image'
import styles from '../styles/card.module.css'
import Link from 'next/link'

export default function Card() {
  const cardItems = [
    {
      imgSrc: GreekSalad,
      title: 'Greek Salad',
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: '$12.99',
      href: '/menu/#greeksalad',
      ariaLabel: 'Greek Salad',
    },
    {
      imgSrc: Bruchetta,
      title: 'Bruchetta',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      price: '$5.99',
      href: '/menmu/#bruchetta',
      ariaLabel: 'Bruchetta',
    },
    {
      imgSrc: LemonDessert,
      title: 'Lemon Dessert',
      description:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: '$4.99',
      href: '/menu/#lemondessert',
      ariaLabel: 'Lemon Dessert',
    },
  ]

  return (
    <div className={`${styles.cards}`}>
      {cardItems.map((item, index) => (
        <div className={`${styles.card}`} key={index}>
          <div className={`${styles.card__image_container}`}>
            <Image
              className={`${styles.card__image}`}
              src={item.imgSrc}
              alt={item.ariaLabel}
            />
          </div>
          <div className={`${styles.card_content}| bg-highlight1 p-8`}>
            <div className={`${styles.card__header} | py-4`}>
              <h3 className={`${styles.card__title}`}> {item.title}</h3>
              <p
                className={`${styles.card__price} | font-semibold text-primary2`}
              >
                {item.price}
              </p>
            </div>
            <div className='py-4'>
              <p className={`${styles.card__description} | h-48`}>
                {item.description}
              </p>
            </div>
            <div className={`${styles.card__footer} | py-4`}>
              <Link
                href={{ pathname: item.href }}
                className={`${styles.card__link} | font-semibold`}
              >
                Order Online
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
