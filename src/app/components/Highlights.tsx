import Link from 'next/link'
import Card from '../components/Card'
import styles from '../styles/highlights.module.css'

export default function Highlights() {
  return (
    <section className={`${styles.highlight} | my-16 py-8`}>
      <div className={`${styles.highlight__container} | mx-auto px-8 md:px-20`}>
        <div className={`${styles.highlight__header}`}>
          <h2
            className={`${styles.highlight__title} | font-markazi font-semibold text-highlight2`}
          >
            This weeks specials!
          </h2>
          <button
            className={`${styles.highlight__button} | max-h-[48px] min-h-[48px] min-w-[250px] rounded-md bg-primary2 shadow-sm hover:bg-primary1 hover:text-primary2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary2`}
            type='submit'
          >
            <Link role='button' href='/order'>
              Order online
            </Link>
          </button>
        </div>
        <article className={`${styles.highlight__content}`}>
          <Card />
        </article>
      </div>
    </section>
  )
}
