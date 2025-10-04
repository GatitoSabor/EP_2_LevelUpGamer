/*Sillas*/
import sillaImg from '../assets/sillas/silla.jpg';
import sillaAudiImage from '../assets/sillas/sillaud.jpg';
import silla1 from '../assets/sillas/silla1.jpg';

/*Controles*/
import controladorXboxImg from '../assets/mandos/controlador-xbox.jpg';
import mando1 from '../assets/mandos/ps5.jpg';
import mando2 from '../assets/mandos/mando2.jpg';
import mando3 from '../assets/mandos/mando3.jpg';

/*Consolas*/
import ps5Img from '../assets/consolas/ps5.jpg';
import switchImage from '../assets/consolas/switch.jpg';
import xbox from '../assets/consolas/xbox.jpg'

/*Audifonos*/
import audiImage from '../assets/audifonos/audifonos.jpg';
import audifonos1 from '../assets/audifonos/audifonos1.jpg';
import audifonos2 from '../assets/audifonos/audifonos2.jpg';
import audifonos3 from '../assets/audifonos/audifonos3.jpg';

/*Audifonos Bluetooth*/
import bluetoothHeadsetImage from '../assets/audiblu/audib.jpg';
import audiblu2 from '../assets/audiblu/audiblu2.jpg';
import audiblu3 from '../assets/audiblu/audiblu3.jpg';
import audiblu4 from '../assets/audiblu/audiblu4.jpg';

/*Mouse*/
import mouseImage from '../assets/mouse/mouse.jpg';
import mouse1 from '../assets/mouse/mouse1.jpg';
import mouse2 from '../assets/mouse/mouse2.jpg';
import mouse3 from '../assets/mouse/mouse3.jpg';

/*Teclado*/
import tecladoImage from '../assets/teclado/teclado.jpg';
import teclado1 from '../assets/teclado/teclado1.jpg';
import teclado2 from '../assets/teclado/teclado2.jpg';
import teclado3 from '../assets/teclado/teclado3.jpg';
import teclado4 from '../assets/teclado/teclado4.jpg';
import teclado5 from '../assets/teclado/teclado5.jpg';

/*Monitor*/
import monitorImage from '../assets/monitores/monitorImage.jpg';
import monitor1 from '../assets/monitores/monitor1.jpg'
import monitor2 from '../assets/monitores/monitor2.jpg'
import monitor3 from '../assets/monitores/monitor3.jpg'
import monitor4 from '../assets/monitores/monitor4.jpg'

/*PC*/
import pcGamerImage from '../assets/pcs/pc.jpg';
import pc1 from '../assets/pcs/pc1.jpg';
import pc2 from '../assets/pcs/pc2.jpg';
import pc3 from '../assets/pcs/pc3.jpg';

/*Componentes*/
import cajaPcImage from '../assets/componentes/gabinete.jpg';
import refri1 from '../assets/componentes/refri1.jpg';

/*Keycaps*/
import keycap1 from '../assets/keycaps/clove keycaps.jpg';
import keycap2 from '../assets/keycaps/iso keycaps.jpg';
import keycap3 from '../assets/keycaps/jet keycaps.jpg';
import keycap4 from '../assets/keycaps/killjoy keycaps.jpg';
import keycap5 from '../assets/keycaps/raze keycaps.jpg';
import keycap6 from '../assets/keycaps/reyna keycaps.jpg';
import keycap7 from '../assets/keycaps/sage keycaps.jpg';
import keycap8 from '../assets/keycaps/yoru keycaps.jpg'

/*Mousepad*/
import mousepad1 from '../assets/mousepad/omen mousepad.jpg'
import mousepad2 from '../assets/mousepad/phoenix mousepad.jpg'
import mousepad3 from '../assets/mousepad/mousepad1.jpg'
import mousepad4 from '../assets/mousepad/mousepad4.jpg'
import mousepad5 from '../assets/mousepad/mousepad5.jpg'
import mousepad6 from '../assets/mousepad/mousepad6.jpg'

/*Limpieza Pc*/
import limpieza1 from '../assets/Limpieza Pc/Limpieza.jpg'

/*Microfonos*/
import micro1 from '../assets/Microfonos/micro1.jpg'
import micro2 from '../assets/Microfonos/micro2.jpg'
import micro3 from '../assets/Microfonos/micro3.jpg'
import micro4 from '../assets/Microfonos/micro4.jpg'

