/* eslint-disable react/prop-types */
import Link from 'next/link'
import styles from '../styles/reservations.module.css'

export default function BookingForm({ values }) {
  return (
    <>
      <h2
        className={`${styles.form_pagination} | bg-primary2 p-4 text-center font-semibold`}
      >
        Complete:
      </h2>
      <div
        className={`${styles.reservations_form} | m-auto border-2 bg-white px-8 py-8`}
      >
        <div>
          <h2 className='mb-8 p-4 text-center font-semibold'>
            Hooray, {values.firstName}... your reservation is confirmed!
          </h2>
          <div className='mb-8 max-w-[65ch] px-8'>
            <p>
              You should receive a text from us to{' '}
              <strong>{values.phone}</strong> regarding your reservation
              confirmation.
            </p>
          </div>
          <div className='confirmation__content mb-8 max-w-[65ch] px-8'>
            <p>
              Contact us at <strong>(123)-456-7890</strong> if you haven&apos;t
              received a text, experienced problems, would like to make changes
              or cancel your reservation.
            </p>
          </div>
          <div className='confirmation__footer mb-8 max-w-[65ch] px-8'>
            <p className='py-8'>Thank you,</p>
            <p className='signature text-3xl'>Little Lemon</p>
          </div>
        </div>
        {/* <div className={`${styles.reservations__2btn_footer} px-8`}> */}
        <div className={`${styles.form_footer} | flex justify-center gap-8`}>
          <Link
            role='button'
            href='/'
            className={`${styles.form__button} | max-h-[48px] min-h-[48px] min-w-[220px] max-w-[220px] rounded-md bg-primary2 px-3.5 py-1.5 text-center shadow-sm hover:bg-highlight2 hover:text-primary2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            type='submit'
          >
            Done
          </Link>
        </div>
      </div>
    </>
  )
}
