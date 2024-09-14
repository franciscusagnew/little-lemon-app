// `app/order/page.tsx` is the UI for the `/order` URL
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Online',
}

export default function Order() {
  return <h1 className='text-center'>Order Online Page!</h1>
}
