/* eslint-disable react/prop-types */
import { Button } from '@nextui-org/react'
import styles from '../styles/reservations.module.css'

export default function BookingForm({ nextStep, prevStep, values }) {
  //   const formatPhone = (value) => {
  //     value
  //   }
  return (
    <>
      <h2
        className={`${styles.form_pagination} | bg-primary2 p-4 text-center font-semibold`}
      >
        Step 2 of 2:
      </h2>
      <div
        className={`${styles.reservations_form} | m-auto border-2 bg-white px-8 py-8`}
      >
        <div className='mb-8 max-w-[65ch] px-8'>
          <p>
            Thank you, <strong>{values.firstName}</strong>!
          </p>
          <br />
          <p>
            Please review your reservation details below. Click{' '}
            <span className='rounded-md bg-primary2 p-1'>Confirm</span> to
            complete your reservation or{' '}
            <span className='rounded-md bg-primary2 p-1'>Previous</span> to edit
            or make changes to it.
          </p>
          <br />
          <p>
            <strong>Name: </strong>
            {values.firstName} {values.lastName}
          </p>
          <p>
            <strong>Date: </strong>
            {values.date}{' '}
          </p>
          <p>
            <strong>Time: </strong>
            {values.time}{' '}
          </p>
          <p>
            <strong>Occcasion: </strong>
            {values.occasion}{' '}
          </p>
          <p>
            <strong>Number of guest: </strong>
            {values.guestNum}{' '}
          </p>
          <p>
            <strong>Notes: </strong>
            {values.notes}{' '}
          </p>
          <p>
            <strong>Phone: </strong>
            {values.phone}{' '}
          </p>
        </div>
        <div className={`${styles.form_footer} | flex justify-center gap-8`}>
          <Button
            className={`${styles.form__button} | max-h-[48px] min-h-[48px] min-w-[220px] max-w-[220px] rounded-md bg-primary2 px-3.5 py-1.5 shadow-sm hover:bg-highlight2 hover:text-primary2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            type='sumbit'
            onClick={prevStep}
          >
            Previous
          </Button>
          <Button
            className={`${styles.form__button} | max-h-[48px] min-h-[48px] min-w-[220px] max-w-[220px] rounded-md bg-primary2 px-3.5 py-1.5 shadow-sm hover:bg-highlight2 hover:text-primary2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            type='submit'
            onClick={nextStep}
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  )
}
