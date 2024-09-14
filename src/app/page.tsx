import type { Metadata } from 'next'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'
import About from './components/About'

export const metadata: Metadata = {
  title: 'Home | Little Lemon Restaurant',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>
  )
}
