import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-18 md:pt-20">
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
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-emerald-100">Origen Oxapampa</p>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                Alimentos premium y propiedades con esencia GOXA
              </h1>
              <p className="mt-5 max-w-xl text-white/90 md:text-lg">
                Conectamos calidad, confianza y experiencia para llevar lo mejor de Oxapampa a cada hogar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#productos"
                  className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
                >
                  Ver catalogo
                </Link>
                <Link
                  href="/quienes-somos"
                  className="rounded-full border border-white/80 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
                >
                  Quienes somos
                </Link>
              </div>
            </div>

            <div className="relative h-[320px] overflow-hidden rounded-3xl border border-white/40 shadow-xl md:h-[380px]">
              <Image src="/hero-1.png" alt="Oxapampa" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