/*Figuras*/
import fig1 from '../assets/figuras/fig1.jpg'
import fig2 from '../assets/figuras/fig2.jpg'
import fig3 from '../assets/figuras/fig3.jpg'
import fig4 from '../assets/figuras/fig4.jpg'
import fig5 from '../assets/figuras/fig5.jpg'
import fig6 from '../assets/figuras/fig6.jpg'
import fig7 from '../assets/figuras/fig7.jpg'
import fig8 from '../assets/figuras/fig8.jpg'
import fig9 from '../assets/figuras/fig9.jpg'
import fig10 from '../assets/figuras/fig10.jpg'
import fig11 from '../assets/figuras/fig11.jpg'

const products = [
  /*Silla*/
  {
    /*https://secretlab.eu/es/products/titan-evo-2022-series?srsltid=AfmBOooANqEU7oVDy3gC3ytQikfkA72An2k7bp5l2clIFDy6mBpbztWk*/ 
    id: "SG001",
    name: "Silla Gamer Secretlab Titan",
    description: "Comodidad y ergonomía para largas sesiones de juego.",
    descriptionmodal: "",
    envioGratis: true,
    price: 349990,
    image: sillaImg,
    marca: "Secretlab",
    categoria: "Sillas Gamer"
  },
  {
    id: 'SG002',
    name: 'Silla Ergonómica Audi',
    description: 'Silla con soporte lumbar y materiales premium.',
    envioGratis: false,
    price: 259990,
    image: sillaAudiImage,
    marca: "Audi",
    categoria: "Sillas Gamer"
  },
  {
    /*https://www.spdigital.cl/silla-gamer-cougar-hotrod/?srsltid=AfmBOooBvR_A9zbG-b4VJQw8Mupzzf54D7maYd3ojciUFhef7ejqJojf*/
    id: 'SG003',
    name: 'Silla Gamer Cougar Hotrod, Diseño Ergonómico, Reposabrazos 3D, Hasta 135kg',
    description: 'Silla con soporte lumbar y materiales premium.',
    descriptionmodal: "",
    envioGratis: true,
    price: 399990,
    discount: 0.36,
    image: silla1,
    marca: "Cougar",
    categoria: "Sillas Gamer"
  },
  /*Controles*/
  {
    /*https://www.spdigital.cl/control-inal%C3%A1mbrico-microsoft-xbox-series-cable-usb-c-negro/?srsltid=AfmBOor8XJLgxCwaeec--yk3eYe_J-FtNvZOK5_8wdJf4me03X3EC9-v*/
    id: "CG001",
    name: "Control Xbox Series X",
    description: "Control inalámbrico preciso y cómodo para Xbox y PC.",
    envioGratis: true,
    price: 59990,
    image: controladorXboxImg,
    marca: "Microsoft",
    categoria: "Controles"
  },
  {
    /*https://www.spdigital.cl/ps5-dualsense-latam/?srsltid=AfmBOoqhoJqDHATkYlP2pweht1_KabGAwYUxQGpHrcYuv0mzv6BW86h1*/
    id: "CG002",
    name: "Control Playstation 5",
    description: "Control inalámbrico preciso y cómodo para Playstation 5 y PC.",
    envioGratis: true,
    price: 84990,
    discount: 0.18,
    image: mando1,
    marca: "Sony",
    categoria: "Controles"
  },
  {
    /*https://www.spdigital.cl/control-inal%C3%A1mbrico-ps4-monster-games-wireless-d21edr-negro/*/
    id: "CG003",
    name: "Control Playstation 4",
    description: "Control inalámbrico preciso y cómodo para Playstation 4 y PC.",
    envioGratis: false,
    price: 59990,
    image: mando2,
    marca: "Sony",
    categoria: "Controles"
  },
  {
    /*https://www.falabella.com/falabella-cl/product/5621240/Joycon-L-R-Neon-Red-Neon-Blue-Nintendo/5621240*/
    id: "CG004",
    name: "Joycon L R Neon Red/Neon Blue Nintendo",
    description: "JoyCon",
    envioGratis: false,
    price: 109990,
    discount: 0.14,
    image: mando3,
    marca: "Nintendo",
    categoria: "Controles"
  },
  /*Consolas*/
  {
    /*https://www.falabella.com/falabella-cl/product/126614735/Consola-Sony-PS5-PlayStation-5-Slim-(Edicion-Disco)/126614736*/
    id: "CO001",
    name: "PlayStation 5",
    description: "Consola de última generación para gaming inmersivo.",
    envioGratis: false,
    price: 549990,
    image: ps5Img,
    marca: "Sony",
    categoria: "Consolas"
  },
  {
    /*https://www.falabella.com/falabella-cl/product/123426427/Consola-Nintendo-Switch-Modelo-OLED-Neon/123426431*/
    id: 'CO002',
    name: 'Consola Nintendo Switch',
    description: 'Consola híbrida para juego portátil y televisión.',
    envioGratis: true,
    price: 299990,
    image: switchImage,
    marca: "Nintendo",
    categoria: "Consolas"
  },
  {
    /*https://www.paris.cl/consola-xbox-series-x-1tb-ssd-edicion-digital-blanco-certificado-reacondicionado-MKWXXAHXXQ.html*/
    id: 'CO003',
    name: 'Xbox Series X',
    description: 'Consola de última generación para gaming inmersivo.',
    envioGratis: true,
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
    envioGratis: false,
    price: 79990,
    image: audiImage,
    marca: "Audi",
    categoria: "Audio"
  },
  {
    /*https://www.spdigital.cl/headset-cloud-stinger-core-wl/?srsltid=AfmBOoqW24llDd8JcFIDhVxrpQ4ScfrLQem4oof6CC7klwiEUcHNo1DO*/
    id: 'AU002',
    name: 'Audifonos Gamer Inalámbrico HyperX Cloud Stinger Core, USB, Over-Ear, Blanco',
    description: 'Auriculares con sonido envolvente y micrófono.',
    envioGratis: true,
    price: 102660,
    discount: 0.16,
    image: audifonos1,
    marca: "HyperX",
    categoria: "Audio"
  },
  {
    /*https://www.spdigital.cl/aud%C3%ADfonos-con-micr%C3%B3fono-logitech-pro-x-para-juegos-blue-voce/?srsltid=AfmBOopQdC_C2uYGtEQqW0u0-Q5NuG4_fIjXnadh7GVUwdeGYV8bPJ0F*/
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
    /*https://www.spdigital.cl/aud%C3%ADfonos-gamer-logitech-g335-conector-35mm-plug-and-play-multiplataforma-color-blanco/?srsltid=AfmBOorEYiohVxPZP7VAs4xA3oKydzFyXUdIUm5erRi6k-ZCVcfHYfBl*/
    id: 'AU004',
    name: 'Audífonos Gamer Logitech G335, Conector 3,5mm, Plug and Play, Multiplataforma, Color Blanco ',
    description: 'Auriculares con sonido envolvente y micrófono.',
    envioGratis: true,
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
    /*https://www.spdigital.cl/mouse-gamer-logitech-g203-rgb-lightsync-6-botones-programables-8000-dpi-black/?srsltid=AfmBOoqzkLBqOlPmbrmqxZmezPVP32bfJftvUavArGhIOlN0sXwRZC0N*/
    id: 'MO002',
    name: 'Mouse Gamer Logitech G203 RGB LIGHTSYNC, 6 botones programables, 8.000 DPI, Black',
    description: 'Mouse con iluminación RGB y alta precisión.',
    envioGratis: true,
    price: 25020,
    discount: 0.20,
    image: mouse1,
    marca: "Logitech",
    categoria: "Mouse Gamer"
  },
  {
    /*https://www.spdigital.cl/mouse-gamer-primus-gaming-gladius-12400t-limited-edition-diseno-dark-side/?srsltid=AfmBOooN-yNOKX0jUfqsv86hk-Ks0BHeeOcC6c_7wovYXya6AXZqEVOf*/
    id: 'MO003',
    name: 'Mouse Gamer Primus Gaming Gladius 12400T Limited Edition, Diseño Dark Side',
    description: 'Mouse con iluminación RGB y alta precisión.',
    envioGratis: true,
    price: 39990,
    discount: 0.40,
    image: mouse2,
    marca: "Primus Gaming",
    categoria: "Mouse Gamer",
    juego: "Star Wars"
  },
  {
    /*https://www.spdigital.cl/mouse-gamer-cooler-master-mm711-6-botones-16000-dpi-white-matte/?srsltid=AfmBOorrt8yoypVWBPEPyTbVwq5byhSPFLOugnaOTgFhAPtWVs8FKF4o*/
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
    envioGratis: true,
    price: 99990,
    image: tecladoImage,
    marca: "Logitech",
    categoria: "Teclados"
  },
  {
    /*https://www.spdigital.cl/hyperx-keyboard-abs-hx-red-merco/*/
    id: 'TE002',
    name: 'Teclado Gamer Hyper X Alloy Origins, Mecánico, Español, Switch Red, RGB, Full Size, Color Negro',
    description: 'Teclado mecánico con retroiluminación customizable.',
    envioGratis: true,
    price: 161960,
    image: teclado1,
    marca: "HyperX",
    categoria: "Teclados"
  },
  {
    /*https://www.spdigital.cl/teclado-mec%C3%A1nico-gamer-redragon-kumara-k552-switch-outemu-retroiluminaci%C3%B3n-red-led/*/
    id: 'TE003',
    name: 'Teclado Gamer Redragon Kumara K552 TKL, Mecánico, Switch Outemu Red, Rainbow, Color Negro',
    description: 'Teclado mecánico con retroiluminación customizable.',
    price: 50990,
    discount: 0.49,
    image: teclado2,
    marca: "Redragon",
    categoria: "Teclados"
  },
  {
    /*https://www.spdigital.cl/hyperx-alloy-core-rgb-gaming-keyboard-la/*/
    id: 'TE004',
    name: 'Teclado Gamer HyperX Alloy Core, Membrana, Español, RGB, Full Size, Color Negro',
    description: 'Teclado mecánico con retroiluminación customizable.',
    envioGratis: true,
    price: 78360,
    image: teclado3,
    marca: "HyperX",
    categoria: "Teclados"
  },
  {
    /*https://www.spdigital.cl/k552w-kr-sp-teclado-kumara-rainbow-white-switch-rojo-sp/*/
    id: 'TE005',
    name: 'Teclado Gamer Redragon Kumara K552 TKL, Mecánico, Español, Switch Red, Rainbow, Color Blanco',
    description: 'Teclado mecánico con retroiluminación customizable.',
    price: 49999,
    discount: 0.42,
    image: teclado4,
    marca: "Redragon",
    categoria: "Teclados"
  },
  {
    /*https://www.spdigital.cl/teclado-gamer-logitech-g-pro-rgb-mec%C3%A1nico-switch-gx-blue-al%C3%A1mbrico-negro/*/
    id: 'TE006',
    name: 'Teclado Gamer Logitech G Pro, Mecánico, Ingles, Switch GX Blue, RGB, Full Size, Color Negro',
    description: 'Teclado mecánico con retroiluminación customizable.',
    envioGratis: true,
    price: 142680,
    discount: 0.19,
    image: teclado5,
    marca: "Logitech",
    categoria: "Teclados"
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
    /*https://www.spdigital.cl/monitor-gamer-msi-mag-275f-27-fhd-180hz-rapid-ips-05ms-adaptive-sync-hdmidisplayport/?srsltid=AfmBOopqov1ng0mkYgOhs_WJz050sEZf3_THwKZowivr1RUICmHyQvFr*/
    id: 'MT002',
    name: 'Monitor Gamer MSI MAG 275F, 27" FHD, 180Hz, Rapid IPS, 0.5ms, Adaptive Sync, HDMI/DisplayPort',
    description: 'Monitor',
    price: 249990,
    image: monitor1,
    marca: "MSI",
    categoria: "Monitores"
  },
  {
    /*https://www.spdigital.cl/monitor-gamer-asus-tuf-gaming-vg27aq5a-27-qhd-210hz-fast-ips-03-ms-color-negro/?srsltid=AfmBOopNoDz_FPv0Em4WtqRGIV9hMl4pwpjVCi99813GKb6fyqwpUkcS*/
    id: 'MT003',
    name: 'Monitor gamer ASUS TUF Gaming VG27AQ5A, 27" QHD, 210Hz, Fast IPS, 0.3 ms, FreeSync Premium',
    description: 'Monitor',
    envioGratis: true,
    price: 399990,
    image: monitor2,
    marca: "ASUS",
    categoria: "Monitores"
  },
  {
    /*https://www.spdigital.cl/monitor-gamer-curvo-asus-rog-strix-xg27wcms-27-qhd-280hz-va-1ms-g-sync-hdr10/?srsltid=AfmBOoqptesMefmt6LLxx5sZA3ckclUgYSYg1b3fLxZPVayK1bn6A3O8*/
    id: 'MT004',
    name: 'Monitor Gamer Curvo Asus ROG Strix XG27WCMS 27" QHD VA, 280hz, 1ms, HDR10, AMD FreeSync',
    description: 'Monitor',
    price: 599990,
    image: monitor3,
    marca: "ASUS",
    categoria: "Monitores"
  },
  {
    /*https://www.spdigital.cl/27-g55c-odyssey-g5-qhd-165hz-monitor-gamer-curvo/?srsltid=AfmBOop5TCYDQiAVEGKPScydDcY36BVPU-LZ5ssLEuoFgByNmarGxLXB*/
    id: 'MT005',
    name: 'Monitor Gamer Curvo Samsung Odyssey G5 G55C 27" QHD VA, 165Hz, HDR10, AMD FreeSync',
    description: 'Monitor',
    envioGratis: true,
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
    envioGratis: true,
    price: 1249990,
    image: pcGamerImage,
    marca: "HP",
    categoria: "Computadoras"
  },
  {
    /*https://www.spdigital.cl/pc-gamer-sp-labs-nomad-ryzen-7-7700x-rx-9070xt-ram-32gb-2x16gb-ddr5-ssd-1tb-nvme-freedos/?srsltid=AfmBOooWGf1RJXdI4jV5uwaF-aVDJYuRKapWr5BQH6iXM0c997eqotxn*/
    id: 'PC002',
    name: 'PC Gamer SP Labs Nomad, Ryzen 7 7700X, RX 9070XT, RAM 32GB (2x16GB) DDR5, SSD 1TB NVMe, FreeDOS',
    description: 'PC',
    envioGratis: true,
    price: 2499990,
    image: pc1,
    marca: "SP Labs",
    categoria: "Computadoras"
  },
  {
    /*https://www.spdigital.cl/pc-gamer-r3-5300g-16gb-rgb-2x8-rgb-512gb-nvme-wifi-freedos/?srsltid=AfmBOopa8SarCWcCLA1wuqd2x0d5hT55qaJkbKJz20L3TL3tYYtgy4gc*/
    id: 'PC003',
    name: 'PC Gamer ARGB 1, Ryzen 3 5300G, 16GB RGB, 512GB NVMe, WiFi, ARGB, FreeDOS (Sin SO)',
    description: 'PC',
    envioGratis: true,
    price: 540670,
    discount: 0.14,
    image: pc2,
    marca: "Armados",
    categoria: "Computadoras"
  },
  {
    /*https://www.spdigital.cl/pc-gamer-r5-550016gb-u100512g-nvme-g4000rtx-3060-12gb-wc-240wifi/?srsltid=AfmBOorKxDiBu5KEVMCAgF3ZQZv-C-MfVq9YmUc-0rizqTy_okIw6EEC*/
    id: 'PC004',
    name: 'PC Gamer ARGH 4, Ryzen 5 5500, RTX 3060, 16GB RGB, 512GB NVMe, Watercooling, Wi-Fi, Freedos',
    description: 'PC',
    envioGratis: true,
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
    /*https://www.spdigital.cl/mag-coreliquid-a13-360/?srsltid=AfmBOoqXdWlPYbJzE6Ugyq98LOLQYwBW9-6xevEvDpSPj3ezhqUZq7EW*/
    id: 'CP002',
    name: 'Refrigeración Líquida MSI MAG CORELIQUID A13 360, 360mm, ARGB, Intel LGA 1700/1851, AMD AM4/AM5',
    description: 'Refrigeración Líquida.',
    envioGratis: true,
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
    /*https://www.spdigital.cl/mini-pod-touch-fiddler-colors-morado/?srsltid=AfmBOorhzf5nU6IDZaFt8bjHq_kO8UMI0XXvAUHmYMTpeJDxlUxLSsOJ*/
    id: 'AB002',
    name: 'Audífonos Inalámbricos Bluetooth Fiddler Mini Pod Touch, Color Morado',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    price: 14990,
    discount: 0.46,
    image: audiblu2,
    marca: "Fiddler",
    categoria: "Audio"
  },
  {
    /*https://www.spdigital.cl/audifonos-gamer-inalambricos-primus-gaming-arcus-230-in-ear-para-celular-diseno-grogu/*/
    id: 'AB003',
    name: 'Audífonos Gamer Inalámbrico Primus Gaming ARCUS 230, In-Ear, para Celular, Diseño Grogu',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    price: 29990,
    discount: 0.27,
    image: audiblu3,
    marca: "Primus Gaming",
    categoria: "Audio",
    juego: "Star Wars"
  },
  {
    /*https://www.spdigital.cl/primus-gaming-true-wireless-earphones-para-cellular-phone-para-home-audio-para-portable-elec/*/
    id: 'AB004',
    name: 'Audífonos Gamer Inalámbrico Primus Arcus 240 Stormtrooper TWS Bluetooth 5.3, 9mm, IPX4, Blanco',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    price: 22240,
    discount: 0.18,
    image: audiblu4,
    marca: "Primus Gaming",
    categoria: "Audio",
    juego: "Star Wars"
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
    /*https://www.spdigital.cl/mousepad-gamer-steelseries-qck-edge-xl-63824/?srsltid=AfmBOoocWe9OnpirnaZlXLPl89yPjHX6GhlDJVZ4sUfq3xUGgENTFUkB*/
    id: 'MP003',
    name: 'Mouse Pad Gamer SteelSeries QCK EDGE XL, 90x30cm',
    description: 'Mousepad',
    envioGratis: true,
    price: 34990,
    discount: 0.50,
    image: mousepad3,
    marca: "SteelSeries",
    categoria: "Mousepad"
  },
  {
    /*https://www.spdigital.cl/primus-gaming-mouse-pad-grogu-mouse-pad-m/*/
    id: 'MP004',
    name: 'Mouse Pad Gamer Primus Gaming Arena M Star Wars Limited Edition, 32x27 cm, Diseño Grogu - Baby Yoda',
    description: 'Mousepad',
    price: 19990,
    discount: 0.43,
    image: mousepad4,
    marca: "Primus Gaming",
    categoria: "Mousepad",
    juego: "Star Wars"
  },
  {
    /*https://www.spdigital.cl/primus-gaming-mouse-pad-dark-side-mousepad-m/*/
    id: 'MP005',
    name: 'Mouse Pad Gamer Primus Gaming Arena M Star Wars Limited Edition, 32x27 cm, Diseño Dark Side',
    description: 'Mousepad',
    price: 19990,
    discount: 0.45,
    image: mousepad5,
    marca: "Primus Gaming",
    categoria: "Mousepad",
    juego: "Star Wars"
  },
  {
    /*https://www.spdigital.cl/mousepad-gamer-primus-gaming-arena-xxl-star-wars-limited-edition-90x42-cm-diseno-grogu-baby-yoda/*/
    id: 'MP006',
    name: 'Mouse Pad Gamer Primus Gaming Arena XXL Star Wars Limited Edition, 90x42 cm, Diseño Grogu Baby Yoda',
    description: 'Mousepad',
    price: 29990,
    discount: 0.37,
    image: mousepad6,
    marca: "Primus Gaming",
    categoria: "Mousepad",
    juego: "Star Wars"
  },
  /*Limpieza PC*/
  {
    /*https://www.spdigital.cl/set-de-limpieza-pantalla-philco-3-en-1/?srsltid=AfmBOorEDuT8cmuUOGJOsFyovXtEGOm6ijLz_YlQAE4TBE4GmgSnR39X*/
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
    /*https://www.spdigital.cl/microfono-para-streaming-redragon-fenris-gm301-rgb-montura-anti-vibracion-conexion-por-usb/?srsltid=AfmBOoqnFBiIftW6jbVqqNxMfANTLtfZL7f6D4Q9nG9GSZTtJO_dgcwW*/
    id: 'MF001',
    name: 'Micrófono para Streaming Redragon Fenris GM301, RGB, Montura Anti Vibración, Conexión por USB',
    description: 'Microfono Redragon',
    envioGratis: true,
    price: 59990,
    discount: 0.23,
    image: micro1,
    marca: "Redragon",
    categoria: "Microfonos"
  },
  {
    /*https://www.spdigital.cl/micr%C3%B3fono-profesional-gamer-rgb-hyperx-quadcast-s-montura-anti-vibraciones-tres-condensadores/?srsltid=AfmBOooS0FJfaOBPEMjldqRJEGA10CL0q7T-ZwaIrfV42vbJ5wCvjKsC*/
    id: 'MF002',
    name: 'Micrófono para Streaming HyperX QuadCast S RGB, Montura Antivibraciones, Tres Condensadores',
    description: 'Microfono HyperX',
    envioGratis: true,
    price: 199990,
    image: micro2,
    marca: "HyperX",
    categoria: "Microfonos"
  },
  {
    /*https://www.spdigital.cl/micr%C3%B3fono-de-condensador-fifine-k669b-streaming-pc-mac-ps4/?srsltid=AfmBOoqdiGll6-6MzPnUdhwTgSM9zmC12v8oA-i93yaXBkcxyVX7zbJS*/
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
    /*https://www.spdigital.cl/988-000568-microfonoyeti-gx-negro/?srsltid=AfmBOoq5fc42dL2PLXqbzFYX6LASqOcRO7rUjFyiji97-5x4-znQlsTd*/
    id: 'MF004',
    name: 'Micrófono Gamer Logitech G Yeti GX, RGB dinámico para gaming con LIGHTSYNC, Blue VO!CE',
    description: 'Microfono Logitech',
    envioGratis: true,
    price: 199990,
    discount: 0.30,
    image: micro4,
    marca: "Logitech",
    categoria: "Microfonos"
  },
  /*Figuras*/
  {
    /*https://www.weplay.cl/pop-games-cyberpunk-2077-takemura.html*/
    id: 'FG001',
    name: 'POP Games: Cyberpunk 2077- Takemura',
    description: 'Funko',
    price: 8990,
    image: fig1,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Cyberpunk"
  },
  {
    /*https://www.weplay.cl/figura-5-star-fallout-s2-assaultron-gw.html*/
    id: 'FG002',
    name: 'FIGURA 5 STAR: FALLOUT S2 - ASSAULTRON (GW)',
    description: 'Funko',
    price: 4990,
    image: fig2,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Fallout"
  },
  {
    /*https://www.weplay.cl/figura-5-star-fallout-s2-vault-boy-pyromaniac.html*/
    id: 'FG003',
    name: 'FIGURA 5 STAR: FALLOUT S2 - VAULT BOY (PYROMANIAC)',
    description: 'Funko',
    price: 4990,
    image: fig3,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Fallout"
  },
  {
    /*https://www.weplay.cl/pop-games-borderlands-3-female-psycho.html*/
    id: 'FG004',
    name: 'POP Games: Borderlands 3 - Female Psycho',
    description: 'Funko',
    price: 8990,
    image: fig4,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Borderlands"
  },
  {
    /*https://www.weplay.cl/pop-sale-figura-pop-star-wars-solo-w1-qi-ra.html*/
    id: 'FG005',
    name: 'POP-FIGURA POP STAR WARS: SOLO W1 - QIRA',
    description: 'Funko',
    price: 8990,
    image: fig5,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Star Wars"
  },
  {
    /*https://www.weplay.cl/figura-pop-games-borderlands-butt-stallion-exclusivo-weplay-nycc-2019.html*/
    id: 'FG006',
    name: 'POP Games: Borderlands - Butt Stallion EXCLUSIVO WEPLAY NYCC-2019',
    description: 'Funko',
    price: 9990,
    image: fig6,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Borderlands"
  },
  {
    /*https://www.weplay.cl/pop-games-league-of-legends-lucian.html*/
    id: 'FG007',
    name: 'POP Games: League of Legends - Lucian',
    description: 'Funko',
    price: 15990,
    image: fig7,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "League Of Legends"
  },
  {
    /*https://www.weplay.cl/pop-games-league-of-legends-senna.html*/
    id: 'FG008',
    name: 'POP Games: League of Legends - Senna',
    description: 'Funko',
    price: 15990,
    image: fig8,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "League Of Legends"
  },
  {
    /*https://www.weplay.cl/pop-games-league-of-legends-viego.html*/
    id: 'FG009',
    name: 'POP Games: League of Legends - Viego',
    description: 'Funko',
    price: 18990,
    image: fig9,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "League Of Legends"
  },
  {
    /*https://www.weplay.cl/pop-games-league-of-legends-ahri.html*/
    id: 'FG010',
    name: 'POP Games: League of Legends - Ahri',
    description: 'Funko',
    price: 18990,
    image: fig10,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "League Of Legends"
  },
  {
    /*https://www.weplay.cl/pop-games-five-nights-at-freddy-s-ruin-eclipse.html*/
    id: 'FG011',
    name: 'POP Games: Five Nights At Freddy´s RUIN- Eclipse',
    description: 'Funko',
    price: 16990,
    image: fig11,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Five Nights At Freddys"
  }
];

export default products;