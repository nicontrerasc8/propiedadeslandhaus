import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Building2,
  Check,
  MapPin,
  Maximize,
  MessageCircle,
  Share2,
} from "lucide-react";

import SiteFooter from "@/components/site-footer";
import { buildWaLink, propiedades } from "@/lib/properties";

type PageProps = {
  params: Promise<{ id: string }>;
};

function formatNumber(value?: number | string) {
  if (value === undefined || value === null || value === "") return "-";
  return String(value);
}

export default async function PropiedadDetallePage({ params }: PageProps) {
  const { id } = await params;
  const propiedadId = Number(id);
  const propiedad = propiedades.find((item) => item.id === propiedadId);

  if (!propiedad) {
    notFound();
  }

  const galeria = propiedad.galeria?.length ? propiedad.galeria : [propiedad.imagen];
  const portada = galeria[0];
  const secundarias = galeria.slice(1, 5);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>

            <Link href="/" className="flex min-w-0 items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <Image src="/logo.png" alt="GOXA" fill className="object-contain p-1.5" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
                  GOXA Propiedades
                </p>
                <p className="truncate text-sm text-slate-700">{propiedad.titulo}</p>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <Share2 className="h-4 w-4" />
              Compartir
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mb-6 flex flex-col gap-3 lg:mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              {propiedad.operacion}
            </span>

            {propiedad.tipo && (
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-700">
                {propiedad.tipo}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                {propiedad.titulo}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  {propiedad.ubicacion}
                </span>

                <span className="inline-flex items-center gap-2">
                  <Maximize className="h-4 w-4 text-slate-500" />
                  {formatNumber(propiedad.areaTotal)} m²
                </span>

                <span className="inline-flex items-center gap-2">
                  <BedDouble className="h-4 w-4 text-slate-500" />
                  {formatNumber(propiedad.dormitorios)}
                </span>

                <span className="inline-flex items-center gap-2">
                  <Bath className="h-4 w-4 text-slate-500" />
                  {formatNumber(propiedad.banos)}
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Precio</p>
              <p className="mt-1 text-3xl font-bold text-slate-950 md:text-4xl">{propiedad.precio}</p>
            </div>
          </div>
        </div>

        <section className="mb-10">
          {galeria.length === 1 ? (
            <div className="relative w-full overflow-hidden rounded-[28px] bg-slate-100 shadow-sm ring-1 ring-slate-200">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={portada}
                  alt={propiedad.titulo}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ) : (
            <>
              <div className="hidden overflow-hidden rounded-[28px] shadow-sm ring-1 ring-slate-200 lg:grid lg:grid-cols-4 lg:grid-rows-2">
                <div className="relative col-span-2 row-span-2 min-h-[520px] bg-slate-100">
                  <Image
                    src={portada}
                    alt={propiedad.titulo}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 hover:scale-[1.02]"
                  />
                </div>

                {secundarias.map((imagen, index) => (
                  <div
                    key={`${propiedad.id}-desktop-${index}`}
                    className="relative min-h-[258px] border-l border-t border-white/80 bg-slate-100 first:border-t-0"
                  >
                    <Image
                      src={imagen}
                      alt={`${propiedad.titulo} foto ${index + 2}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>

              <div className="grid gap-3 lg:hidden">
                <div className="relative overflow-hidden rounded-[24px] bg-slate-100 shadow-sm ring-1 ring-slate-200">
                  <div className="relative aspect-[16/11] w-full">
                    <Image
                      src={portada}
                      alt={propiedad.titulo}
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {galeria.slice(1, 7).map((imagen, index) => (
                    <div
                      key={`${propiedad.id}-mobile-${index}`}
                      className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200"
                    >
                      <div className="relative aspect-square w-full">
                        <Image
                          src={imagen}
                          alt={`${propiedad.titulo} miniatura ${index + 2}`}
                          fill
                          sizes="(max-width: 640px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_390px] xl:grid-cols-[minmax(0,1fr)_420px]">
          <div className="min-w-0">
            <section className="border-b border-slate-200 pb-8">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold text-slate-950">Descripción</h2>
                <p className="mt-4 text-[15px] leading-8 text-slate-700">
                  {propiedad.descripcion}
                </p>
              </div>
            </section>

            <section className="border-b border-slate-200 py-8">
              <h2 className="text-2xl font-semibold text-slate-950">Resumen rápido</h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                      <Building2 className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Tipo</p>
                      <p className="mt-1 font-medium text-slate-900">{propiedad.tipo}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                      <Maximize className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Área total</p>
                      <p className="mt-1 font-medium text-slate-900">
                        {formatNumber(propiedad.areaTotal)} m²
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                      <Maximize className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Área construida
                      </p>
                      <p className="mt-1 font-medium text-slate-900">
                        {formatNumber(propiedad.areaConstruida)} m²
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                      <BedDouble className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Dormitorios</p>
                      <p className="mt-1 font-medium text-slate-900">
                        {formatNumber(propiedad.dormitorios)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                      <Bath className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Baños</p>
                      <p className="mt-1 font-medium text-slate-900">
                        {formatNumber(propiedad.banos)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                      <MapPin className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Ubicación</p>
                      <p className="mt-1 font-medium text-slate-900">{propiedad.ubicacion}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {(propiedad.fichaTecnica ?? []).length > 0 && (
              <section className="border-b border-slate-200 py-8">
                <h2 className="text-2xl font-semibold text-slate-950">Ficha técnica</h2>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {propiedad.fichaTecnica?.map((dato) => (
                    <div
                      key={`${propiedad.id}-${dato.label}`}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {dato.label}
                      </p>
                      <p className="mt-2 text-[15px] leading-7 text-slate-800">{dato.value}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {(propiedad.distribucion ?? []).length > 0 && (
              <section className="border-b border-slate-200 py-8">
                <h2 className="text-2xl font-semibold text-slate-950">Distribución</h2>

                <div className="mt-5 space-y-5">
                  {propiedad.distribucion?.map((bloque) => (
                    <div
                      key={`${propiedad.id}-${bloque.titulo}`}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {bloque.titulo}
                      </p>

                      <ul className="mt-5 grid gap-3">
                        {bloque.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-[15px] leading-7 text-slate-700"
                          >
                            <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {(propiedad.caracteristicasGenerales ?? []).length > 0 && (
              <section className="py-8">
                <h2 className="text-2xl font-semibold text-slate-950">Características generales</h2>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {propiedad.caracteristicasGenerales?.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-[15px] leading-7 text-slate-700 shadow-sm"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)]">
              <div className="border-b border-slate-200 px-6 py-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Precio de la propiedad</p>
                <p className="mt-2 text-3xl font-bold text-slate-950">{propiedad.precio}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Recibe atención personalizada, agenda una visita o solicita más información
                  directamente por WhatsApp.
                </p>
              </div>

              <div className="space-y-4 px-6 py-6">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3 py-2 text-sm">
                    <span className="text-slate-500">Operación</span>
                    <span className="font-medium text-slate-900">{propiedad.operacion}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-slate-200 py-2 text-sm">
                    <span className="text-slate-500">Tipo</span>
                    <span className="font-medium text-slate-900">{propiedad.tipo}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-slate-200 py-2 text-sm">
                    <span className="text-slate-500">Área total</span>
                    <span className="font-medium text-slate-900">
                      {formatNumber(propiedad.areaTotal)} m²
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-slate-200 py-2 text-sm">
                    <span className="text-slate-500">Dormitorios</span>
                    <span className="font-medium text-slate-900">
                      {formatNumber(propiedad.dormitorios)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-slate-200 py-2 text-sm">
                    <span className="text-slate-500">Baños</span>
                    <span className="font-medium text-slate-900">
                      {formatNumber(propiedad.banos)}
                    </span>
                  </div>
                </div>

                <a
                  href={buildWaLink(`Hola, me interesa esta propiedad: ${propiedad.titulo}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Consultar por WhatsApp
                </a>

                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Volver a propiedades
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}