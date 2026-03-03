"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { House, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInterest } from "@/context/interest-context";
import { operaciones } from "@/lib/properties";

const NAV_LINKS = [
  { href: "/", label: "Compra en linea" },
  { href: "/inicio", label: "Conocer mas" },
  { href: "/quienes-somos", label: "Quienes somos" },
];

const WHATSAPP_LINK =
  "https://wa.me/51998855069?text=Hola%20GOXA%2C%20quisiera%20hacer%20una%20consulta.";

const triggerClasses =
  "flex items-center gap-2 rounded-full border border-emerald-200 bg-gradient-to-br from-white/90 to-emerald-50 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-900 shadow-[0_20px_40px_-20px_rgba(4,73,45,0.9)] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:gap-3";

const menuButtonClasses =
  "flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-white/90 text-emerald-700 shadow-lg transition hover:border-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300";

export default function FloatingCartMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { itemCount, interestedProperties, removeInterest, clearInterests, cartWhatsappLink } = useInterest();

  const handleCategoryClick = (category: (typeof operaciones)[number]) => {
    setMenuOpen(false);
    router.push(`/?op=${encodeURIComponent(category)}`);
  };

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleInterestAdded = () => {
      setMenuOpen(true);
    };

    window.addEventListener("interest:added", handleInterestAdded);
    return () => window.removeEventListener("interest:added", handleInterestAdded);
  }, []);

  const triggerContent = (
    <>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white shadow-inner shadow-emerald-900/30">
        <House className="h-4 w-4" />
      </div>
      <span className="hidden text-xs uppercase tracking-[0.3em] text-emerald-600 sm:inline">Propiedades</span>
      <span className="inline-flex h-6 min-w-[24px] items-center justify-center rounded-full border border-white bg-emerald-600 px-2 text-[11px] font-bold text-white shadow-lg shadow-emerald-900/40">
        {itemCount}
      </span>
    </>
  );

  return (
    <>
      <div
        ref={containerRef}
        className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full p-1 focus-within:outline-none sm:px-0"
        aria-live="polite"
      >
        {isHome ? (
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={triggerClasses}
            aria-label="Abrir carrito"
          >
            {triggerContent}
          </button>
        ) : (
          <Link href="/" className={triggerClasses} aria-label="Volver al inicio">
            {triggerContent}
          </Link>
        )}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Mostrar opciones de navegacion"
          className={menuButtonClasses}
        >
          <Menu className="h-5 w-5" />
        </button>

        {menuOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
            <div className="relative ml-auto flex h-full w-full max-w-none flex-col justify-start gap-6 overflow-auto rounded-bl-[28px] rounded-tl-[28px] bg-white px-6 py-8 shadow-[0_-20px_40px_-10px_rgba(4,73,45,0.3)] transition-all duration-300 ease-out sm:max-w-sm sm:ring-1 sm:ring-emerald-100">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition hover:border-emerald-200 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                aria-label="Cerrar el menu"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mt-12 flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-full bg-gradient-to-br from-emerald-700/90 to-emerald-500 px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-2xl transition hover:from-emerald-600 hover:to-emerald-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-2 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700">
                <p className="text-[10px] tracking-[0.5em] text-emerald-500">Categorias</p>
                {operaciones.map((category) => (
                  <button
                    key={`cat-${category}`}
                    type="button"
                    onClick={() => handleCategoryClick(category)}
                    className="rounded-full bg-gradient-to-br from-emerald-700/90 to-emerald-500 px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-2xl transition hover:from-emerald-600 hover:to-emerald-500"
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-emerald-600">
                  Me interesa ({itemCount})
                </p>

                {interestedProperties.length === 0 ? (
                  <p className="mt-3 text-sm text-slate-600">Aun no agregaste propiedades.</p>
                ) : (
                  <div className="mt-3 space-y-3">
                    {interestedProperties.map((property) => (
                      <article key={property.id} className="rounded-xl border border-emerald-100 bg-white p-3">
                        <p className="text-sm font-semibold text-slate-800">{property.titulo}</p>
                        <p className="text-xs text-slate-500">{property.precio}</p>
                        <button
                          type="button"
                          onClick={() => removeInterest(property.id)}
                          className="mt-2 text-xs font-semibold text-emerald-700 underline"
                        >
                          Quitar
                        </button>
                      </article>
                    ))}

                    <a
                      href={cartWhatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-full bg-emerald-700 px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white"
                    >
                      Consultar por WhatsApp
                    </a>

                    <button
                      type="button"
                      onClick={clearInterests}
                      className="w-full rounded-full border border-emerald-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700"
                    >
                      Limpiar lista
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-6 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_35px_-15px_rgba(0,0,0,0.65)] transition hover:scale-105 hover:bg-[#1EBE5D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
