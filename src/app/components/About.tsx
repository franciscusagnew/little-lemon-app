import Image from 'next/image'
import Photo1 from '../../../public/images/Mario and Adrian A.jpg'
import Photo2 from '../../../public/images/Mario and Adrian B.jpg'
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <section className='px-8 md:px-20'>
      <div className='space-y-12'>
        <div className={`${styles.about__container}`}>
          <div className={`${styles.about__left}`}>
            <h2
              className={`${styles.about__title} | font-markazi font-semibold`}
            >
              Little Lemon
            </h2>
            <h3 className={`${styles.about__subtitle} | mb-8`}>
              Owners Mario & Adrian
            </h3>
            <p className='mb-6'>
              Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit
              amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit
              amet. Curabitur ac sagittis neque, vel egestas est.
            </p>
          </div>
          <div className={`${styles.about__right}`}>
            <Image
              id={`${styles.photo_1}`}
              src={Photo1}
              className='rounded-lg'
              alt='Mario and Adrian preparing a dish'
            />
            <Image
              id={`${styles.photo_2}`}
              src={Photo2}
              className='rounded-lg'
              alt='Maria and Adrian in the kitchen'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
