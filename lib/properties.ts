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
  dormitorios?: number;
  banos?: number;
  imagen: string;
  galeria?: string[];
  fichaTecnica?: Array<{
    label: string;
    value: string;
  }>;
  distribucion?: Array<{
    titulo: string;
    items: string[];
  }>;
  caracteristicasGenerales?: string[];
};

export const whatsappNumber = "51998855069";

export const propiedades: Propiedad[] = [
  {
    id: 1,
    titulo: "Casa amplia en Sector La Esperanza",
    descripcion:
      "Propiedad amplia, bien iluminada y en muy buen estado de conservacion, ubicada frente al campus universitario y a solo 7 minutos del centro de Oxapampa.",
    operacion: "Venta",
    tipo: "Casa",
    ubicacion: "Sector La Esperanza, a 7 minutos del centro de Oxapampa",
    precio: "USD 290,000",
    areaConstruida: 505,
    areaTotal: 1268,
    dormitorios: 3,
    banos: 4,
    imagen: "/c1/1.jpg",
    galeria: ["/c1/1.jpg", "/c1/2.jpg", "/c1/3.jpg", "/c1/4.png", "/c1/5.jpg", "/c1/6.png"],
    fichaTecnica: [
      { label: "Area de terreno", value: "1,268 m2" },
      { label: "Area construida total", value: "505 m2" },
      { label: "Primer piso", value: "355 m2" },
      { label: "Segundo piso", value: "150 m2" },
      { label: "Servicios", value: "Luz (Electrocentro), agua Jass Miraflores y desague" },
      { label: "Documentos", value: "Partida electronica en RRPP, lista para transferir" },
    ],
    distribucion: [
      {
        titulo: "Primer piso",
        items: [
          "Sala-comedor",
          "Estar",
          "Hall de distribucion",
          "Amplia cocina amoblada con alacena",
          "2 dormitorios con closet, salida independiente a los jardines y bano incorporado con terma",
          "Bano de visita",
          "Escritorio",
          "Lavanderia",
          "Deposito",
          "Cuarto de huesped con bano incorporado",
          "Terraza posterior con arcos",
          "Amplio jardin en el frontis y en la parte posterior",
          "Escalera externa al segundo piso",
        ],
      },
      {
        titulo: "Segundo piso",
        items: [
          "Area techada con paredes externas de machimbrado",
          "Balcones al frente y posterior con madera",
          "Ventanas y mamparas instaladas",
          "Conexiones listas para bano y cocina",
          "Piso de cemento",
        ],
      },
    ],
    caracteristicasGenerales: [
      "La propiedad cuenta con partida registral y declaratoria de fabrica.",
      "La casa es amplia, bien iluminada y se encuentra en muy buen estado de conservacion.",
      "La ubicacion frente al campus universitario de agricultura aporta tranquilidad y seguridad, y evita futuras edificaciones que alteren el entorno inmediato.",
    ],
  },
  {
    id: 2,
    titulo: "Casa de campo en Grapanazu, Huancabamba",
    descripcion:
      "Propiedad en zona tranquila con vistas abiertas al paisaje, casa principal de dos niveles y area productiva con cafe, paltas y otros frutales.",
    operacion: "Venta",
    tipo: "Casa",
    ubicacion: "Grapanazu, Huancabamba, a 13.5 km del centro de Oxapampa",
    precio: "USD 500,000",
    areaConstruida: 196,
    areaTotal: 11611,
    dormitorios: 2,
    banos: 3,
    imagen: "/c2/1.jpg",
    galeria: [
      "/c2/1.jpg",
      "/c2/2.jpg",
      "/c2/3.jpg",
      "/c2/4.jpg",
      "/c2/5.jpg",
      "/c2/6.jpg",
      "/c2/7.jpg",
      "/c2/8.jpg",
      "/c2/9.jpg",
    ],
    fichaTecnica: [
      { label: "Area de terreno", value: "11,611,000 m2" },
      { label: "Area construida de la casa", value: "196 m2" },
      { label: "Servicios", value: "Luz (Electrocentro) y agua" },
      { label: "Documentos", value: "Partida electronica en RRPP, lista para transferir" },
      { label: "Ubicacion", value: "Grapanazu, Huancabamba, a 13.5 km del centro de Oxapampa" },
    ],
    distribucion: [
      {
        titulo: "Primer piso",
        items: [
          "Sala",
          "Comedor con doble altura",
          "Cocina",
          "2 habitaciones",
          "2 banos completos",
          "2 terrazas techadas",
          "Lavanderia",
          "Deposito",
          "Bano de servicio",
        ],
      },
      {
        titulo: "Segundo piso",
        items: [
          "Sala grande multiusos para escritorio, sala de TV o lectura",
          "Balcon con vista abierta al paisaje",
        ],
      },
      {
        titulo: "Adicional",
        items: ["Casa independiente para guardian"],
      },
    ],
    caracteristicasGenerales: [
      "La propiedad cuenta con partida registral.",
      "Esta ubicada en una zona tranquila y con vistas muy bonitas al paisaje.",
      "Cuenta con aproximadamente 2,500 m2 con siembra de cafe, paltas y otros frutales.",
    ],
  },
  {
    id: 3,
    titulo: "Casa de madera en villa cerrada de Quillazu",
    descripcion:
      "Casa de madera Chontaquiro construida sobre pilotes de concreto, ubicada dentro de una villa cerrada con acceso al rio y a 12 minutos del centro de Oxapampa.",
    operacion: "Venta",
    tipo: "Casa",
    ubicacion: "Quillazu, a 12 minutos del centro de Oxapampa",
    precio: "USD 195,000",
    areaConstruida: 127,
    areaTotal: 3123,
    dormitorios: 1,
    banos: 2,
    imagen: "/c3/1.jpg",
    galeria: [
      "/c3/1.jpg",
      "/c3/2.jpg",
      "/c3/3.jpg",
      "/c3/4.jpg",
      "/c3/5.jpg",
      "/c3/6.jpg",
      "/c3/7.jpg",
      "/c3/8.jpg",
      "/c3/9.jpg",
    ],
    fichaTecnica: [
      { label: "Area de terreno", value: "3,123 m2" },
      { label: "Area construida", value: "127 m2" },
      { label: "Ano de construccion", value: "2017" },
      { label: "Servicios", value: "Luz (Electrocentro), agua, biodigestor e internet" },
      { label: "Documentos", value: "Partida electronica en RRPP" },
    ],
    distribucion: [
      {
        titulo: "Distribucion",
        items: [
          "1 habitacion",
          "2 banos completos",
          "1 terraza",
          "1 sala principal",
          "Sala de estar",
          "Lavanderia",
        ],
      },
    ],
    caracteristicasGenerales: [
      "La casa esta construida sobre pilotes de concreto.",
      "La estructura principal es de madera Chontaquiro.",
      "La casa se encuentra dentro de una villa cerrada con acceso al rio.",
    ],
  },
  {
    id: 4,
    titulo: "Fundo El Arkero en Dos de Mayo",
    descripcion:
      "Fundo con frente amplio sobre la trocha principal, zonas semiplanas, vista privilegiada al paisaje y una casa que puede habilitarse rapidamente.",
    operacion: "Venta",
    tipo: "Terreno",
    ubicacion: "Dos de Mayo, Chontabamba, a 5 km del centro de Oxapampa",
    precio: "USD 250,000",
    areaConstruida: 0,
    areaTotal: 51800,
    imagen: "/c4/1.jpg",
    galeria: ["/c4/1.jpg", "/c4/2.jpg", "/c4/3.jpg", "/c4/4.jpg"],
    fichaTecnica: [
      { label: "Area del terreno", value: "5.18 hectareas" },
      { label: "Precio total", value: "USD 250,000" },
      { label: "Servicios", value: "Luz (los cables pasan frente al ingreso) y agua de manantial" },
      { label: "Documentos", value: "Constancia de posesion, para hacer transferencia e ingresar a RRPP" },
      { label: "Distancia", value: "5 km del centro de Oxapampa, aproximadamente 10 minutos" },
    ],
    caracteristicasGenerales: [
      "La propiedad cuenta con una casa que se puede habilitar rapidamente.",
      "Es un terreno semiplano en aproximadamente 2.5 hectareas y tiene una pequena plantacion de pinos.",
      "Hay una casa precaria donde vive un guardian de manera permanente.",
      "La propiedad se encuentra en la misma trocha principal y tiene un frente aproximado de 200 m.",
      "Cuenta con una vista privilegiada a todo el paisaje.",
      "El terreno pertenece a tres propietarios de Lima.",
      "En la zona hay conexion de telefono.",
    ],
  },
  {
    id: 5,
    titulo: "Terreno en Nueva Berna",
    descripcion:
      "Terreno saneado en zona urbanizada de Nueva Berna, rodeado de casas terminadas, bonitos disenos y paisajes, con la pista llegando al pie del lote.",
    operacion: "Venta",
    tipo: "Terreno",
    ubicacion: "Nueva Berna, Chontabamba, a 5 minutos del centro de Oxapampa",
    precio: "S/. 190,000",
    areaConstruida: 0,
    areaTotal: 349,
    imagen: "/c5/1.jpg",
    galeria: ["/c5/1.jpg", "/c5/2.jpg", "/c5/3.jpg"],
    fichaTecnica: [
      { label: "Area de terreno", value: "349 m2" },
      { label: "Precio", value: "S/. 190,000" },
      { label: "Servicios", value: "Agua y luz" },
      { label: "Documentos", value: "Partida electronica en RRPP" },
      { label: "Ubicacion", value: "Nueva Berna, Chontabamba, a 5 minutos del centro de Oxapampa" },
    ],
    caracteristicasGenerales: [
      "Terreno saneado, con documentos debidamente registrados en Registros Publicos.",
      "Ubicado en una zona urbanizada con casas terminadas y bonitos disenos.",
      "Cuenta con paisajes agradables y buena proyeccion residencial.",
      "La pista llega al pie del terreno.",
    ],
  },
  {
    id: 6,
    titulo: "Aserradero en San Alberto",
    descripcion:
      "Propiedad ubicada en la pista de entrada a San Alberto, con excelente cercania al centro de Oxapampa y a solo 80 m de la pista principal.",
    operacion: "Venta",
    tipo: "Terreno",
    ubicacion: "San Alberto, a 4 minutos del centro de Oxapampa",
    precio: "USD 250,000",
    areaConstruida: 0,
    areaTotal: 1402,
    imagen: "/c6/1.jpg",
    galeria: ["/c6/1.jpg", "/c6/2.jpg", "/c6/3.jpg"],
    fichaTecnica: [
      { label: "Area de terreno", value: "1,402 m2" },
      { label: "Precio", value: "USD 250,000" },
      { label: "Medidas referenciales", value: "Aproximadamente 41 m de frente por 36 m de fondo" },
      { label: "Servicios", value: "Luz, agua y conexion telefonica" },
      { label: "Documentos", value: "Partida electronica en RRPP" },
      { label: "Ubicacion", value: "A 4 minutos del centro y 80 m de la pista principal" },
    ],
    caracteristicasGenerales: [
      "La propiedad se encuentra en la pista de entrada a San Alberto.",
      "Tiene una ubicacion estrategica, a 4 minutos del centro de Oxapampa.",
      "Se encuentra muy cerca de la pista principal, a solo 80 m.",
    ],
  },
  {
    id: 7,
    titulo: "Terreno Los Juego",
    descripcion:
      "Propiedad con ubicacion privilegiada, en esquina y frente al campo principal, dentro de una de las calles mas importantes de Oxapampa.",
    operacion: "Venta",
    tipo: "Terreno",
    ubicacion: "A 5 cuadras del centro de Oxapampa",
    precio: "USD 500,000",
    areaConstruida: 0,
    areaTotal: 1097,
    imagen: "/c7/1.jpg",
    galeria: ["/c7/1.jpg", "/c7/2.jpg"],
    fichaTecnica: [
      { label: "Area de terreno", value: "1,097 m2" },
      { label: "Medidas referenciales", value: "28.5 m de frente por 38.6 m de fondo" },
      { label: "Precio", value: "USD 500,000" },
      { label: "Servicios", value: "Luz, agua, desague y conexion" },
      { label: "Documentos", value: "Titulo de propiedad y partida electronica en proceso en RRPP" },
      { label: "Ubicacion", value: "A 5 cuadras del centro de Oxapampa" },
    ],
    caracteristicasGenerales: [
      "Ubicacion privilegiada en esquina y frente al campo principal.",
      "Zona comercial en una de las principales calles.",
      "Cuenta con lindas vistas y alta exposicion.",
    ],
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
