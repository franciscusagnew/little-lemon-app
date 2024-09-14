'use client'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import JohnSmith from '../../../public/images/john smith.jpg'
import EmilyJones from '../../../public/images/emily jones.jpg'
import KeithBrooks from '../../../public/images/keith brooks.jpg'
import KenLee from '../../../public/images/ken lee.jpg'
import IconRightDoubleQuote from './IconRightDoubleQuote'
import Image from 'next/image'
import styles from '../styles/testimonials.module.css'

export default function Testimonials() {
  const cardItems = [
    {
      imgSrc: JohnSmith,
      name: 'John Smith',
      review: 'The greek salad is delicious!!!',
      rating: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️',
      altText: 'John Smith profile',
    },
    {
      imgSrc: EmilyJones,
      name: 'Emily Jones',
      review: 'My husband and I absolutely love the Bruschetta!',
      rating: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️',
      altText: 'Emily Jones profile',
    },
    {
      imgSrc: KeithBrooks,
      name: 'Keith Brooks',
      review:
        'Their Lemon dessert is superb! Taste just like the kind my grandma used to make. 🥰👍',
      rating: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️',
      altText: 'Keith Brooks profile',
    },
    {
      imgSrc: KenLee,
      name: 'Ken Lee',
      review:
        "The staff is makes you feel right at home & just like you're family! ❤️",
      rating: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️',
      altText: 'Ken Lee profile',
    },
  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
    <section
      className={`${styles.testimonials} | my-16 bg-highlight1 px-8 py-16 md:px-20`}
    >
      <div className={`${styles.testimonials__header}`}>
        <h2
          className={`${styles.testimonials__title} | font-markazi font-semibold text-highlight2`}
        >
          Testimonials
        </h2>
      </div>
      <div className={`${styles.reviews} | py-0 md:py-8`}>
        <Carousel
          showDots={true}
          responsive={responsive}
          infinite
          arrows={true}
          centerMode={false}
          containerClass={`${styles.container_padding_bottom}`}
          itemClass='carousel-item-padding-40-px'
          dotListClass='custom-dot-list-style'
          removeArrowOnDeviceType={['mobile']}
          className='myCarousel'
          swipeable
        >
          {cardItems.map((item, index) => (
            <div className={`${styles.review}`} key={index}>
              <div className={`${styles.review__content} | py-4`}>
                <div className={`${styles.review__header}`}>
                  <h3 className={`${styles.review__name} | pl-4`}>
                    {item.name}
                  </h3>
                </div>
                <div className={`${styles.review__body} | p-4`}>
                  <Image
                    className={`${styles.review__image} | mr-8`}
                    src={item.imgSrc}
                    alt={item.altText}
                  />
                  <p className={`${styles.review__notes} font-light`}>
                    {item.review}
                  </p>
                  <IconRightDoubleQuote
                    className={`${styles.review__right_quote}`}
                  />
                </div>
                <div className={`${styles.review__footer} | pl-4}`}>
                  <p className={`${styles.review__rating}`}>
                    Rating: {item.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
