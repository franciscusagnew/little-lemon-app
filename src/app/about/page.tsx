// `app/about/page.tsx` is the UI for the `/about` URL
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return <h1 className='text-center'>About Page!</h1>
}
