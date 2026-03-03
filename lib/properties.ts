export type Propiedad = {
  id: number;
  titulo: string;
  descripcion: string;
  operacion: "Venta" | "Alquiler" | "Proyecto";
  tipo: "Departamento" | "Casa" | "Terreno";
  ubicacion: string;
  precio: string;
  areaConstruida: number;
  areaTotal: number;
  dormitorios: number;
  banos: number;
  imagen: string;
};

export const whatsappNumber = "5491122334455";

export const propiedades: Propiedad[] = [
  {
    id: 1,
    titulo: "Casa familiar en Jr. Pozuzo 145",
    descripcion: "Casa de campo con jardin amplio y acabados de madera a minutos de la plaza de Oxapampa.",
    operacion: "Venta",
    tipo: "Casa",
    ubicacion: "Jr. Pozuzo 145, Oxapampa",
    precio: "$ 185,000",
    areaConstruida: 160,
    areaTotal: 420,
    dormitorios: 4,
    banos: 2,
    imagen:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    titulo: "Departamento centrico en Av. San Martin 320",
    descripcion: "Departamento moderno con balcon y vista verde, ideal para vivir o rentar por temporada.",
    operacion: "Venta",
    tipo: "Departamento",
    ubicacion: "Av. San Martin 320, Oxapampa",
    precio: "$ 128,000",
    areaConstruida: 92,
    areaTotal: 92,
    dormitorios: 3,
    banos: 2,
    imagen:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    titulo: "Terreno comercial en Prol. Bolognesi 870",
    descripcion: "Terreno plano con frente amplio, ideal para hotel boutique o centro gastronomico.",
    operacion: "Venta",
    tipo: "Terreno",
    ubicacion: "Prol. Bolognesi 870, Oxapampa",
    precio: "$ 210,000",
    areaConstruida: 0,
    areaTotal: 3200,
    dormitorios: 0,
    banos: 0,
    imagen:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    titulo: "Casa rustica en Jr. Tirol 58",
    descripcion: "Propiedad acogedora con chimenea, rodeada de arboles y clima fresco todo el ano.",
    operacion: "Venta",
    tipo: "Casa",
    ubicacion: "Jr. Tirol 58, Oxapampa",
    precio: "$ 149,000",
    areaConstruida: 140,
    areaTotal: 360,
    dormitorios: 3,
    banos: 2,
    imagen:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    titulo: "Departamento nuevo en Av. Miraflores 214",
    descripcion: "Edificio nuevo con acabados premium y acceso rapido a comercios y restaurantes.",
    operacion: "Venta",
    tipo: "Departamento",
    ubicacion: "Av. Miraflores 214, Oxapampa",
    precio: "$ 115,000",
    areaConstruida: 85,
    areaTotal: 85,
    dormitorios: 2,
    banos: 2,
    imagen:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    titulo: "Terreno residencial en Jr. Chontabamba 402",
    descripcion: "Lote ideal para vivienda familiar, zona tranquila con servicios basicos cercanos.",
    operacion: "Venta",
    tipo: "Terreno",
    ubicacion: "Jr. Chontabamba 402, Oxapampa",
    precio: "$ 98,000",
    areaConstruida: 0,
    areaTotal: 1100,
    dormitorios: 0,
    banos: 0,
    imagen:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    titulo: "Casa amoblada en Psj. Santa Rosa 33",
    descripcion: "Casa lista para mudanza, con cocina equipada y patio posterior techado.",
    operacion: "Alquiler",
    tipo: "Casa",
    ubicacion: "Psj. Santa Rosa 33, Oxapampa",
    precio: "$ 1,100 / mes",
    areaConstruida: 130,
    areaTotal: 260,
    dormitorios: 3,
    banos: 2,
    imagen:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    titulo: "Departamento con balcon en Jr. Grau 221",
    descripcion: "Departamento iluminado con vista a la avenida principal y estacionamiento incluido.",
    operacion: "Alquiler",
    tipo: "Departamento",
    ubicacion: "Jr. Grau 221, Oxapampa",
    precio: "$ 680 / mes",
    areaConstruida: 78,
    areaTotal: 78,
    dormitorios: 2,
    banos: 1,
    imagen:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    titulo: "Terreno para vivero en Av. La Esperanza 1102",
    descripcion: "Terreno en alquiler con acceso vehicular, ideal para vivero o almacen agricola.",
    operacion: "Alquiler",
    tipo: "Terreno",
    ubicacion: "Av. La Esperanza 1102, Oxapampa",
    precio: "$ 450 / mes",
    areaConstruida: 0,
    areaTotal: 1800,
    dormitorios: 0,
    banos: 0,
    imagen:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 10,
    titulo: "Casa moderna en Jr. Amazonas 490",
    descripcion: "Casa de dos pisos con terraza, ideal para familia grande en zona residencial.",
    operacion: "Alquiler",
    tipo: "Casa",
    ubicacion: "Jr. Amazonas 490, Oxapampa",
    precio: "$ 1,350 / mes",
    areaConstruida: 210,
    areaTotal: 430,
    dormitorios: 4,
    banos: 3,
    imagen:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 11,
    titulo: "Departamento ejecutivo en Calle Los Cedros 88",
    descripcion: "Espacio funcional para profesionales, cerca a bancos y zona comercial.",
    operacion: "Alquiler",
    tipo: "Departamento",
    ubicacion: "Calle Los Cedros 88, Oxapampa",
    precio: "$ 590 / mes",
    areaConstruida: 64,
    areaTotal: 64,
    dormitorios: 1,
    banos: 1,
    imagen:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 12,
    titulo: "Terreno amplio en Camino Yanachaga km 3",
    descripcion: "Lote cercado para uso mixto con excelente conectividad hacia Oxapampa centro.",
    operacion: "Alquiler",
    tipo: "Terreno",
    ubicacion: "Camino Yanachaga km 3, Oxapampa",
    precio: "$ 520 / mes",
    areaConstruida: 0,
    areaTotal: 2400,
    dormitorios: 0,
    banos: 0,
    imagen:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 13,
    titulo: "Proyecto residencial Alpen Park",
    descripcion: "Nuevo condominio de casas con areas comunes, seguridad y arquitectura de estilo europeo.",
    operacion: "Proyecto",
    tipo: "Casa",
    ubicacion: "Av. Oxapampa Norte 1500, Oxapampa",
    precio: "Desde $ 165,000",
    areaConstruida: 150,
    areaTotal: 300,
    dormitorios: 3,
    banos: 2,
    imagen:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 14,
    titulo: "Proyecto vertical Bosque Real",
    descripcion: "Edificio de departamentos con acabados premium y vista al valle de Oxapampa.",
    operacion: "Proyecto",
    tipo: "Departamento",
    ubicacion: "Jr. Progreso 410, Oxapampa",
    precio: "Desde $ 89,000",
    areaConstruida: 70,
    areaTotal: 70,
    dormitorios: 2,
    banos: 2,
    imagen:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 15,
    titulo: "Proyecto lotes Eco Valle",
    descripcion: "Lotes habilitados para vivienda campestre con vias internas y servicios proyectados.",
    operacion: "Proyecto",
    tipo: "Terreno",
    ubicacion: "Sector Tunqui, Oxapampa",
    precio: "Desde $ 55,000",
    areaConstruida: 0,
    areaTotal: 900,
    dormitorios: 0,
    banos: 0,
    imagen:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 16,
    titulo: "Proyecto de casas Senderos del Cafe",
    descripcion: "Casas de estreno con diseno sostenible y zonas verdes para familias jovenes.",
    operacion: "Proyecto",
    tipo: "Casa",
    ubicacion: "Jr. Federico Villarreal 260, Oxapampa",
    precio: "Desde $ 142,000",
    areaConstruida: 128,
    areaTotal: 260,
    dormitorios: 3,
    banos: 2,
    imagen:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 17,
    titulo: "Proyecto departamentos Alameda",
    descripcion: "Torre de departamentos de 1 a 3 dormitorios con rooftop y coworking.",
    operacion: "Proyecto",
    tipo: "Departamento",
    ubicacion: "Calle Los Pinos 144, Oxapampa",
    precio: "Desde $ 74,000",
    areaConstruida: 58,
    areaTotal: 58,
    dormitorios: 1,
    banos: 1,
    imagen:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 18,
    titulo: "Proyecto urbanizacion Pradera Verde",
    descripcion: "Terrenos urbanos listos para construir con acceso a vias y servicios basicos.",
    operacion: "Proyecto",
    tipo: "Terreno",
    ubicacion: "Av. Principal Pradera Verde 1, Oxapampa",
    precio: "Desde $ 48,000",
    areaConstruida: 0,
    areaTotal: 720,
    dormitorios: 0,
    banos: 0,
    imagen:
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1200&q=80",
  },
];

export const operaciones = ["Venta", "Alquiler", "Proyecto"] as const;

export const buildWaLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

