"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import InterestButton from "@/components/interest-button";
import SiteFooter from "@/components/site-footer";
import { operaciones, propiedades } from "@/lib/properties";

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
  const searchParams = useSearchParams();
  const router = useRouter();
  const selected = searchParams.get("op");
  const tab =
    selected && operaciones.includes(selected as (typeof operaciones)[number])
      ? (selected as (typeof operaciones)[number])
      : "Venta";

  const filtradas = propiedades.filter((p) => p.operacion === tab);

  const handleTabChange = (op: (typeof operaciones)[number]) => {
    router.replace(`/?op=${encodeURIComponent(op)}`, { scroll: false });
  };

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

      <section id="propiedades-grid" className="container mx-auto mt-10 flex flex-wrap justify-center gap-3 px-4">
        {operaciones.map((op) => (
          <button
            key={op}
            onClick={() => handleTabChange(op)}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
              tab === op
                ? "bg-emerald-700 text-white"
                : "border border-emerald-100 bg-white/80 text-emerald-900 hover:bg-white"
            }`}
          >
            {op}
          </button>
        ))}
      </section>

      <section className="container mx-auto my-10 grid gap-6 px-4 pb-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtradas.map((propiedad) => (
          <article
            key={propiedad.id}
            className="rounded-2xl border border-green-100 bg-white/95 p-3 shadow-[0_12px_30px_-20px_rgba(20,83,45,0.45)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-30px_rgba(20,83,45,0.45)]"
          >
            <div className="relative h-56 overflow-hidden rounded-xl">
              <Image src={propiedad.imagen} alt={propiedad.titulo} fill className="object-cover" />
              <p className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900">
                {propiedad.operacion}
              </p>
            </div>

            <div className="space-y-3 p-3">
              <p className="text-xl font-bold text-emerald-950">{propiedad.precio}</p>
              <h2 className="text-lg font-semibold text-slate-900">{propiedad.titulo}</h2>
              <p className="text-sm text-slate-600">{propiedad.ubicacion}</p>

              <div className="flex justify-between text-sm text-slate-600">
                <span>{propiedad.areaTotal} m2</span>
                <span>{propiedad.dormitorios || "-"} dorm.</span>
              </div>

              <div className="flex gap-2 pt-2">
                <Link
                  href={`/propiedad/${propiedad.id}`}
                  className="flex-1 rounded-lg border border-emerald-700 px-3 py-2 text-center text-sm font-semibold text-emerald-800"
                >
                  Ver detalle
                </Link>
                <InterestButton
                  property={propiedad}
                  className="flex-1 rounded-lg bg-emerald-700 px-3 py-2 text-center text-sm font-semibold text-white"
                />
              </div>
            </div>
          </article>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
