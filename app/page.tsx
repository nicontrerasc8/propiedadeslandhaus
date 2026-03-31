"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";

export default function LandingPage() {
  return (
    <Suspense fallback={<LandingPageFallback />}>
      <LandingPageContent />
    </Suspense>
  );
}

function LandingPageFallback() {
  return <main className="min-h-screen" />;
}

function LandingPageContent() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-18 text-slate-900 md:pt-20">
      <div className="fixed inset-0 -z-10">
        <Image src="/hero-4.png" alt="Fondo de propiedades" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/55 via-slate-900/20 to-white/65" aria-hidden />
      </div>

      <section className="relative">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-white/40 bg-white/35 p-4 shadow-lg backdrop-blur-sm md:p-6">
            <div className="mb-8 flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.png" alt="GOXA" width={52} height={52} priority />
                <div>
                  <p className="text-lg font-bold text-white md:text-xl">GOXA</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-100">Propiedades</p>
                </div>
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-emerald-100">Propiedades GOXA</p>
                <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl">
                  Encuentra espacios que elevan tu estilo de vida
                </h1>
                <p className="mt-5 max-w-xl text-white/90 md:text-lg">
                  Compra, venta y alquiler con la misma calidad, confianza y estilo visual de GOXA.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/inicio"
                    className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
                  >
                    Conocer más
                  </Link>
                  <Link
                    href="/quienes-somos"
                    className="rounded-full border border-white/80 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
                  >
                    Quienes somos
                  </Link>
                </div>
              </div>

    
            </div>
          </div>
        </div>
      </section>

      <section id="propiedades-grid" className="container mx-auto my-10 px-4 pb-6">
        <div className="grid overflow-hidden rounded-[2rem] border border-white/60 bg-white/90 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur-sm md:grid-cols-[1.15fr,0.85fr]">
          <div className="relative min-h-[320px] md:min-h-[520px]">
            <Image
              src="/hero-2.png"
              alt="Próximamente en GOXA Propiedades"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/30 to-transparent" />
            <div className="absolute left-6 top-6 rounded-full bg-amber-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-900">
              Próximamente
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">GOXA Store</p>
            <h2 className="text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              Muy pronto encontrarás aquí una nueva experiencia de propiedades.
            </h2>
            <p className="max-w-lg text-base leading-7 text-slate-600">
              Mientras preparamos esta sección, puedes visitar la tienda oficial de GOXA y descubrir los
              productos disponibles ahora mismo.
            </p>
            <div className="pt-2">
              <Link
                href="https://www.goxa.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                Ir a la tienda GOXA
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
