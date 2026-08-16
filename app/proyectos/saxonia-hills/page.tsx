import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  Check,
  Droplets,
  Leaf,
  MapPin,
  Mountain,
  Phone,
  ShieldCheck,
  Trees,
} from "lucide-react";

const phone = "+51 914 936 078";
const whatsapp = "https://wa.me/51914936078?text=Hola%2C%20quiero%20conocer%20la%20disponibilidad%20de%20Saxonia%20Hills.";

const lots = [
  { name: "Playa", area: "1,592 m²", price: "Consultar", detail: "Playa de río con piscinas naturales, espacios de pesca y club house." },
  { name: "Lote 01", area: "1,346 m²", price: "USD 75,000", detail: "Cercano al sendero ecológico y rodeado de un bosque de eucaliptos." },
  { name: "Lote 02", area: "1,568 m²", price: "USD 87,000", detail: "Acceso directo a una vertiente de agua natural." },
  { name: "Lote 03", area: "2,194 m²", price: "USD 121,000", detail: "Zona plana extensa, ideal para un jardín amplio." },
  { name: "Lote 04", area: "2,098 m²", price: "USD 105,000", detail: "Privacidad absoluta en el borde de la reserva." },
  { name: "Lote 05", area: "1,618 m²", price: "USD 81,000", detail: "Lote esquinero premium, doble frente y máxima luz solar." },
  { name: "Lote 06", area: "2,378 m²", price: "USD 120,000", detail: "Acceso exclusivo a la ribera y el sonido constante del río." },
  { name: "Lote 07", area: "1,700 m²", price: "USD 75,000", detail: "Ubicación de media ladera y atardeceres sobre las montañas." },
  { name: "Lote 08", area: "1,798 m²", price: "USD 80,000", detail: "Master Lot: la parte más alta, con naturaleza envolvente." },
];

const benefits = [
  { icon: ShieldCheck, title: "Seguridad jurídica", text: "Lotes independizados e inscritos en SUNARP." },
  { icon: Droplets, title: "Río y manantiales", text: "Acceso privilegiado a corrientes de agua natural." },
  { icon: Mountain, title: "Infraestructura", text: "Red eléctrica y vías internas consolidadas." },
  { icon: Trees, title: "Comunidad exclusiva", text: "Solo 9 familias en un entorno residencial." },
];

