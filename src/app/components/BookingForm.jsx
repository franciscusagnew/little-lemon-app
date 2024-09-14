/* eslint-disable react/prop-types */
// import { useFormState, useFormStatus } from 'react-dom'
import { Button } from '@nextui-org/react'
import styles from '../styles/reservations.module.css'

// import { fetchData } from '../../../../actions/dataController'

export default function BookingForm({
  nextStep,
  handleFormData,
  resetFormData,
  values,
}) {
  // After form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault()

    console.log(`First Name: ${values.firstName}`)
    console.log(`Last Name: ${values.lastName}`)
    console.log(`Phone: ${values.phone}`)
    console.log(`Date: ${values.date}`)
    console.log(`Time: ${values.time}`)
    console.log(`Occasion: ${values.occasion}`)
    console.log(`Number of Guest: ${values.guestNum}`)
    console.log(`Notes: ${values.notes}`)

    nextStep()
  }

  return (
    <>
      <h2
        className={`${styles.form_pagination} | bg-primary2 p-4 text-center font-semibold`}
      >
        Step 1 of 2:
      </h2>
      <form
        className={`${styles.reservations_form} | m-auto border-2 bg-white px-8 py-8`}
        onSubmit={submitFormData}
      >
        <div className={`${styles.firstName}`}>
          <label className='text-primary1' htmlFor='firstName'>
            FIRST NAME:
          </label>
          <input
            className='mb-5 w-full rounded-md border-2 border-primary1 px-2 text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary2'
            type='text'
            id='firstName'
            name='firstName'
            value={values.firstName}
            required
            onChange={handleFormData('firstName')}
          />
        </div>
        <div className={`${styles.lastName}`}>
          <label className='text-primary1' htmlFor='lastName'>
            LAST NAME:
          </label>
          <input
            className='mb-5 w-full rounded-md border-2 border-primary1 px-2 text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary2'
            type='text'
            id='lastName'
            name='lastName'
            value={values.lastName}
            required
            onChange={handleFormData('lastName')}
          />
        </div>
        <div className={`${styles.phone}`}>
          <label className='text-primary1' htmlFor='phone'>
            PHONE:
          </label>
          <input
            className='mb-5 w-full rounded-md border-2 border-primary1 px-2 text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary2'
            type='tel'
            id='phone'
            name='phone'
            placeholder='000-000-0000'
            value={values.phone}
            onChange={handleFormData('phone')}
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            required
          />
        </div>
        <div className={`${styles.date}`}>
          <label className='text-primary1' htmlFor='date'>
            DATE:
          </label>
          <input
            className='mb-5 w-full rounded-md border-2 border-primary1 px-2 text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary2'
            type='date'
            id='date'
            name='date'
            defaultValue={values.date}
            required
            onChange={handleFormData('date')}
          />
        </div>
        <div className={`${styles.time}`}>
          <label className='text-primary1' htmlFor='time'>
            TIME:
          </label>
          <select
            className='mb-5 w-full rounded-md border-2 border-primary1 px-2 text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary2'
            type='time'
            id='time'
            name='time'
            required
            value={values.time}
            onChange={handleFormData('time')}
          >
            <option value=''></option>
            <option value='3:00 PM'>3:00 PM</option>
            <option value='3:30 PM'>3:30 PM</option>
            <option value='4:00 PM'>4:00 PM</option>
            <option value='4:30 PM'>4:30 PM</option>
            <option value='5:00 PM'>5:00 PM</option>
            <option value='5:30 PM'>5:30 PM</option>
            <option value='6:00 PM'>6:00 PM</option>
            <option value='6:30 PM'>6:30 PM</option>
            <option value='7:00 PM'>7:00 PM</option>
            <option value='7:30 PM'>7:30 PM</option>
            <option value='8:00 PM'>8:00 PM</option>
            <option value='8:30 PM'>8:30 PM</option>
            <option value='9:00 PM'>9:00 PM</option>
          </select>
        </div>
        <div className={`${styles.occasion}`}>
          <label className='text-primary1' htmlFor='occasion'>
            OCCASION:
          </label>
          <select
            className='mb-5 w-full rounded-md border-2 border-primary1 px-2 text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary2'
            type='select'
            id='occasion'
            name='occasion'
            value={values.occasion}
            onChange={handleFormData('occasion')}
          >
            <option value='None'>None</option>
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
            <option value='Graduation'>Graduation</option>
            <option value='Job'>Job</option>
            <option value='Social'>Social</option>
          </select>
        </div>
        <div className={`${styles.guestNum}`}>
          <label className='text-primary1' htmlFor='guestNum'>
            NUMBER OF GUEST:
          </label>
          <input
            className='mb-5 w-full rounded-md border-2 border-primary1 px-2 text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary2'
            type='number'
            id='guestNum'
            name='guestNum'
            placeholder='1'
            min='1'
            max='10'
            required
            value={values.guestNum}
            onChange={handleFormData('guestNum')}
          />
        </div>
        <div className={`${styles.notes}`}>
          <label className='text-primary1' htmlFor='notes'>
            NOTES:
          </label>
          <textarea
            className='mb-5 w-full rounded-md border-2 border-primary1 px-2 text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary2'
            id='notes'
            name='notes'
            value={values.notes}
            onChange={handleFormData('notes')}
          />
        </div>
        <div className={`${styles.form_footer} | gap-8`}>
          <Button
            className={`${styles.form__left_button} | max-h-[48px] min-h-[48px] min-w-[220px] max-w-[220px] rounded-md bg-primary2 px-3.5 py-1.5 shadow-sm hover:bg-highlight2 hover:text-primary2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            type='reset'
            onClick={resetFormData}
          >
            Reset
          </Button>
          <Button
            className={`${styles.form__right_button} | max-h-[48px] min-h-[48px] min-w-[220px] max-w-[220px] rounded-md bg-primary2 px-3.5 py-1.5 shadow-sm hover:bg-highlight2 hover:text-primary2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            type='submit'
          >
            Continue
          </Button>
        </div>
      </form>
    </>
  )
}
