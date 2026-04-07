"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import { propiedades } from "@/lib/properties";

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
  const propiedadesVisibles = propiedades.slice(0, 7);

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
                  Propiedades seleccionadas para vivir e invertir en Oxapampa
                </h1>
                <p className="mt-5 max-w-xl text-white/90 md:text-lg">
                  Casas y terrenos con ubicaciones privilegiadas, informacion verificada y acompanamiento
                  personalizado durante todo el proceso.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#propiedades-grid"
                    className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
                  >
                    Explorar propiedades
                  </Link>
                  <Link
                    href="/quienes-somos"
                    className="rounded-full border border-white/80 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
                  >
                    Conocer GOXA
                  </Link>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      <section id="propiedades-grid" className="mx-auto my-10 max-w-[1500px] px-4 pb-6">
        <div className="rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur-sm md:p-8 xl:p-10">
          <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">Seleccion GOXA</p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                Residencias y terrenos con alto potencial en Oxapampa
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Una coleccion curada de propiedades en venta, presentada con fotografias reales, informacion precisa y
                acceso directo a cada ficha completa.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 px-5 py-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">{propiedadesVisibles.length} propiedades seleccionadas</p>
              <p className="mt-1">Casas y terrenos en venta en ubicaciones estrategicas de Oxapampa.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {propiedadesVisibles.map((propiedad) => (
              <article
                key={propiedad.id}
                className="group overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/propiedad/${propiedad.id}`} className="block">
                  <div className="relative min-h-[300px] md:min-h-[360px]">
                    <Image
                      src={propiedad.galeria?.[0] ?? propiedad.imagen}
                      alt={propiedad.titulo}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-transparent" />
                    <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                      <span className="rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-slate-900">
                        {propiedad.operacion}
                      </span>
                      <span className="rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                        {propiedad.tipo}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                      <p className="text-xs uppercase tracking-[0.28em] text-emerald-200">Oxapampa</p>
                      <h3 className="mt-2 text-2xl font-bold leading-tight md:text-3xl">{propiedad.titulo}</h3>
                      <p className="mt-3 text-sm text-white/85 md:text-base">{propiedad.ubicacion}</p>
                    </div>
                  </div>
                </Link>

                <div className="space-y-5 p-6 md:p-7">
                  <p className="text-base leading-7 text-slate-600">{propiedad.descripcion}</p>

                  <div className="grid gap-3 rounded-2xl bg-slate-50 p-5 text-sm text-slate-700 sm:grid-cols-2">
                    <p>Precio: {propiedad.precio}</p>
                    <p>Area total: {propiedad.areaTotal} m2</p>
                    <p>Area construida: {propiedad.areaConstruida} m2</p>
                    <p>{propiedad.dormitorios ? `${propiedad.dormitorios} dormitorios` : propiedad.tipo}</p>
                  </div>

                  <Link
                    href={`/propiedad/${propiedad.id}`}
                    className="inline-flex rounded-full bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
                  >
                    Ver detalle completo
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
