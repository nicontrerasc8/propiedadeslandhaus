import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/site-footer";
import { buildWaLink, propiedades } from "@/lib/properties";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function PropiedadDetallePage({ params }: PageProps) {
  const { id } = await params;
  const propiedadId = Number(id);
  const propiedad = propiedades.find((item) => item.id === propiedadId);

  if (!propiedad) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-900">
      <div className="fixed inset-0 -z-10">
        <Image src="/hero-1.png" alt="Fondo GOXA" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-white/70" aria-hidden />
      </div>

      <section className="container mx-auto px-4 py-6">
        <div className="mb-6 flex items-center justify-between rounded-2xl border border-white/40 bg-white/30 px-4 py-3 backdrop-blur-sm">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="GOXA" width={42} height={42} priority />
            <p className="font-semibold text-white">GOXA Propiedades</p>
          </Link>
          <Link href="/" className="rounded-full border border-white/70 px-4 py-2 text-sm font-semibold text-white">
            Volver a landing
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-white/40 bg-white/60 shadow-xl">
            <Image src={propiedad.imagen} alt={propiedad.titulo} fill priority className="object-cover" />
          </div>

          <aside className="rounded-3xl border border-emerald-100 bg-white/95 p-6 shadow-[0_12px_30px_-20px_rgba(20,83,45,0.45)]">
            <p className="mb-2 inline-block rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-slate-900">
              {propiedad.operacion}
            </p>
            <h1 className="text-3xl font-bold leading-tight text-emerald-950">{propiedad.titulo}</h1>
            <p className="mt-2 text-slate-600">{propiedad.ubicacion}</p>
            <p className="mt-4 text-3xl font-extrabold text-emerald-800">{propiedad.precio}</p>
            <p className="mt-5 text-slate-700">{propiedad.descripcion}</p>

            <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl bg-emerald-50 p-4 text-sm text-slate-700">
              <p>Tipo: {propiedad.tipo}</p>
              <p>Area total: {propiedad.areaTotal} m2</p>
              <p>Area construida: {propiedad.areaConstruida} m2</p>
              <p>Dormitorios: {propiedad.dormitorios || "-"}</p>
              <p>Banos: {propiedad.banos || "-"}</p>
            </div>

            <div className="mt-6 flex gap-2">
              <Link href="/" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
                Volver
              </Link>
              <a
                href={buildWaLink(`Hola, me interesa esta propiedad: ${propiedad.titulo}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
