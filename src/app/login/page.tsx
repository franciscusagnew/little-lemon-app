// `app/login/page.tsx` is the UI for the `/login` URL
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

export default function Login() {
  return <h1 className='text-center'>Login Page!</h1>
}
