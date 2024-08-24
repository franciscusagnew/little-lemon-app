import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/order">Order Online</Link>
      <Link href="/reservations">Reservations</Link>
      <Link href="/login">Login</Link>
    </main>
  );
}
