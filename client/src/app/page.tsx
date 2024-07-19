import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        Getting Started
        <div>
          <Link href='/login'>Login</Link>
          <div> </div>
          <Link href='/register'>Register</Link>
          <div> </div>
          <Link href='/tattoos'>Tattoos</Link>
        </div>
      </div>
    </main>
  );
}
