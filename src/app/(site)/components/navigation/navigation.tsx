import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-10 w-full">
      <div className="flex justify-between p-2.5 md:p-5 md:pb-3.5">
        <h1>
          <Link href="/">Siiri Tännler</Link>
        </h1>
        <a href="mailto:mail@siiritaennler.ch" className="subtitle">
          mail@siiritaennler.ch
        </a>
        <Link href="/information">Information</Link>
      </div>
    </nav>
  );
}
