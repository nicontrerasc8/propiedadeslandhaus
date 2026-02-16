"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Propiedad = {
  id: number;
  titulo: string;
  operacion: "Venta" | "Alquiler" | "Proyecto";
  tipo: "Departamento" | "Casa" | "Terreno";
  ubicacion: string;
  precio: string;
  areaConstruida: number;
  areaTotal: number;
  dormitorios: number;
  imagen: string;
};

const whatsappNumber = "5491122334455";

const propiedades: Propiedad[] = [
  {
    id: 1,
    titulo: "Departamento exclusivo en Las Lomas",
    operacion: "Venta",
    tipo: "Departamento",
    ubicacion: "La Molina",
    precio: "$ 161,000",
    areaConstruida: 110,
    areaTotal: 110,
    dormitorios: 3,
    imagen:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    titulo: "Residencia premium con jardin privado",
    operacion: "Venta",
    tipo: "Casa",
    ubicacion: "Santiago de Surco",
    precio: "$ 1,900,000",
    areaConstruida: 583,
    areaTotal: 1200,
    dormitorios: 3,
    imagen:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    titulo: "Terreno estrategico en esquina",
    operacion: "Venta",
    tipo: "Terreno",
    ubicacion: "La Molina",
    precio: "$ 1,500,000",
    areaConstruida: 0,
    areaTotal: 2500,
    dormitorios: 0,
    imagen:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
];

const operaciones = ["Venta", "Alquiler", "Proyecto"] as const;

const buildWaLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export default function Home() {
  const [tab, setTab] = useState<(typeof operaciones)[number]>("Venta");
  const [seleccionadas, setSeleccionadas] = useState<number[]>([]);

  const filtradas = propiedades.filter((p) => p.operacion === tab);

  const itemsCarrito = propiedades.filter((p) =>
    seleccionadas.includes(p.id),
  );

  const mensajeCarrito =
    itemsCarrito.length === 0
      ? "Hola, quiero informacion sobre propiedades."
      : `Hola, me interesan estas propiedades:\n${itemsCarrito
          .map((p, i) => `${i + 1}. ${p.titulo} - ${p.precio}`)
          .join("\n")}`;

  const toggleSeleccion = (id: number) => {
    setSeleccionadas((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-[#0b1f3a]">

      {/* HEADER */}
      <header className="bg-white shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-3xl font-bold tracking-wide">
            OXA <span className="text-[#c6a84f]">Propiedades</span>
          </div>
          <nav className="hidden gap-10 text-sm font-semibold md:flex">
            <a href="#">Venta</a>
            <a href="#">Alquiler</a>
            <a href="#">Proyectos</a>
            <a href="#">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Casa moderna"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1f3a]/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 text-white">
          <h1 className="max-w-2xl text-5xl font-bold leading-tight">
            Descubre espacios que elevan tu estilo de vida
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-200">
            Propiedades exclusivas en las mejores zonas de Lima.
          </p>
        </div>
      </section>

      {/* TABS */}
      <div className="mx-auto mt-10 flex max-w-6xl justify-center gap-4 px-6">
        {operaciones.map((op) => (
          <button
            key={op}
            onClick={() => setTab(op)}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
              tab === op
                ? "bg-[#0b1f3a] text-white"
                : "bg-white shadow-sm hover:bg-gray-100"
            }`}
          >
            {op}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="mx-auto mt-12 grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        {filtradas.map((propiedad) => {
          const selected = seleccionadas.includes(propiedad.id);
          return (
            <div
              key={propiedad.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64">
                <Image
                  src={propiedad.imagen}
                  alt={propiedad.titulo}
                  fill
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#c6a84f] px-4 py-1 text-xs font-bold text-white">
                  {propiedad.operacion}
                </div>
              </div>

              <div className="p-6">
                <p className="text-2xl font-bold text-[#0b1f3a]">
                  {propiedad.precio}
                </p>
                <h3 className="mt-3 text-lg font-semibold">
                  {propiedad.titulo}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {propiedad.ubicacion}
                </p>

                <div className="mt-4 flex justify-between text-sm text-gray-600">
                  <span>{propiedad.areaTotal} m²</span>
                  <span>{propiedad.dormitorios || "-"} Dorm.</span>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => toggleSeleccion(propiedad.id)}
                    className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                      selected
                        ? "bg-[#0b1f3a] text-white"
                        : "border border-[#0b1f3a] hover:bg-[#0b1f3a] hover:text-white"
                    }`}
                  >
                    {selected ? "Agregado" : "Agregar"}
                  </button>

                  <a
                    href={buildWaLink(
                      `Hola, quiero informacion sobre ${propiedad.titulo}`
                    )}
                    target="_blank"
                    className="flex-1 rounded-lg bg-[#c6a84f] px-4 py-2 text-center text-sm font-semibold text-white hover:opacity-90"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CARRITO */}
      {itemsCarrito.length > 0 && (
        <div className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-xl -translate-x-1/2 rounded-full bg-[#0b1f3a] px-6 py-4 text-white shadow-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm">
              {itemsCarrito.length} propiedad(es) seleccionadas
            </p>
            <a
              href={buildWaLink(mensajeCarrito)}
              target="_blank"
              className="rounded-full bg-[#25d366] px-6 py-2 text-sm font-semibold text-black"
            >
              Consultar
            </a>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-24 bg-[#0b1f3a] py-10 text-center text-sm text-gray-300">
        © 2026 OXA Propiedades — Inversiones Inteligentes
      </footer>
    </div>
  );
}