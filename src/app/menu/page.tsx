// `app/menu/page.tsx` is the UI for the `/menu` URL
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu',
}

export default function Menu() {
  return <h1 className='text-center'>Menu Page!</h1>
}
