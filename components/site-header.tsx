import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Landing" },
  { href: "/inicio", label: "Inicio" },
  { href: "/quienes-somos", label: "Quienes somos" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="GOXA Propiedades" width={44} height={44} priority />
          <p className="font-semibold text-slate-900">GOXA Propiedades</p>
        </Link>

        <nav className="flex items-center gap-2 text-sm font-semibold text-slate-700 md:gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

