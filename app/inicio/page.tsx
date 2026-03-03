"use client";

import Image from "next/image";
import Link from "next/link";
import { Handshake, Leaf, MapPinned, Mountain } from "lucide-react";
import SiteFooter from "@/components/landing/site-footer";

const features = [
  {
    icon: Mountain,
    title: "Terrenos con vista",
    text: "Espacios amplios, rodeados de naturaleza, ideales para casa de campo o proyecto turístico.",
  },
  {
    icon: Leaf,
    title: "Fincas productivas",
    text: "Zonas con potencial agrícola y rural para proyectos sostenibles o inversión de largo plazo.",
  },
  {
    icon: MapPinned,
    title: "Ubicación estratégica",
    text: "Propiedades seleccionadas por acceso, entorno y proyección de valorización.",
  },
  {
    icon: Handshake,
    title: "Acompañamiento integral",
    text: "Te guiamos en cada paso del proceso: búsqueda, visita y cierre.",
  },
];

export default function InicioPage() {
  return (
    <main className="relative min-h-screen text-slate-900 overflow-hidden">

      {/* Fondo */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop"
          alt="Paisaje natural estilo Oxapampa"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/80" />
      </div>

      <div className="relative z-10 flex flex-col gap-24">

        {/* HERO */}
        <section className="min-h-screen flex items-center px-6">
          <div className="container mx-auto max-w-5xl rounded-3xl border border-white/40 bg-white/15 p-8 text-center text-white backdrop-blur-sm md:p-12">



            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Terrenos y propiedades en Oxapampa. <br />
              <span className="text-emerald-300">Sin vueltas.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Oportunidades seleccionadas en zonas estratégicas: campo, vista, acceso y potencial.
              Te acompañamos desde la búsqueda hasta el cierre.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Ver catálogo
              </Link>

              <Link
                href="/quienes-somos"
                className="rounded-full border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Quienes somos
              </Link>
            </div>
          </div>
        </section>

        {/* BLOQUE CENTRAL CON IMAGEN */}
        <section className="px-6">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">
                Inversión en naturaleza con criterio
              </h2>

              <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                Oxapampa combina calidad de vida y proyección de crecimiento.
                Cada propiedad que mostramos responde a criterios reales:
                ubicación, acceso, entorno y potencial de valorización.
              </p>

              <Link
                href="/ruta"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-white font-semibold transition hover:bg-emerald-800"
              >
                Explorar propiedades
              </Link>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000&auto=format&fit=crop"
                alt="Naturaleza y bosque"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="px-6">
          <div className="container mx-auto max-w-6xl rounded-3xl border border-white/40 bg-white/55 p-8 backdrop-blur-sm md:p-10">

            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4">
                ¿Por qué Oxapampa?
              </h2>
              <p className="text-slate-700 text-lg max-w-3xl mx-auto">
                Espacio, tranquilidad y una creciente demanda por proyectos rurales y turismo de naturaleza.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg border border-emerald-100 hover:-translate-y-1 transition"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <SiteFooter />
      </div>
    </main>
  );
}
