/*Sillas*/
import sillaImg from './assets/sillas/silla.jpg';
import sillaAudiImage from './assets/sillas/sillaud.jpg';
import silla1 from './assets/sillas/silla1.jpg';

/*Controles*/
import controladorXboxImg from './assets/mandos/controlador-xbox.jpg';
import mando1 from './assets/mandos/ps5.jpg';
import mando2 from './assets/mandos/mando2.jpg';
import mando3 from './assets/mandos/mando3.jpg';

/*Consolas*/
import ps5Img from './assets/consolas/ps5.jpg';
import switchImage from './assets/consolas/switch.jpg';
import xbox from './assets/consolas/xbox.jpg'

/*Audifonos*/
import audiImage from './assets/audifonos/audifonos.jpg';
import audifonos1 from './assets/audifonos/audifonos1.jpg';
import audifonos2 from './assets/audifonos/audifonos2.jpg';
import audifonos3 from './assets/audifonos/audifonos3.jpg';

/*Audifonos Bluetooth*/
import bluetoothHeadsetImage from './assets/audiblu/audib.jpg';
import audiblu2 from './assets/audiblu/audiblu2.jpg';

/*Mouse*/
import mouseImage from './assets/mouse/mouse.jpg';
import mouse1 from './assets/mouse/mouse1.jpg';
import mouse2 from './assets/mouse/mouse2.jpg';
import mouse3 from './assets/mouse/mouse3.jpg';

/*Teclado*/
import tecladoImage from './assets/teclado/teclado.jpg';

/*Monitor*/
import monitorImage from './assets/monitores/monitorImage.jpg';
import monitor1 from './assets/monitores/monitor1.jpg'
import monitor2 from './assets/monitores/monitor2.jpg'
import monitor3 from './assets/monitores/monitor3.jpg'
import monitor4 from './assets/monitores/monitor4.jpg'

/*PC*/
import pcGamerImage from './assets/pcs/pc.jpg';
import pc1 from './assets/pcs/pc1.jpg';
import pc2 from './assets/pcs/pc2.jpg';
import pc3 from './assets/pcs/pc3.jpg';

/*Componentes*/
import cajaPcImage from './assets/componentes/gabinete.jpg';
import refri1 from './assets/componentes/refri1.jpg';

/*Keycaps*/
import keycap1 from './assets/keycaps/clove keycaps.jpg';
import keycap2 from './assets/keycaps/iso keycaps.jpg';
import keycap3 from './assets/keycaps/jet keycaps.jpg';
import keycap4 from './assets/keycaps/killjoy keycaps.jpg';
import keycap5 from './assets/keycaps/raze keycaps.jpg';
import keycap6 from './assets/keycaps/reyna keycaps.jpg';
import keycap7 from './assets/keycaps/sage keycaps.jpg';
import keycap8 from './assets/keycaps/yoru keycaps.jpg'

/*Mousepad*/
import mousepad1 from './assets/mousepad/omen mousepad.jpg'
import mousepad2 from './assets/mousepad/phoenix mousepad.jpg'
import mousepad3 from './assets/mousepad/mousepad1.jpg'

/*Limpieza Pc*/
import limpieza1 from './assets/Limpieza Pc/Limpieza.jpg'

/*Microfonos*/
import micro1 from './assets/Microfonos/micro1.jpg'
import micro2 from './assets/Microfonos/micro2.jpg'
import micro3 from './assets/Microfonos/micro3.jpg'
import micro4 from './assets/Microfonos/micro4.jpg'

