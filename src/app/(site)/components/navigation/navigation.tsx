import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed w-full z-10 inset-x-0 top-0">
      <div className="flex justify-between p-2.5 md:p-5 md:pb-3.5">
        <Link href="/">Siiri Tännler</Link>
        <a href="mailto:mail@siiritaennler.ch" className="subtitle">
          mail@siiritaennler.ch
        </a>
        <a href="mailto:mail@siiritaennler.ch" className="subtitle-mobile">
          E-mail
        </a>
        <Link href="/information">Information</Link>
      </div>
    </nav>
  );
}
