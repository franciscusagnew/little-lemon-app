// `app/reservations/page.tsx` is the UI for the `/reservations` URL
'use client'
import BookingForm from '../components/BookingForm'
import BookingForm2 from '../components/BookingForm2'
import BookingForm3 from '../components/BookingForm3'
import { useState } from 'react'

const BookingPage = () => {
  // State for form steps
  const [step, setStep] = useState(1)

  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    date: '',
    time: '',
    occasion: '',
    guestNum: '',
    notes: '',
  })

  // Functions for going to next step by increasing step state by 1
  const nextStep = () => {
    setStep(step + 1)
  }

  // Functions for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setStep(step - 1)
  }

  // Handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input: any) => (e: { target: { value: any } }) => {
    // Input value from the form
    const { value } = e.target

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }))
  }

  //   const [formState, formAction] = useFormState(fetchData, {})
  //   console.log(formState)
  //   const [firstName, setFirstName] = useState('')
  //   const [lastName, setLastName] = useState('')
  //   const [phone, setPhone] = useState('')
  //   const [date, setDate] = useState('')
  //   const [availableTimes, setAvailableTimes] = useState('')
  //   const [occasion, setOccasion] = useState('none')
  //   const [guestNum, setGuestNum] = useState('')
  //   const [notes, setNotes] = useState('')

  const resetFormData = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      date: '',
      time: '',
      occasion: '',
      guestNum: '',
      notes: '',
    })
  }

  // Switch case to show different form in each step
  switch (step) {
    case 1:
      return (
        <BookingForm
          nextStep={nextStep}
          handleFormData={handleInputData}
          resetFormData={resetFormData}
          values={formData}
        />
      )
    case 2:
      return (
        <BookingForm2
          nextStep={nextStep}
          prevStep={prevStep}
          values={formData}
        />
      )
    case 3:
      return <BookingForm3 values={formData} />
  }
}

export default BookingPage