const products = [
  /*Silla*/
  {
    id: "SG001",
    name: "Silla Gamer Secretlab Titan",
    description: "Comodidad y ergonomía para largas sesiones de juego.",
    descriptionmodal: "",
    price: 349990,
    image: sillaImg,
    marca: "Secretlab",
    categoria: "Sillas Gamer"
  },
  {
    id: 'SG002',
    name: 'Silla Ergonómica Audi',
    description: 'Silla con soporte lumbar y materiales premium.',
    price: 259990,
    image: sillaAudiImage,
    marca: "Audi",
    categoria: "Sillas Gamer"
  },
  {
    id: 'SG003',
    name: 'Silla Gamer Cougar Hotrod, Diseño Ergonómico, Reposabrazos 3D, Hasta 135kg',
    description: 'Silla con soporte lumbar y materiales premium.',
    price: 399990,
    discount: 0.36,
    image: silla1,
    marca: "Cougar",
    categoria: "Sillas Gamer"
  },
  /*Controles*/
  {
    id: "CG001",
    name: "Control Xbox Series X",
    description: "Control inalámbrico preciso y cómodo para Xbox y PC.",
    price: 59990,
    image: controladorXboxImg,
    marca: "Microsoft",
    categoria: "Controles"
  },
  {
    id: "CG002",
    name: "Control Playstation 5",
    description: "Control inalámbrico preciso y cómodo para Playstation 5 y PC.",
    price: 84990,
    discount: 0.18,
    image: mando1,
    marca: "Sony",
    categoria: "Controles"
  },
  {
    id: "CG003",
    name: "Control Playstation 4",
    description: "Control inalámbrico preciso y cómodo para Playstation 4 y PC.",
    price: 59990,
    image: mando2,
    marca: "Sony",
    categoria: "Controles"
  },
  {
    id: "CG004",
    name: "Joycon L R Neon Red/Neon Blue Nintendo",
    description: "JoyCon",
    price: 109990,
    discount: 0.14,
    image: mando3,
    marca: "Nintendo",
    categoria: "Controles"
  },
  /*Consolas*/
  {
    id: "CO001",
    name: "PlayStation 5",
    description: "Consola de última generación para gaming inmersivo.",
    price: 549990,
    image: ps5Img,
    marca: "Sony",
    categoria: "Consolas"
  },
  {
    id: 'CO002',
    name: 'Consola Nintendo Switch',
    description: 'Consola híbrida para juego portátil y televisión.',
    price: 299990,
    image: switchImage,
    marca: "Nintendo",
    categoria: "Consolas"
  },
  {
    id: 'CO003',
    name: 'Xbox Series X',
    description: 'Consola de última generación para gaming inmersivo.',
    price: 539990,
    image: xbox,
    marca: "Xbox",
    categoria: "Consolas"
  },
  /*Audifonos*/
  {
    id: 'AU001',
    name: 'Auriculares Gamer Audi',
    description: 'Auriculares con sonido envolvente y micrófono.',
    price: 79990,
    image: audiImage,
    marca: "Audi",
    categoria: "Audio"
  },
  {
    id: 'AU002',
    name: 'Audifonos Gamer Inalámbrico HyperX Cloud Stinger Core, USB, Over-Ear, Blanco',
    description: 'Auriculares con sonido envolvente y micrófono.',
    price: 102660,
    discount: 0.16,
    image: audifonos1,
    marca: "HyperX",
    categoria: "Audio"
  },
  {
    id: 'AU003',
    name: 'Audífonos Gamer Logitech PRO X para juegos, con Micrófono, Blue Vo!ce',
    description: 'Auriculares con sonido envolvente y micrófono.',
    price: 201840,
    discount: 0.21,
    image: audifonos2,
    marca: "Logitech",
    categoria: "Audio"
  },
  {
    id: 'AU004',
    name: 'Audífonos Gamer Logitech G335, Conector 3,5mm, Plug and Play, Multiplataforma, Color Blanco ',
    description: 'Auriculares con sonido envolvente y micrófono.',
    price: 56600,
    discount: 0.19,
    image: audifonos3,
    marca: "Logitech",
    categoria: "Audio"
  },
  /*Mouse*/
  {
    id: 'MO001',
    name: 'Mouse Gamer RGB',
    description: 'Mouse con iluminación RGB y alta precisión.',
    price: 39990,
    image: mouseImage,
    marca: "Corsair",
    categoria: "Mouse Gamer"
  },
  {
    id: 'MO002',
    name: 'Mouse Gamer Logitech G203 RGB LIGHTSYNC, 6 botones programables, 8.000 DPI, Black',
    description: 'Mouse con iluminación RGB y alta precisión.',
    price: 25020,
    discount: 0.20,
    image: mouse1,
    marca: "Logitech",
    categoria: "Mouse Gamer"
  },
  {
    id: 'MO003',
    name: 'Mouse Gamer Primus Gaming Gladius 12400T Limited Edition, Diseño Dark Side',
    description: 'Mouse con iluminación RGB y alta precisión.',
    price: 39990,
    discount: 0.40,
    image: mouse2,
    marca: "Primus Gaming",
    categoria: "Mouse Gamer"
  },
  {
    id: 'MO004',
    name: 'Mouse Gamer Cooler Master MM711, 16000 DPI, PixArt PMW-3389, Diestro, 6 Botones, Color Blanco Mate',
    description: 'Mouse con iluminación RGB y alta precisión.',
    price: 55530,
    discount: 0.19,
    image: mouse3,
    marca: "Corsair",
    categoria: "Mouse Gamer"
  },
  /*Teclado*/
  {
    id: 'TE001',
    name: 'Teclado Mecánico',
    description: 'Teclado mecánico con retroiluminación customizable.',
    price: 99990,
    image: tecladoImage,
    marca: "Logitech",
    categoria: "Periféricos"
  },
  /*Monitor*/
  {
    id: 'MT001',
    name: 'Monitor Gamer 24',
    description: 'Monitor Full HD con 144Hz y bajo tiempo de respuesta.',
    price: 159990,
    image: monitorImage,
    marca: "ASUS",
    categoria: "Monitores"
  },
  {
    id: 'MT002',
    name: 'Monitor Gamer MSI MAG 275F, 27" FHD, 180Hz, Rapid IPS, 0.5ms, Adaptive Sync, HDMI/DisplayPort',
    description: 'Monitor',
    price: 249990,
    image: monitor1,
    marca: "MSI",
    categoria: "Monitores"
  },
  {
    id: 'MT003',
    name: 'Monitor gamer ASUS TUF Gaming VG27AQ5A, 27" QHD, 210Hz, Fast IPS, 0.3 ms, FreeSync Premium',
    description: 'Monitor',
    price: 399990,
    image: monitor2,
    marca: "ASUS",
    categoria: "Monitores"
  },
  {
    id: 'MT004',
    name: 'Monitor Gamer Curvo Asus ROG Strix XG27WCMS 27" QHD VA, 280hz, 1ms, HDR10, AMD FreeSync',
    description: 'Monitor',
    price: 599990,
    image: monitor3,
    marca: "ASUS",
    categoria: "Monitores"
  },
  {
    id: 'MT005',
    name: 'Monitor Gamer Curvo Samsung Odyssey G5 G55C 27" QHD VA, 165Hz, HDR10, AMD FreeSync',
    description: 'Monitor',
    price: 299990,
    discount: 0.37,
    image: monitor4,
    marca: "Samsung",
    categoria: "Monitores"
  },
  /*PC*/
  {
    id: 'PC001',
    name: 'PC Gamer Completa',
    description: 'PC con procesador Intel i7, 16GB RAM y tarjeta RTX 3060.',
    price: 1249990,
    image: pcGamerImage,
    marca: "HP",
    categoria: "Computadoras"
  },
  {
    id: 'PC002',
    name: 'PC Gamer SP Labs Nomad, Ryzen 7 7700X, RX 9070XT, RAM 32GB (2x16GB) DDR5, SSD 1TB NVMe, FreeDOS',
    description: 'PC',
    price: 2499990,
    image: pc1,
    marca: "SP Labs",
    categoria: "Computadoras"
  },
  {
    id: 'PC003',
    name: 'PC Gamer ARGB 1, Ryzen 3 5300G, 16GB RGB, 512GB NVMe, WiFi, ARGB, FreeDOS (Sin SO)',
    description: 'PC',
    price: 540670,
    discount: 0.14,
    image: pc2,
    marca: "Armados",
    categoria: "Computadoras"
  },
  {
    id: 'PC004',
    name: 'PC Gamer ARGH 4, Ryzen 5 5500, RTX 3060, 16GB RGB, 512GB NVMe, Watercooling, Wi-Fi, Freedos',
    description: 'PC',
    price: 1167980,
    discount: 0.14,
    image: pc3,
    marca: "Armados",
    categoria: "Computadoras"
  },
  /*Componentes*/
  {
    id: 'CP001',
    name: 'Gabinete de PC Gamer RGB',
    description: 'Gabinete con panel de vidrio templado y ventilación eficiente.',
    price: 69990,
    image: cajaPcImage,
    marca: "Cooler Master",
    categoria: "Componentes"
  },
  {
    id: 'CP002',
    name: 'Refrigeración Líquida MSI MAG CORELIQUID A13 360, 360mm, ARGB, Intel LGA 1700/1851, AMD AM4/AM5',
    description: 'Refrigeración Líquida.',
    price: 104490,
    image: refri1,
    marca: "MSI",
    categoria: "Componentes"
  },
  /*Audifonos Bluetooth*/
  {
    id: 'AB001',
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    price: 54990,
    image: bluetoothHeadsetImage,
    marca: "Sony",
    categoria: "Audio"
  },
  {
    id: 'AB002',
    name: 'Audífonos Inalámbricos Bluetooth Fiddler Mini Pod Touch, Color Morado',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    price: 14990,
    discount: 0.46,
    image: audiblu2,
    marca: "Fiddler",
    categoria: "Audio"
  },
  /*Keycaps*/
  {
    id: 'KC001',
    name: 'Clove Keycaps',
    description: 'Keycaps de Valorant',
    price: 3990,
    image: keycap1,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant"
  },
  {
    id: 'KC002',
    name: 'Reyna Keycaps',
    description: 'Keycaps de Valorant',
    price: 3990,
    image: keycap6,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant"
  },
  {
    id: 'KC003',
    name: 'Iso Keycaps',
    description: 'Keycaps de Valorant',
    price: 3990,
    image: keycap2,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant"
  },
  {
    id: 'KC004',
    name: 'Jett Keycaps',
    description: 'Keycaps de Valorant',
    price: 3990,
    image: keycap3,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant"
  },
  {
    id: 'KC005',
    name: 'Killjoy Keycaps',
    description: 'Keycaps de Valorant',
    price: 3990,
    image: keycap4,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant"
  },
  {
    id: 'KC006',
    name: 'Raze Keycaps',
    description: 'Keycaps de Valorant',
    price: 3990,
    image: keycap5,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant"
  },
  {
    id: 'KC007',
    name: 'Sage Keycaps',
    description: 'Keycaps de Valorant',
    price: 3990,
    image: keycap7,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant"
  },
  {
    id: 'KC008',
    name: 'Yoru Keycaps',
    description: 'Keycaps de Valorant',
    price: 3990,
    image: keycap8,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant"
  },
  /*Mousepad*/
  {
    id: 'MP001',
    name: 'Omen Mousepad',
    description: 'Mousepad de Valorant',
    price: 14990,
    image: mousepad1,
    marca: "MousepadLab",
    categoria: "Mousepad",
    juego: "Valorant"
  },
  {
    id: 'MP002',
    name: 'Phoenix Mousepad',
    description: 'Mousepad de Valorant',
    price: 14990,
    image: mousepad2,
    marca: "MousepadLab",
    categoria: "Mousepad",
    juego: "Valorant"
  },
  {
    id: 'MP003',
    name: 'Mouse Pad Gamer SteelSeries QCK EDGE XL, 90x30cm',
    description: 'Mousepad',
    price: 34990,
    discount: 0.50,
    image: mousepad3,
    marca: "SteelSeries",
    categoria: "Mousepad"
  },
  /*Limpieza PC*/
  {
    id: 'LP001',
    name: 'Set de Limpieza Pantalla Philco 3 en 1',
    description: 'Set limpieza',
    price: 6400,
    discount: 0.35,
    image: limpieza1,
    marca: "Philco",
    categoria: "Limpieza Pc"
  },
  /*Microfonos*/
  {
    id: 'MF001',
    name: 'Micrófono para Streaming Redragon Fenris GM301, RGB, Montura Anti Vibración, Conexión por USB',
    description: 'Microfono Redragon',
    price: 59990,
    discount: 0.23,
    image: micro1,
    marca: "Redragon",
    categoria: "Microfonos"
  },
  {
    id: 'MF002',
    name: 'Micrófono para Streaming HyperX QuadCast S RGB, Montura Antivibraciones, Tres Condensadores',
    description: 'Microfono HyperX',
    price: 199990,
    image: micro2,
    marca: "HyperX",
    categoria: "Microfonos"
  },
  {
    id: 'MF003',
    name: 'Micrófono para Streaming Fifine K669B, Streaming, PC, Mac, PS4, Condensador',
    description: 'Microfono Fifine',
    price: 44200,
    discount: 0.34,
    image: micro3,
    marca: "Fifine",
    categoria: "Microfonos"
  },
  {
    id: 'MF004',
    name: 'Micrófono Gamer Logitech G Yeti GX, RGB dinámico para gaming con LIGHTSYNC, Blue VO!CE',
    description: 'Microfono Logitech',
    price: 199990,
    discount: 0.30,
    image: micro4,
    marca: "Logitech",
    categoria: "Microfonos"
  }
];

export default products;