export default function SaxoniaHillsPage() {
  return (
    <main className="min-h-screen bg-[#f1f0e9] text-[#23301d]">
      <section className="relative isolate min-h-[780px] overflow-hidden bg-[#182316] text-white">
        <Image src="/saxonia/page-1.jpg" alt="Saxonia Hills, condominio de cottages en Oxapampa" fill priority className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#13200f]/95 via-[#162313]/70 to-[#13200f]/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#13200f]/75 via-transparent to-[#13200f]/35" />

        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            GOXA Propiedades
          </Link>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold transition hover:bg-white hover:text-[#1b2916] sm:block">
            Consultar disponibilidad
          </a>
        </header>

        <div className="mx-auto flex max-w-7xl px-5 pb-20 pt-20 md:px-8 md:pt-28">
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.34em] text-[#d9b97c] uppercase">Oxapampa · Perú</p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-6xl leading-[0.88] tracking-tight sm:text-7xl md:text-8xl">Saxonia<br />Hills</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/85 md:text-xl">
              Un refugio exclusivo donde la naturaleza toca la perfección. Nueve espacios únicos moldeados por el bosque, el río y las montañas.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#lotes" className="inline-flex items-center gap-2 rounded-full bg-[#d5ae69] px-6 py-3.5 font-bold text-[#1d2918] transition hover:bg-[#e6c581]">
                Ver lotes disponibles <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white/60 px-6 py-3.5 font-semibold transition hover:bg-white/10">
                Hablar con un asesor
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-[#172313]/75 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/15 px-5 text-sm md:grid-cols-4 md:px-8">
            {["9 sublotes exclusivos", "A 15 min · 9.1 km", "Junto a Yanachaga Chemillén", "Lotes desde 1,346 m²"].map((item) => (
              <p key={item} className="py-5 text-center text-white/85 md:py-6">{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-28">
        <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] shadow-xl">
          <Image src="/saxonia/page-3.jpg" alt="Entorno natural de Oxapampa" fill className="object-cover" />
        </div>
        <div className="self-center">
          <p className="text-xs font-bold tracking-[0.28em] text-[#70815d] uppercase">La visión</p>
          <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl leading-tight text-[#26371e] md:text-5xl">Un santuario para volver a lo esencial.</h2>
          <p className="mt-6 max-w-xl leading-8 text-[#55604f]">
            Saxonia Hills es un ecosistema residencial pensado para quienes buscan escapar del bullicio urbano sin renunciar al confort. Privacidad, bosques vírgenes y el sonido relajante del río, en uno de los paisajes más especiales de la selva central.
          </p>
          <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-[#405338]"><Leaf className="h-5 w-5 text-[#789a59]" /> Clima primaveral, aire puro y biodiversidad única.</div>
        </div>
      </section>

      <section className="bg-[#26391f] py-20 text-[#f7f4e9] md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.08fr_0.92fr] md:px-8">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-[#cfad75] uppercase">Diseño urbano</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight md:text-5xl">El masterplan</h2>
            <p className="mt-6 max-w-xl leading-8 text-[#edf0e9]/75">Un condominio cuidadosamente planificado para proteger la privacidad, conservar las vistas e integrarse con respeto al bosque y al río adyacente.</p>
            <div className="mt-8 grid gap-3 text-sm text-white/90 sm:grid-cols-2">
              {["Vías afirmadas y acceso seguro", "Vistas ininterrumpidas", "Integración con el entorno", "Zonificación residencial"].map((item) => <p key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d3af72]" />{item}</p>)}
            </div>
          </div>
          <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] ring-1 ring-white/20">
            <Image src="/saxonia/page-4.jpg" alt="Masterplan de Saxonia Hills" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section id="lotes" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.28em] text-[#70815d] uppercase">Disponibilidad</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight text-[#26371e] md:text-5xl">Elige tu lugar en el bosque.</h2>
          <p className="mt-5 leading-8 text-[#55604f]">Cada sublote cuenta con características topográficas y paisajísticas propias. Consulta la disponibilidad actual antes de reservar.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {lots.map((lot) => (
            <article key={lot.name} className="group rounded-3xl border border-[#d9d9cc] bg-[#faf9f4] p-6 transition hover:-translate-y-1 hover:border-[#a6a88b] hover:shadow-xl">
              <div className="flex items-start justify-between gap-4"><p className="font-[family-name:var(--font-display)] text-2xl text-[#2d4025]">{lot.name}</p><span className="rounded-full bg-[#e8eadf] px-3 py-1 text-xs font-bold text-[#586a4d]">{lot.area}</span></div>
              <p className="mt-5 min-h-12 text-sm leading-6 text-[#65705f]">{lot.detail}</p>
              <div className="mt-6 flex items-center justify-between border-t border-[#dfdfd2] pt-4"><p className="font-bold text-[#2a3c23]">{lot.price}</p><a className="inline-flex items-center gap-1 text-sm font-bold text-[#758c5b]" href={whatsapp} target="_blank" rel="noreferrer">Consultar <ArrowDownRight className="h-4 w-4" /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e5e5d8] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl bg-[#f8f7f0] p-7 shadow-sm"><Icon className="h-7 w-7 text-[#79935c]" /><h3 className="mt-7 font-[family-name:var(--font-display)] text-2xl text-[#304329]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#63705d]">{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]"><Image src="/saxonia/page-9.jpg" alt="Diseño cottage contemporáneo" fill className="object-cover" /></div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold tracking-[0.28em] text-[#70815d] uppercase">Concepto cottage</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight text-[#26371e] md:text-5xl">Arquitectura que pertenece al paisaje.</h2>
          <p className="mt-6 leading-8 text-[#55604f]">El estilo cottage contemporáneo propone techos a dos aguas, ventanales amplios y materiales nobles. Madera, piedra local y cristal se unen para que el interior y el bosque dialoguen naturalmente.</p>
          <a href="/saxonia/saxonia-hills-brochure.pdf" target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 font-bold text-[#597343] hover:underline">Ver brochure completo <ArrowDownRight className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="bg-[#172313] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-[#d2af73] uppercase">Reserva tu lote hoy</p>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-tight md:text-6xl">Asegura tu refugio en Oxapampa.</h2>
          <p className="mt-5 max-w-xl text-white/70">Recibe planos perimétricos, disponibilidad actualizada y atención directa para conocer Saxonia Hills.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#d5ae69] px-6 py-3.5 font-bold text-[#1d2918] transition hover:bg-[#e6c581]"><Phone className="h-4 w-4" /> WhatsApp: {phone}</a>
            <a href="https://www.saxoniahills.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/40 px-6 py-3.5 font-semibold transition hover:bg-white/10">www.saxoniahills.com</a>
          </div>
          <p className="mt-10 inline-flex items-center gap-2 text-sm text-white/55"><MapPin className="h-4 w-4" /> Oxapampa, Pasco · Perú</p>
        </div>
      </section>
    </main>
  );
}
