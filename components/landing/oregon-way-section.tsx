const items = [
  {
    title: "Seleccion local",
    text: "Priorizamos origen y trazabilidad para cada producto que ofrecemos.",
  },
  {
    title: "Calidad premium",
    text: "Cada proceso esta cuidado para mantener frescura y sabor autentico.",
  },
  {
    title: "Entrega confiable",
    text: "Llevamos productos de Oxapampa hasta tu mesa con eficiencia.",
  },
];

export default function OregonWaySection() {
  return (
    <section className="px-4">
      <div className="container mx-auto rounded-3xl border border-emerald-100 bg-white/70 p-8 shadow-[0_20px_45px_-30px_rgba(20,83,45,0.45)]">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700">The Oregon Way</p>
          <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">Nuestra forma de trabajar</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-emerald-900/80">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
