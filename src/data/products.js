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
import { useLayoutEffect } from 'react';

import silla2 from '../assets/sillas/silla2.jpg';
import silla3 from '../assets/sillas/silla3.jpg';
import silla4 from '../assets/sillas/silla4.jpg';
import silla5 from '../assets/sillas/silla5.jpg';
import silla6 from '../assets/sillas/silla6.jpg';

import llav1 from '../assets/llaveros/llav1.jpg'
import llav2 from '../assets/llaveros/llav2.jpg'
import llav3 from '../assets/llaveros/llav3.jpg'
import llav4 from '../assets/llaveros/llav4.jpg'
import llav5 from '../assets/llaveros/llav5.jpg'
import llav6 from '../assets/llaveros/llav6.jpg'
import llav7 from '../assets/llaveros/llav7.jpg'
import llav8 from '../assets/llaveros/llav8.jpg'

import limpieza2 from '../assets/Limpieza Pc/limpieza2.jpg'
import limpieza3 from '../assets/Limpieza Pc/limpieza3.jpg'
import limpieza4 from '../assets/Limpieza Pc/limpieza4.jpg'

const products = [
  /*Silla*/
  {
    /*https://secretlab.eu/es/products/titan-evo-2022-series?srsltid=AfmBOooANqEU7oVDy3gC3ytQikfkA72An2k7bp5l2clIFDy6mBpbztWk*/ 
    id: "SG001",
    name: "Silla Gamer Secretlab Titan",
    description: "Comodidad y ergonomía para largas sesiones de juego.",
    descriptionmodal:`
      <ul>
        <li>Espuma de curado en frío pendiente de patente para una distribución uniforme de la presión y un apoyo receptivo durante todo el día. La base del asiento esculpida en forma de guijarro tiene una forma que se adapta al movimiento natural y a múltiples posturas.</li>
        <li><b>Caracteristicas:</b> Silla ergonómica tecnológicamente más avanzada.</li>
      </ul>`,
    envioGratis: true,
    price: 349990,
    image: sillaImg,
    marca: "Secretlab",
    categoria: "Sillas Gamer",
    estado: "preparacion"
  },
  {
    id: 'SG002',
    name: 'Silla Ergonómica Audi',
    description: 'Silla con soporte lumbar y materiales premium.',
    descriptionmodal:`
      <ul>
        <li>Cuenta con movimientos independiente de respaldo y asiento, lo que hace que se acomode a los movimientos naturales del cuerpo, evitando malas posturas. Su respaldo está diseñado para que se desliza por debajo del asiento sobre dos rieles, lo que genera un contra balance con el asiento, equivalente al movimiento que hace el cuerpo con la columna y las caderas. Cuenta con 3 manillas de control.</li>  
        <li><b>Caracteristicas:</b> Silla ergonómica de acero.</li>
      </ul>`,
    envioGratis: false,
    price: 259990,
    image: sillaAudiImage,
    marca: "Audi",
    categoria: "Sillas Gamer",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/silla-gamer-cougar-hotrod/?srsltid=AfmBOooBvR_A9zbG-b4VJQw8Mupzzf54D7maYd3ojciUFhef7ejqJojf*/
    id: 'SG003',
    name: 'Silla Gamer Cougar Hotrod, Diseño Ergonómico, Reposabrazos 3D, Hasta 135kg',
    description: 'Silla con soporte lumbar y materiales premium.',
    descriptionmodal: `
      <ul>
        <li>Inspirada en el diseño elegante y moderno de los deportes de motor, Hotrod está diseñada para ofrecer el máximo confort y apoyo durante las sesiones de juego más intensas.</li>
        <li><b>Caracteristicas:</b>
          <ul>
            <li>Diseño deportivo y con respaldo multizona.</li>
            <li>Acolchado de espuma de múltiples niveles del respaldo.</li>
            <li>Almohada con ajuste de altura.</li>
            <li>Polipiel Hyper-Dura.</li>
            <li>Reposabrazos 3D.</li>
            <li>Base de metal resistente y duradera.</li>
          </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 399990,
    discount: 0.36,
    image: silla1,
    marca: "Cougar",
    categoria: "Sillas Gamer",
    estado: "preparacion"
  },
  /*Controles*/
  {
    /*https://www.spdigital.cl/control-inal%C3%A1mbrico-microsoft-xbox-series-cable-usb-c-negro/?srsltid=AfmBOor8XJLgxCwaeec--yk3eYe_J-FtNvZOK5_8wdJf4me03X3EC9-v*/
    id: "CG001",
    name: "Control Xbox Series X",
    description: "Control inalámbrico preciso y cómodo para Xbox y PC.",
    descriptionmodal:`
      <ul>
        <li>Agarres de gatillo texturizados I Asignación de botones I Tecnología Bluetooth® I Cable USB-C</li>        
        <li><b>Caracteristicas:</b> Diseño modernizado del mando inalámbrico Xbox, con superficies esculpidas y una geometría refinada para disfrutar de una mayor comodidad durante el juego. Juega de forma inalámbrica o usa el cable USB-C de 2,7 m incluido para disfrutar de una experiencia de juego con cable. Mantén el objetivo con un control de dirección híbrido y agarre texturizado en los gatillos, botones y funda trasera.</li>
      </ul>`,
    envioGratis: true,
    price: 59990,
    image: controladorXboxImg,
    marca: "Microsoft",
    categoria: "Controles",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/ps5-dualsense-latam/?srsltid=AfmBOoqhoJqDHATkYlP2pweht1_KabGAwYUxQGpHrcYuv0mzv6BW86h1*/
    id: "CG002",
    name: "Control Playstation 5",
    description: "Control inalámbrico preciso y cómodo para Playstation 5 y PC.",
    descriptionmodal:`
      <ul>
        <li>Control inalambrico DualSense. 160x66x160 (mm)</li>  
        <li><b>Caracteristicas:</b> Respuesta háptica, gatillos adaptativos, micrófono integrado y conector para auriculares. Botón crear.</li>

      </ul>`,
    envioGratis: true,
    price: 84990,
    discount: 0.18,
    image: mando1,
    marca: "Sony",
    categoria: "Controles",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/control-inal%C3%A1mbrico-ps4-monster-games-wireless-d21edr-negro/*/
    id: "CG003",
    name: "Control Playstation 4",
    description: "Control inalámbrico preciso y cómodo para Playstation 4 y PC.",
    descriptionmodal:`
      <ul>
        <li><b>Caracteristicas:</b>
          <ul>
            <li>Control PS4 Wireless d2.1+edr</li>
            <li>Batería recargable 400 mAh</li>
            <li>Conexión de audífono 3.5</li>
            <li>Método de carga cable micro USB</li>
            <li>Distancia operativa 10 mts.</li>
            <li>Vibración doble</li>
            <li>Panel táctil</li>
          </ul>
        </li>
      </ul>`,
    envioGratis: false,
    price: 59990,
    image: mando2,
    marca: "Sony",
    categoria: "Controles",
    estado: "preparacion"
  },
  {
    /*https://www.falabella.com/falabella-cl/product/5621240/Joycon-L-R-Neon-Red-Neon-Blue-Nintendo/5621240*/
    id: "CG004",
    name: "Joycon L R Neon Red/Neon Blue Nintendo",
    description: "JoyCon",
    descriptionmodal:`
      <ul>
        <li>Cuentan con sensores de movimiento (acelerómetro y giroscopio), sistema de vibración HD, y se pueden compartir fácilmente para jugar con amigos.</li>  
        <li><b>Caracteristicas:</b> mando convencional, mientras que por separado funcionaran como dos mandos individuales plenamente funcionales.Ademas de jugar sujetando un Joy-Con vertical u horizontalmente, tambien se puede jugar con ambos Joy-Con a la vez, uno en cada mano.</li>
      </ul>`,
    envioGratis: false,
    price: 109990,
    discount: 0.14,
    image: mando3,
    marca: "Nintendo",
    categoria: "Controles",
    estado: "preparacion"
  },
  /*Consolas*/
  {
    /*https://www.falabella.com/falabella-cl/product/126614735/Consola-Sony-PS5-PlayStation-5-Slim-(Edicion-Disco)/126614736*/
    id: "CO001",
    name: "PlayStation 5",
    description: "Consola de última generación para gaming inmersivo.",
    descriptionmodal:`
      <ul>
        <li>Versión más compacta y estilizada de la PS5 estándar, con un diseño más delgado y ligero para facilitar su integración en espacios reducidos. Cuenta con una unidad de disco compatible con discos Ultra HD Blu-ray, Blu-ray estándar y DVD, permitiendo reproducir juegos físicos y películas en alta definición.</li>  
        <li><b>Caracteristicas:</b> Almacena tus juegos favoritos y disfruta de tiempos de carga casi instantáneos gracias al SSD de ultra alta velocidad de 1 TB. La integración personalizada de la E/S de la consola PS5 permite a los creadores extraer datos del SSD de manera excepcionalmente rápida, desbloqueando nuevas posibilidades en el diseño de juegos.</li>
      </ul>`,
    envioGratis: false,
    price: 549990,
    image: ps5Img,
    marca: "Sony",
    categoria: "Consolas",
    estado: "preparacion"
  },
  {
    /*https://www.falabella.com/falabella-cl/product/123426427/Consola-Nintendo-Switch-Modelo-OLED-Neon/123426431*/
    id: 'CO002',
    name: 'Consola Nintendo Switch',
    description: 'Consola híbrida para juego portátil y televisión.',
    descriptionmodal:`
      <ul>
        <li>Diseño en colores Neon azul y rojo añade un aspecto atractivo y ergonómico, con un peso aproximado de 320 g sin los controles acoplados.</li>  
        <li><b>Caracteristicas:</b> Miembro más nuevo de la familia Nintendo Switch Juega en casa en el televisor o mientras viajas con una vibrante pantalla OLED de 7 pulgadas con el sistema Nintendo Switch - Modelo OLED. El modelo OLED de Nintendo Switch incluye un soporte ancho ajustable para ángulos de visión más cómodos, una base con un puerto LAN con cable para el modo TV (el cable LAN se vende por separado), 64 GB de almacenamiento interno almacenamiento y audio mejorado en los modos portátil y de mesa usando los altavoces del sistema.</li>
      </ul>`,
    envioGratis: true,
    price: 299990,
    image: switchImage,
    marca: "Nintendo",
    categoria: "Consolas",
    estado: "preparacion"
  },
  {
    /*https://www.paris.cl/consola-xbox-series-x-1tb-ssd-edicion-digital-blanco-certificado-reacondicionado-MKWXXAHXXQ.html*/
    id: 'CO003',
    name: 'Xbox Series X',
    description: 'Consola de última generación para gaming inmersivo.',
    descriptionmodal:`
      <ul>
        <li>Consola de última generación de Microsoft, diseñada para ofrecer un rendimiento de juego superior y calidad gráfica avanzada.</li>
        <li><b>Caracteristicas:</b> 
        <ul>
            <li>Procesador CPU: AMD Zen 2 de 8 núcleos a 3.8 GHz</li>
            <li>GPU: AMD RDNA 2 con 52 CUs a 1.825 GHz, 12 teraflops de potencia gráfica</li>
            <li>Memoria RAM: 16 GB GDDR6 con 320-bit bus y ancho de banda diferencial (10 GB a 560 GB/s y 6 GB a 336 GB/s)</li>
            <li>Almacenamiento: SSD NVMe de 1 TB con opción de expansión mediante tarjetas y discos externos</li>
            <li>Resolución: Soporte nativo para 4K a 120 FPS y hasta 8K</li>
            <li>Tecnología gráfica: Ray Tracing en tiempo real, Mesh Shading</li>
          </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 539990,
    image: xbox,
    marca: "Xbox",
    categoria: "Consolas",
    estado: "preparacion"
  },
  /*Audifonos*/
  {
    id: 'AU001',
    name: 'Auriculares Gamer Audi',
    description: 'Auriculares con sonido envolvente y micrófono.',
    descriptionmodal:`
      <ul>
        <li>Diseño en colores Neon azul y rojo añade un aspecto atractivo y ergonómico, con un peso aproximado de 320 g sin los controles acoplados.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Hasta 120 horas de duración de la batería</li>
            <li>Comodidad y durabilidad características de HyperX</li>
            <li>Transductores angulares y calibrados de 53 mm</li>
            <li>Micrófono extraíble con indicador LED de silencio</li>
            <li>Audio espacial DTS Headphone:X</li>
            <li>Controles de micrófono y audio integrados</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: false,
    price: 79990,
    image: audiImage,
    marca: "Audi",
    categoria: "Audio",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/headset-cloud-stinger-core-wl/?srsltid=AfmBOoqW24llDd8JcFIDhVxrpQ4ScfrLQem4oof6CC7klwiEUcHNo1DO*/
    id: 'AU002',
    name: 'Audifonos Gamer Inalámbrico HyperX Cloud Stinger Core, USB, Over-Ear, Blanco',
    description: 'Auriculares con sonido envolvente y micrófono.',
    descriptionmodal:`
      <ul>
        <li>Auriculares diseñados para jugadores que buscan comodidad, buen sonido y libertad con conexión inalámbrica. El micrófono es desmontable, flexible y con cancelación de ruido que mejora la comunicación en juegos, además se silencia automáticamente al girarlo.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Inalámbrico USB 2.4 GHz, Over-Ear</li>
            <li>Drivers: 50 mm, neodimio</li>
            <li>Micrófono: Desmontable, flexible, unidireccional con cancelación de ruido</li>
            <li>Batería: Hasta 17 horas de duración, carga de 3 horas</li>
            <li>Peso: 275 g</li>
            <li>Compatibilidad: PC, PS4, PS5 (modo USB)</li>
            <li>Controles integrados de volumen y micrófono</li>
            <li>Diseño cómodo con almohadillas de memory foam y ajuste de acero resistente</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 102660,
    discount: 0.16,
    image: audifonos1,
    marca: "HyperX",
    categoria: "Audio",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/aud%C3%ADfonos-con-micr%C3%B3fono-logitech-pro-x-para-juegos-blue-voce/?srsltid=AfmBOopQdC_C2uYGtEQqW0u0-Q5NuG4_fIjXnadh7GVUwdeGYV8bPJ0F*/
    id: 'AU003',
    name: 'Audífonos Gamer Logitech PRO X para juegos, con Micrófono, Blue Vo!ce',
    description: 'Auriculares con sonido envolvente y micrófono.',
    descriptionmodal:`
      <ul>
        <li>Cuentan con transductores PRO-G de 50 mm que proporcionan audio envolvente y preciso, ideal para detectar detalles y direccionalidad en los juegos. Incluyen tecnología inalámbrica LIGHTSPEED de 2.4 GHz con hasta 20 horas de batería y un rango de conexión de hasta 15 metros, ofreciendo libertad de movimiento sin perder calidad ni latencia.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Auriculares inalámbricos gaming Over-Ear</li>
            <li>Transductores: PRO-G híbridos de 50 mm, imán de neodimio</li>
            <li>Respuesta de frecuencia: 20 Hz - 20 kHz</li>
            <li>Micrófono: Extraíble, condensador electret de 6 mm, cardioide con Blue VO!CE</li>
            <li>Conectividad: LIGHTSPEED inalámbrica 2.4 GHz</li>
            <li>Alcance inalámbrico: Hasta 15 metros</li>
            <li>Batería: Hasta 20 horas de duración</li>
            <li>Materiales: Horquilla de aluminio, diadema de acero</li>
            <li>Almohadillas: Espuma viscoelástica con piel sintética y tela adicional</li>
            <li>Sonido envolvente: DTS Headphone:X 2.0 (PC con G HUB)</li>
        </ul>
        </li>
      </ul>`,
    price: 201840,
    discount: 0.21,
    image: audifonos2,
    marca: "Logitech",
    categoria: "Audio",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/aud%C3%ADfonos-gamer-logitech-g335-conector-35mm-plug-and-play-multiplataforma-color-blanco/?srsltid=AfmBOorEYiohVxPZP7VAs4xA3oKydzFyXUdIUm5erRi6k-ZCVcfHYfBl*/
    id: 'AU004',
    name: 'Audífonos Gamer Logitech G335, Conector 3,5mm, Plug and Play, Multiplataforma, Color Blanco ',
    description: 'Auriculares con sonido envolvente y micrófono.',
    descriptionmodal:`
      <ul>
        <li>Con conector de 3,5 mm, son auriculares con cable diseñados para ofrecer una experiencia de sonido clara y potente en juegos, siendo compatibles con múltiples plataformas como PC, Xbox, PlayStation, Nintendo Switch y dispositivos móviles con entrada de audio de 3,5 mm.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Auriculares con cable, conector 3.5 mm, Over-Ear</li>
            <li>Drivers: 40 mm, neodimio</li>
            <li>Respuesta de frecuencia: 20 Hz - 20 kHz</li>
            <li>Micrófono: Boom plegable, unidireccional, patrón cardioide, función flip-to-mute</li>
            <li>Peso: 240 g</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 56600,
    discount: 0.19,
    image: audifonos3,
    marca: "Logitech",
    categoria: "Audio",
    estado: "preparacion"
  },
  /*Mouse*/
  {
    id: 'MO001',
    name: 'Mouse Gamer RGB',
    description: 'Mouse con iluminación RGB y alta precisión.',
    descriptionmodal:`
      <ul>
        <li>Diseñado especialmente para jugadores que buscan precisión, personalización y estética visual con iluminación RGB. Además, tienen varios botones programables para ejecutar macros o funciones personalizadas y cuentan con iluminación LED RGB multicolor configurable mediante software, con millones de colores y efectos de luz dinámicos para crear ambientes de juego inmersivos.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Sensor óptico o láser de alta precisión (ejemplo: Pixart 3360)</li>
            <li>DPI ajustable, típicamente entre 400 y más de 16,000 DPI</li>
            <li>Múltiples botones programables (6 o más)</li>
            <li>Iluminación RGB con hasta 16.8 millones de colores con perfiles configurables</li>
            <li>Diseño ergonómico para agarre cómodo en sesiones prolongadas</li>
            <li>Conectividad por cable USB o inalámbrica según modelo</li>
            <li>Software dedicado para personalización de iluminación, macros y DPI</li>
        </ul>
        </li>
      </ul>`,
    price: 39990,
    image: mouseImage,
    marca: "Corsair",
    categoria: "Mouse Gamer",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/mouse-gamer-logitech-g203-rgb-lightsync-6-botones-programables-8000-dpi-black/?srsltid=AfmBOoqzkLBqOlPmbrmqxZmezPVP32bfJftvUavArGhIOlN0sXwRZC0N*/
    id: 'MO002',
    name: 'Mouse Gamer Logitech G203 RGB LIGHTSYNC, 6 botones programables, 8.000 DPI, Black',
    description: 'Mouse con iluminación RGB y alta precisión.',
    descriptionmodal:`
      <ul>
        <li>Está equipado con un sensor óptico HERO 2 ajustable con una resolución de 200 a 8.000 DPI, que permite un seguimiento preciso y adaptado a diferentes estilos de juego. </li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Sensor óptico HERO 2, ajustable de 200 a 8.000 DPI</li>
            <li>6 botones programables con funciones personalizables</li>
            <li>Iluminación RGB LIGHTSYNC con 16,8 millones de colores</li>
            <li>Tasa de sondeo de 1000 Hz (1 ms de respuesta)</li>
            <li>Diseño ergonómico para usuarios diestros</li>
            <li>Peso ligero de 85 gramos</li>
            <li>Cable USB de 2,1 metros para conexión estable</li>
            <li>Compatible con Windows, macOS y Chrome OS</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 25020,
    discount: 0.20,
    image: mouse1,
    marca: "Logitech",
    categoria: "Mouse Gamer",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/mouse-gamer-primus-gaming-gladius-12400t-limited-edition-diseno-dark-side/?srsltid=AfmBOooN-yNOKX0jUfqsv86hk-Ks0BHeeOcC6c_7wovYXya6AXZqEVOf*/
    id: 'MO003',
    name: 'Mouse Gamer Primus Gaming Gladius 12400T Limited Edition, Diseño Dark Side',
    description: 'Mouse con iluminación RGB y alta precisión.',
    descriptionmodal:`
      <ul>
        <li>Mouse cableado diseñado para gamers que buscan precisión, personalización y un diseño temático inspirado en Star Wars. </li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Sensor óptico con resolución ajustable hasta 12.400 DPI</li>
            <li>11 botones totales (10 programables)</li>
            <li>Iluminación LED RGB personalizable, diseño temático Dark Side</li>
            <li>Microinterruptores OMRON de alta durabilidad (20 millones de clics)</li>
            <li>Velocidad de sondeo ajustable: 125/250/500/1000 Hz</li>
            <li>Conectividad: USB cableado</li>
            <li>Diseño ergonómico para diestros</li>
            <li>Aceleración hasta 30G</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 39990,
    discount: 0.40,
    image: mouse2,
    marca: "Primus Gaming",
    categoria: "Mouse Gamer",
    juego: "Star Wars",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/mouse-gamer-cooler-master-mm711-6-botones-16000-dpi-white-matte/?srsltid=AfmBOorrt8yoypVWBPEPyTbVwq5byhSPFLOugnaOTgFhAPtWVs8FKF4o*/
    id: 'MO004',
    name: 'Mouse Gamer Cooler Master MM711, 16000 DPI, PixArt PMW-3389, Diestro, 6 Botones, Color Blanco Mate',
    description: 'Mouse con iluminación RGB y alta precisión.',
    descriptionmodal:`
      <ul>
        <li></li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Sensor óptico PixArt PMW3389 de hasta 16.000 DPI ajustables</li>
            <li>Seis botones programables con interruptores OMRON (20 millones de clics)</li>
            <li>Diseño ultraligero con carcasa en forma de panal, peso < 60 g</li>
            <li>Iluminación RGB personalizable en rueda y logo</li>
            <li>Cable USB Ultraweave trenzado de 1.8 m</li>
            <li>Pies de PTFE puro para mejor deslizamiento</li>
            <li>Tasa de sondeo de 1000 Hz y tiempo de respuesta de 1 ms</li>
        </ul>
        </li>
      </ul>`,
    price: 55530,
    discount: 0.19,
    image: mouse3,
    marca: "Corsair",
    categoria: "Mouse Gamer",
    estado: "preparacion"
  },
  /*Teclado*/
  {
    id: 'TE001',
    name: 'Teclado Mecánico',
    description: 'Teclado mecánico con retroiluminación customizable.',
    descriptionmodal:`
      <ul>
        <li>Diseñado para ofrecer alta precisión y durabilidad en la escritura o juego, al tiempo que proporciona un atractivo estético con luces LED RGB configurables. </li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Interruptores mecánicos con respuesta táctil y durabilidad superior (varios tipos según modelo: táctil, click, lineal)</li>
            <li>Retroiluminación RGB personalizable por tecla o zonas, con millones de colores y efectos dinámicos</li>
            <li>Compatibilidad multiplataforma (PC, consolas en algunos casos)</li>
            <li>Teclas con grabado láser para evitar desgaste en el tiempo</li>
            <li>Software de personalización para macros, perfiles y efectos de luz</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 99990,
    image: tecladoImage,
    marca: "Logitech",
    categoria: "Teclados",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/hyperx-keyboard-abs-hx-red-merco/*/
    id: 'TE002',
    name: 'Teclado Gamer Hyper X Alloy Origins, Mecánico, Español, Switch Red, RGB, Full Size, Color Negro',
    description: 'Teclado mecánico con retroiluminación customizable.',
    descriptionmodal:`
      <ul>
        <li>Teclado mecánico full size diseñado para gamers que buscan alta durabilidad, rendimiento y personalización avanzada.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Teclado mecánico full size (104 teclas) en español (layout ISO)</li>
            <li>Interruptores: HyperX Red mecánicos, lineales, 80 millones de pulsaciones</li>
            <li>Material: Cuerpo de aluminio aeronáutico resistente y estable</li>
            <li>Iluminación: RGB por tecla, personalizable con software HyperX NGENUITY</li>
            <li>Conectividad: Cable USB-C desmontable</li>
            <li>Dimensiones: 396 x 173 x 44 mm</li>
            <li>Peso aproximado: 1.075 gramos</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 161960,
    image: teclado1,
    marca: "HyperX",
    categoria: "Teclados",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/teclado-mec%C3%A1nico-gamer-redragon-kumara-k552-switch-outemu-retroiluminaci%C3%B3n-red-led/*/
    id: 'TE003',
    name: 'Teclado Gamer Redragon Kumara K552 TKL, Mecánico, Switch Outemu Red, Rainbow, Color Negro',
    description: 'Teclado mecánico con retroiluminación customizable.',
    descriptionmodal:`
      <ul>
        <li>El Teclado Gamer Redragon Kumara K552 TKL es un teclado mecánico compacto tipo Tenkeyless (sin teclado numérico) diseñado para jugadores que buscan durabilidad, precisión y estética personalizable.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Mecánico, formato Tenkeyless (80% sin teclado numérico)</li>
            <li>Switches: Outemu Red (lineales, silenciosos)</li>
            <li>Retroiluminación: RGB Chroma personalizable con múltiples efectos</li>
            <li>Construcción: Placa de acero y plástico ABS reforzado</li>
            <li>Peso: Aproximadamente 1.06 kg</li>
            <li>Cable: USB 2.0 reforzado, con filtro antinterferencias</li>
        </ul>
        </li>
      </ul>`,
    price: 50990,
    discount: 0.49,
    image: teclado2,
    marca: "Redragon",
    categoria: "Teclados",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/hyperx-alloy-core-rgb-gaming-keyboard-la/*/
    id: 'TE004',
    name: 'Teclado Gamer HyperX Alloy Core, Membrana, Español, RGB, Full Size, Color Negro',
    description: 'Teclado mecánico con retroiluminación customizable.',
    descriptionmodal:`
      <ul>
        <li>Teclado de membrana diseñado para jugadores que buscan un equilibrio entre estilo, funcionalidad y durabilidad.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Membrana con teclas silenciosas y sensación táctil</li>
            <li>Retroiluminación: RGB personalizable en 5 zonas con 6 modos y 3 niveles de brillo</li>
            <li>Construcción: Plástico reforzado resistente</li>
            <li>Tecnología anti-ghosting y rollover para múltiples pulsaciones simultáneas</li>
            <li>Resistencia a derrames hasta 120 ml de líquido</li>
            <li>Controles multimedia dedicados y modo juego con bloqueo de tecla Windows</li>
            <li>Conexión: USB 2.0 con cable trenzado de 1,8 metros</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 78360,
    image: teclado3,
    marca: "HyperX",
    categoria: "Teclados",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/k552w-kr-sp-teclado-kumara-rainbow-white-switch-rojo-sp/*/
    id: 'TE005',
    name: 'Teclado Gamer Redragon Kumara K552 TKL, Mecánico, Español, Switch Red, Rainbow, Color Blanco',
    description: 'Teclado mecánico con retroiluminación customizable.',
    descriptionmodal:`
      <ul>
        <li>El Teclado Gamer Redragon Kumara K552 TKL, en versión mecánica con switches Outemu Red y color blanco, es un teclado compacto tipo Tenkeyless (sin teclado numérico) ideal para gamers que necesitan maximizar el espacio en su escritorio sin sacrificar calidad ni rendimiento.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Teclado mecánico, formato Tenkeyless (80%)</li>
            <li>Switches Outemu Red: lineales, suaves y silenciosos</li>
            <li>Retroiluminación RGB Chroma con múltiples efectos personalizables</li>
            <li>Tecnología anti-ghosting con full key rollover</li>
            <li>Funciones multimedia vía tecla FN y bloqueo de tecla Windows</li>
            <li>Resistente a salpicaduras con sistema de drenaje</li>
            <li>Cable USB reforzado con conector chapado en oro y filtro anti interferencias</li>
        </ul>
        </li>
      </ul>`,
    price: 49999,
    discount: 0.42,
    image: teclado4,
    marca: "Redragon",
    categoria: "Teclados",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/teclado-gamer-logitech-g-pro-rgb-mec%C3%A1nico-switch-gx-blue-al%C3%A1mbrico-negro/*/
    id: 'TE006',
    name: 'Teclado Gamer Logitech G Pro, Mecánico, Ingles, Switch GX Blue, RGB, Full Size, Color Negro',
    description: 'Teclado mecánico con retroiluminación customizable.',
    descriptionmodal:`
      <ul>
        <li>El Teclado Gamer Logitech G Pro, mecánico, en idioma inglés, con switches GX Blue, RGB, y color negro, es un teclado diseñado para gaming profesional con un formato compacto sin teclado numérico (Tenkeyless), ideal para optimizar espacio y facilitar el transporte. Utiliza interruptores mecánicos GX Blue con clic perceptible, que proporcionan una respuesta táctil y audible para una experiencia de tecleo precisa y retroalimentación clara, muy apreciados para juegos que requieren pulsaciones rápidas y sensibles.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Mecánico, formato Tenkeyless (sin teclado numérico)</li>
            <li>Switches: GX Blue clicky, con respuesta táctil y audible</li>
            <li>Iluminación: RGB LIGHTSYNC personalizable con millones de colores y efectos</li>
            <li>Software: Compatible con Logitech G HUB para configuración avanzada</li>
            <li>Memoria interna para perfiles de iluminación</li>
            <li>Cable USB desmontable de 1.8 metros</li>
            <li>12 teclas de función programables</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 142680,
    discount: 0.19,
    image: teclado5,
    marca: "Logitech",
    categoria: "Teclados",
    estado: "preparacion"
  },
  /*Monitor*/
  {
    id: 'MT001',
    name: 'Monitor Gamer 24',
    description: 'Monitor Full HD con 144Hz y bajo tiempo de respuesta.',
    descriptionmodal:`
      <ul>
        <li>Pantalla diseñada para ofrecer un rendimiento óptimo en juegos, combinando una buena resolución, alta tasa de refresco y bajos tiempos de respuesta para proporcionar imágenes fluidas y sin retrasos. </li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tamaño de pantalla: 23.8 a 24 pulgadas</li>
            <li>Resolución: Full HD (1920 x 1080)</li>
            <li>Panel: IPS o Fast IPS para mejor color y ángulos de visión</li>
            <li>Tiempo de respuesta: 1 ms a 2 ms (GtG)</li>
            <li>Frecuencia de actualización: 144 Hz a 165 Hz</li>
            <li>Tecnología de sincronización adaptativa: AMD FreeSync Premium / NVIDIA G-SYNC Compatible</li>
            <li>Conectividad: HDMI, DisplayPort, a veces VGA</li>
        </ul>
        </li>
      </ul>`,
    price: 159990,
    image: monitorImage,
    marca: "ASUS",
    categoria: "Monitores",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/monitor-gamer-msi-mag-275f-27-fhd-180hz-rapid-ips-05ms-adaptive-sync-hdmidisplayport/?srsltid=AfmBOopqov1ng0mkYgOhs_WJz050sEZf3_THwKZowivr1RUICmHyQvFr*/
    id: 'MT002',
    name: 'Monitor Gamer MSI MAG 275F, 27" FHD, 180Hz, Rapid IPS, 0.5ms, Adaptive Sync, HDMI/DisplayPort',
    description: 'Monitor',
    descriptionmodal:`
      <ul>
        <li>El Monitor Gamer MSI MAG 275F es un monitor de 27 pulgadas con panel Rapid IPS y resolución Full HD (1920 x 1080), diseñado para brindar colores vibrantes, alta nitidez y amplios ángulos de visión de 178° tanto horizontal como vertical.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tamaño: 27 pulgadas</li>
            <li>Resolución: Full HD 1920 x 1080</li>
            <li>Panel: Rapid IPS</li>
            <li>Tasa de refresco: 180 Hz</li>
            <li>Tiempo de respuesta: 0.5 ms (GtG)</li>
            <li>Tecnología: Adaptive Sync, HDR Ready</li>
            <li>Cobertura de color: 115% sRGB</li>
            <li>Brillo: 250 cd/m² (típico)</li>
            <li>Contraste dinámico: 100,000,000:1</li>
            <li>Conectividad: 1 DisplayPort 1.4, 2 HDMI 2.0b, salida de audio para auriculares</li>
            <li>Diseño sin bordes, soporte ajustable en inclinación y VESA 100x100 mm</li>
        </ul>
        </li>
      </ul>`,
    price: 249990,
    image: monitor1,
    marca: "MSI",
    categoria: "Monitores",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/monitor-gamer-asus-tuf-gaming-vg27aq5a-27-qhd-210hz-fast-ips-03-ms-color-negro/?srsltid=AfmBOopNoDz_FPv0Em4WtqRGIV9hMl4pwpjVCi99813GKb6fyqwpUkcS*/
    id: 'MT003',
    name: 'Monitor gamer ASUS TUF Gaming VG27AQ5A, 27" QHD, 210Hz, Fast IPS, 0.3 ms, FreeSync Premium',
    description: 'Monitor',
    descriptionmodal:`
      <ul>
        <li>El Monitor Gamer ASUS TUF Gaming VG27AQ5A es un monitor de 27 pulgadas con resolución Quad HD (2560 x 1440) que ofrece imágenes nítidas y colores vibrantes gracias a su panel Fast IPS.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tamaño: 27 pulgadas</li>
            <li>Resolución: Quad HD, 2560 x 1440 píxeles</li>
            <li>Panel: Fast IPS con ángulos de visión de 178°</li>
            <li>Frecuencia de refresco: Hasta 210 Hz (OC)</li>
            <li>Tiempo de respuesta: 0.3 ms (GtG)</li>
            <li>Tecnología: HDR10, FreeSync Premium, Adaptive Sync, ELMB Sync</li>
            <li>Cobertura de color: 95% DCI-P3, 130% sRGB</li>
            <li>Conectividad: 2x HDMI 2.0, 1x DisplayPort 1.4, 1x USB-C, salida para auriculares</li>
            <li>Diseño: Antirreflejo, ajuste de inclinación, compatibilidad VESA 100x100</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 399990,
    image: monitor2,
    marca: "ASUS",
    categoria: "Monitores",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/monitor-gamer-curvo-asus-rog-strix-xg27wcms-27-qhd-280hz-va-1ms-g-sync-hdr10/?srsltid=AfmBOoqptesMefmt6LLxx5sZA3ckclUgYSYg1b3fLxZPVayK1bn6A3O8*/
    id: 'MT004',
    name: 'Monitor Gamer Curvo Asus ROG Strix XG27WCMS 27" QHD VA, 280hz, 1ms, HDR10, AMD FreeSync',
    description: 'Monitor',
    descriptionmodal:`
      <ul>
        <li>El Monitor Gamer Curvo Asus ROG Strix XG27WCMS de 27 pulgadas es un monitor de alta gama diseñado para jugadores que buscan una experiencia inmersiva y fluida con resolución QHD (2560 x 1440) y panel VA curvo con curvatura 1500R, que mejora la inmersión visual y reduce la fatiga ocular.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tamaño: 27 pulgadas</li>
            <li>Resolución: QHD 2560 x 1440 píxeles</li>
            <li>Panel: VA curvo con curvatura 1500R</li>
            <li>Frecuencia de refresco: 280 Hz</li>
            <li>Tiempo de respuesta: 1 ms (GtG)</li>
            <li>Tecnología: HDR10, Adaptive Sync, AMD FreeSync</li>
            <li>Brillo: 400 cd/m² (típico)</li>
            <li>Contraste: 3000:1 (estático)</li>
            <li>Conectividad: DisplayPort 1.4, HDMI 2.0, USB-C (DP Alt Mode con entrega de energía)</li>
            <li>Diseño: Curvo, soporte ergonómico ajustable, montaje VESA 100x100</li>
        </ul>
        </li>
      </ul>`,
    price: 599990,
    image: monitor3,
    marca: "ASUS",
    categoria: "Monitores",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/27-g55c-odyssey-g5-qhd-165hz-monitor-gamer-curvo/?srsltid=AfmBOop5TCYDQiAVEGKPScydDcY36BVPU-LZ5ssLEuoFgByNmarGxLXB*/
    id: 'MT005',
    name: 'Monitor Gamer Curvo Samsung Odyssey G5 G55C 27" QHD VA, 165Hz, HDR10, AMD FreeSync',
    description: 'Monitor',
    descriptionmodal:`
      <ul>
        <li>El Monitor Gamer Curvo Samsung Odyssey G5 G55C de 27 pulgadas es una pantalla diseñada para ofrecer una experiencia inmersiva y fluida en juegos, con resolución QHD (2560 x 1440) y un panel VA curvo con curvatura 1000R que envuelve el campo visual para mayor inmersión.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tamaño de pantalla: 27 pulgadas</li>
            <li>Resolución: QHD (2560 x 1440)</li>
            <li>Panel: VA curvo con curvatura 1000R</li>
            <li>Frecuencia de refresco: 165 Hz</li>
            <li>Tiempo de respuesta: 1 ms (MPRT)</li>
            <li>Tecnología: HDR10, AMD FreeSync Premium</li>
            <li>Brillo: 300 cd/m² (típico)</li>
            <li>Contraste estático: 2500:1</li>
            <li>Conectividad: 1x HDMI 2.0, 1x DisplayPort 1.2, salida de auriculares</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 299990,
    discount: 0.37,
    image: monitor4,
    marca: "Samsung",
    categoria: "Monitores",
    estado: "preparacion"
  },
  /*PC*/
  {
    id: 'PC001',
    name: 'Gabinete Gamer Darkflash Knight 6 Ventiladores Rgb Incluido Negro',
    description: 'PC con procesador Intel i7, 16GB RAM y tarjeta RTX 3060.',
    descriptionmodal:`
      <ul>
        <li>El Gabinete Gamer Darkflash Knight con 6 ventiladores RGB incluidos en color negro es un chasis diseñado para ofrecer un alto rendimiento en refrigeración y una estética llamativa para PC gaming. Cuenta con un diseño espacioso que permite instalar placas base de formatos desde ATX hasta Extended ATX, asegurando compatibilidad con componentes de alto rendimiento.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Compatibilidad con placas base: ATX, Micro ATX, ITX y Extended ATX</li>
            <li>Panel lateral: vidrio templado para mostrar componentes interiores</li>
            <li>Ventiladores incluidos: 6 ventiladores RGB para una buena refrigeración y estética</li>
            <li>Espacios para ventiladores adicionales y radiadores para personalización avanzada</li>
            <li>Bahías para almacenamiento: internas para SSD y HDD</li>
            <li>Puertos frontales: 2x USB 3.0, 2x USB 2.0, HD Audio</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 1249990,
    image: pcGamerImage,
    marca: "HP",
    categoria: "Computadoras",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/pc-gamer-sp-labs-nomad-ryzen-7-7700x-rx-9070xt-ram-32gb-2x16gb-ddr5-ssd-1tb-nvme-freedos/?srsltid=AfmBOooWGf1RJXdI4jV5uwaF-aVDJYuRKapWr5BQH6iXM0c997eqotxn*/
    id: 'PC002',
    name: 'PC Gamer SP Labs Nomad, Ryzen 7 7700X, RX 9070XT, RAM 32GB (2x16GB) DDR5, SSD 1TB NVMe, FreeDOS',
    description: 'PC',
    descriptionmodal:`
      <ul>
        <li>La PC Gamer SP Labs Nomad es un equipo de alto rendimiento diseñado para gaming exigente y tareas que requieren potencia. Está equipada con un procesador AMD Ryzen 7 7700X, que ofrece un excelente rendimiento de CPU para juegos modernos y multitarea avanzada.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Procesador: AMD Ryzen 7 7700X</li>
            <li>Tarjeta gráfica: AMD Radeon RX 9070 XT</li>
            <li>Memoria RAM: 32GB DDR5 (2x16GB)</li>
            <li>Almacenamiento: SSD NVMe de 1TB</li>
            <li>Sistema operativo: FreeDOS (sin SO preinstalado)</li>
            <li>Ideal para gaming en alta resolución y multitarea intensiva</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 2499990,
    image: pc1,
    marca: "SP Labs",
    categoria: "Computadoras",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/pc-gamer-r3-5300g-16gb-rgb-2x8-rgb-512gb-nvme-wifi-freedos/?srsltid=AfmBOopa8SarCWcCLA1wuqd2x0d5hT55qaJkbKJz20L3TL3tYYtgy4gc*/
    id: 'PC003',
    name: 'PC Gamer ARGB 1, Ryzen 3 5300G, 16GB RGB, 512GB NVMe, WiFi, ARGB, FreeDOS (Sin SO)',
    description: 'PC',
    descriptionmodal:`
      <ul>
        <li>La PC Gamer ARGB 1 es un equipo diseñado para gaming y tareas cotidianas con un buen equilibrio entre rendimiento y estética gracias a su iluminación ARGB. Está equipada con un procesador AMD Ryzen 3 5300G, que incluye gráficos integrados Radeon Vega, suficiente para juegos y tareas básicas sin necesidad de una tarjeta gráfica dedicada. </li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Procesador: AMD Ryzen 3 5300G con gráficos integrados Radeon Vega</li>
            <li>Memoria RAM: 16GB DDR4 RGB</li>
            <li>Almacenamiento: SSD NVMe de 512GB</li>
            <li>Conectividad: WiFi integrado</li>
            <li>Iluminación: ARGB personalizable</li>
            <li>Sistema operativo: FreeDOS (sin SO preinstalado)</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 540670,
    discount: 0.14,
    image: pc2,
    marca: "Armados",
    categoria: "Computadoras",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/pc-gamer-r5-550016gb-u100512g-nvme-g4000rtx-3060-12gb-wc-240wifi/?srsltid=AfmBOorKxDiBu5KEVMCAgF3ZQZv-C-MfVq9YmUc-0rizqTy_okIw6EEC*/
    id: 'PC004',
    name: 'PC Gamer ARGH 4, Ryzen 5 5500, RTX 3060, 16GB RGB, 512GB NVMe, Watercooling, Wi-Fi, Freedos',
    description: 'PC',
    descriptionmodal:`
      <ul>
        <li>La PC Gamer ARGH 4 está diseñada para brindar un sólido rendimiento en juegos y tareas multitarea gracias a sus componentes modernos y eficientes. Está equipada con un procesador AMD Ryzen 5 5500 de 6 núcleos que ofrece buen desempeño para gaming y productividad.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Procesador: AMD Ryzen 5 5500, 6 núcleos</li>
            <li>Tarjeta gráfica: NVIDIA RTX 3060 con 12GB VRAM</li>
            <li>Memoria RAM: 16GB DDR4 RGB</li>
            <li>Almacenamiento: SSD NVMe de 512GB</li>
            <li>Refrigeración: Watercooling con iluminación ARGB</li>
            <li>Conectividad: Wi-Fi integrado</li>
            <li>Sistema operativo: FreeDOS (sin SO preinstalado)</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 1167980,
    discount: 0.14,
    image: pc3,
    marca: "Armados",
    categoria: "Computadoras",
    estado: "preparacion"
  },
  /*Componentes*/
  {
    id: 'CP001',
    name: 'Gabinete de PC Gamer RGB',
    description: 'Gabinete con panel de vidrio templado y ventilación eficiente.',
    descriptionmodal:`
      <ul>
        <li>Un gabinete con panel de vidrio templado y ventilación eficiente es un chasis para PC que combina una estética moderna con un rendimiento térmico óptimo. El panel de vidrio templado generalmente se encuentra en uno o ambos lados del gabinete, permitiendo una visualización clara y elegante de los componentes internos, especialmente útil para mostrar sistemas con iluminación RGB y una gestión de cables limpia.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Panel lateral de vidrio templado de 4 a 6 mm de grosor para mostrar interior del PC</li>
            <li>Diseño robusto y rigidez extra por el vidrio templado</li>
            <li>Múltiples ventiladores preinstalados (generalmente 3 a 6) con iluminación RGB opcional</li>
            <li>Espacios para instalar ventiladores adicionales y radiadores para refrigeración líquida</li>
            <li>Diseño de doble cámara para separar la fuente de poder y almacenamiento del resto de componentes, optimizando la circulación de aire</li>
            <li>Puertos frontales USB 3.0/3.2, USB-C, y audio accesibles para comodidad</li>
            <li>Sistema de gestión de cables para mantener interior ordenado y favorecer flujo de aire</li>
            <li>Filtros anti-polvo removibles para facilitar limpieza y mantener la limpieza interna</li>
            <li>Compatible con placas base de varios tamaños (ATX, Micro-ATX, ITX) y tarjetas gráficas grandes</li>
        </ul>
        </li>
      </ul>`,
    price: 69990,
    image: cajaPcImage,
    marca: "Cooler Master",
    categoria: "Componentes",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/mag-coreliquid-a13-360/?srsltid=AfmBOoqXdWlPYbJzE6Ugyq98LOLQYwBW9-6xevEvDpSPj3ezhqUZq7EW*/
    id: 'CP002',
    name: 'Refrigeración Líquida MSI MAG CORELIQUID A13 360, 360mm, ARGB, Intel LGA 1700/1851, AMD AM4/AM5',
    description: 'Refrigeración Líquida.',
    descriptionmodal:`
      <ul>
        <li>La refrigeración líquida MSI MAG CORELIQUID A13 360 es un sistema todo en uno (AIO) diseñado para ofrecer un rendimiento térmico superior y una estética moderna para PCs de alto rendimiento y gaming.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Refrigeración líquida todo en uno (AIO)</li>
            <li>Radiador: 360 mm, aluminio con alta eficiencia térmica</li>
            <li>Ventiladores: 3 x 120 mm CycloBlade ARGB Gen2, 600-2000 RPM, flujo de aire 62.6 CFM</li>
            <li>Bomba: 3800 RPM ± 10%, cojinetes cerámicos, 20 dBA ruido promedio</li>
            <li>Base: Cobre con microcanales de 0.1 mm para mejor disipación</li>
            <li>Tubos: EPDM con malla de nailon, resistente a corrosión y envejecimiento</li>
            <li>Compatibilidad: Intel LGA 1700 / 1851, AMD AM4 / AM5</li>
            <li>Iluminación: ARGB Gen2 sincronizable con MSI Mystic Light</li>
            <li>Dimensiones radiador: 394 x 119.6 x 27 mm</li>
            <li>Vida útil ventiladores: 40,000 horas a 40 °C</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 104490,
    image: refri1,
    marca: "MSI",
    categoria: "Componentes",
    estado: "preparacion"
  },
  /*Audifonos Bluetooth*/
  {
    id: 'AB001',
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    descriptionmodal:`
      <ul>
        <li>Los auriculares inalámbricos con cancelación de ruido son dispositivos diseñados para ofrecer una experiencia auditiva inmersiva al reducir activamente el ruido ambiental.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tecnología de cancelación activa de ruido (ANC) para bloquear sonidos ambientales</li>
            <li>Micrófonos integrados para detectar ruido y generar señales de cancelación en tiempo real</li>
            <li>Aislamiento pasivo mediante almohadillas que sellan el oído para reducir ruido externo</li>
            <li>Conectividad inalámbrica vía Bluetooth para movilidad y comodidad</li>
            <li>Batería recargable con autonomía que varía entre 15 y 50 horas según modelo</li>
            <li>Control de volumen y reproducción multimedia desde los auriculares</li>
        </ul>
        </li>
      </ul>`,
    price: 54990,
    image: bluetoothHeadsetImage,
    marca: "Sony",
    categoria: "Audio",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/mini-pod-touch-fiddler-colors-morado/?srsltid=AfmBOorhzf5nU6IDZaFt8bjHq_kO8UMI0XXvAUHmYMTpeJDxlUxLSsOJ*/
    id: 'AB002',
    name: 'Audífonos Inalámbricos Bluetooth Fiddler Mini Pod Touch, Color Morado',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    descriptionmodal:`
      <ul>
        <li>Los Audífonos Inalámbricos Bluetooth Fiddler Mini Pod Touch en color morado son unos auriculares compactos y cómodos, diseñados para ofrecer una experiencia inalámbrica práctica y funcional con buena calidad de sonido.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Conectividad: Bluetooth 5.0</li>
            <li>Autonomía: Hasta 5 horas de reproducción y llamadas</li>
            <li>Tiempo de carga: 1-2 horas</li>
            <li>Micrófono integrado para llamadas y asistente de voz</li>
            <li>Diseño compacto y ergonómico</li>
            <li>Compatible con Android e iOS</li>
            <li>Alcance inalámbrico aproximado de 10 metros</li>
        </ul>
        </li>
      </ul>`,
    price: 14990,
    discount: 0.46,
    image: audiblu2,
    marca: "Fiddler",
    categoria: "Audio",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/audifonos-gamer-inalambricos-primus-gaming-arcus-230-in-ear-para-celular-diseno-grogu/*/
    id: 'AB003',
    name: 'Audífonos Gamer Inalámbrico Primus Gaming ARCUS 230, In-Ear, para Celular, Diseño Grogu',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    descriptionmodal:`
      <ul>
        <li>Los Audífonos Gamer Inalámbricos Primus Gaming ARCUS 230 son auriculares intraurales True Wireless (TWS) diseñados especialmente para gamers y amantes de Star Wars, con un diseño exclusivo de edición limitada inspirado en Grogu.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Audífonos inalámbricos True Wireless (TWS) in-ear</li>
            <li>Conectividad: Bluetooth 5.3 con baja latencia (56 ms) y alcance de 10 m</li>
            <li>Control: Botón táctil multifunción en los auriculares</li>
            <li>Drivers: 13 mm para sonido claro y detallado</li>
            <li>Micrófono: HD omnidireccional para llamadas nítidas</li>
            <li>Autonomía: Hasta 3 horas por carga, 14 horas con estuche de carga</li>
            <li>Resistencia: IPX2 (resistente al sudor)</li>
        </ul>
        </li>
      </ul>`,
    price: 29990,
    discount: 0.27,
    image: audiblu3,
    marca: "Primus Gaming",
    categoria: "Audio",
    juego: "Star Wars",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/primus-gaming-true-wireless-earphones-para-cellular-phone-para-home-audio-para-portable-elec/*/
    id: 'AB004',
    name: 'Audífonos Gamer Inalámbrico Primus Arcus 240 Stormtrooper TWS Bluetooth 5.3, 9mm, IPX4, Blanco',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    descriptionmodal:`
      <ul>
        <li>Los Audífonos Gamer Inalámbricos Primus Arcus 240 Stormtrooper TWS Bluetooth 5.3 en color blanco son unos auriculares intraurales True Wireless diseñados para gamers y fanáticos de Star Wars, con un diseño exclusivo de edición limitada inspirado en el icónico Stormtrooper.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: True Wireless (TWS) in-ear, inalámbricos</li>
            <li>Conectividad: Bluetooth 5.3 con baja latencia (56 ms)</li>
            <li>Drivers: 9 mm de alta precisión para sonido nítido</li>
            <li>Micrófono integrado para llamadas claras</li>
            <li>Resistencia: IPX4 (resistente a sudor y salpicaduras)</li>
            <li>Autonomía: Hasta 21 horas con estuche de carga</li>
            <li>Control táctil en auriculares para funciones multimedia</li>
            <li>Diseño exclusivo inspirado en Stormtrooper (Star Wars)</li>
        </ul>
        </li>
      </ul>`,
    price: 22240,
    discount: 0.18,
    image: audiblu4,
    marca: "Primus Gaming",
    categoria: "Audio",
    juego: "Star Wars",
    estado: "preparacion"
  },
  /*Keycaps*/
  {
    id: 'KC001',
    name: 'Clove Keycaps',
    description: 'Keycaps de Valorant',
    descriptionmodal:`
      <ul>
        <li>Los keycaps de Valorant son cubiertas de teclas personalizadas con diseños inspirados en el popular juego de disparos táctico Valorant.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Compatibilidad: adaptables a teclados mecánicos con switches estilo Cherry</li>
            <li>Material: comunes en plástico ABS o PBT (más duradero)</li>
            <li>Incluye 14 piezas</li>
        </ul>
        </li>
      </ul>`,
    price: 3990,
    image: keycap1,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant",
    estado: "preparacion"
  },
  {
    id: 'KC002',
    name: 'Reyna Keycaps',
    description: 'Keycaps de Valorant',
    descriptionmodal:`
      <ul>
        <li>Los keycaps de Valorant son cubiertas de teclas personalizadas con diseños inspirados en el popular juego de disparos táctico Valorant.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Compatibilidad: adaptables a teclados mecánicos con switches estilo Cherry</li>
            <li>Material: comunes en plástico ABS o PBT (más duradero)</li>
            <li>Incluye 14 piezas</li>
        </ul>
        </li>
      </ul>`,
    price: 3990,
    image: keycap6,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant",
    estado: "preparacion"
  },
  {
    id: 'KC003',
    name: 'Iso Keycaps',
    description: 'Keycaps de Valorant',
    descriptionmodal:`
      <ul>
        <li>Los keycaps de Valorant son cubiertas de teclas personalizadas con diseños inspirados en el popular juego de disparos táctico Valorant.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Compatibilidad: adaptables a teclados mecánicos con switches estilo Cherry</li>
            <li>Material: comunes en plástico ABS o PBT (más duradero)</li>
            <li>Incluye 14 piezas</li>
        </ul>
        </li>
      </ul>`,
    price: 3990,
    image: keycap2,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant",
    estado: "preparacion"
  },
  {
    id: 'KC004',
    name: 'Jett Keycaps',
    description: 'Keycaps de Valorant',
    descriptionmodal:`
      <ul>
        <li>Los keycaps de Valorant son cubiertas de teclas personalizadas con diseños inspirados en el popular juego de disparos táctico Valorant.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Compatibilidad: adaptables a teclados mecánicos con switches estilo Cherry</li>
            <li>Material: comunes en plástico ABS o PBT (más duradero)</li>
            <li>Incluye 14 piezas</li>
        </ul>
        </li>
      </ul>`,
    price: 3990,
    image: keycap3,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant",
    estado: "preparacion"
  },
  {
    id: 'KC005',
    name: 'Killjoy Keycaps',
    description: 'Keycaps de Valorant',
    descriptionmodal:`
      <ul>
        <li>Los keycaps de Valorant son cubiertas de teclas personalizadas con diseños inspirados en el popular juego de disparos táctico Valorant.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Compatibilidad: adaptables a teclados mecánicos con switches estilo Cherry</li>
            <li>Material: comunes en plástico ABS o PBT (más duradero)</li>
            <li>Incluye 14 piezas</li>
        </ul>
        </li>
      </ul>`,
    price: 3990,
    image: keycap4,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant",
    estado: "preparacion"
  },
  {
    id: 'KC006',
    name: 'Raze Keycaps',
    description: 'Keycaps de Valorant',
    descriptionmodal:`
      <ul>
        <li>Los keycaps de Valorant son cubiertas de teclas personalizadas con diseños inspirados en el popular juego de disparos táctico Valorant.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Compatibilidad: adaptables a teclados mecánicos con switches estilo Cherry</li>
            <li>Material: comunes en plástico ABS o PBT (más duradero)</li>
            <li>Incluye 14 piezas</li>
        </ul>
        </li>
      </ul>`,
    price: 3990,
    image: keycap5,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant",
    estado: "preparacion"
  },
  {
    id: 'KC007',
    name: 'Sage Keycaps',
    description: 'Keycaps de Valorant',
    descriptionmodal:`
      <ul>
        <li>Los keycaps de Valorant son cubiertas de teclas personalizadas con diseños inspirados en el popular juego de disparos táctico Valorant.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Compatibilidad: adaptables a teclados mecánicos con switches estilo Cherry</li>
            <li>Material: comunes en plástico ABS o PBT (más duradero)</li>
            <li>Incluye 14 piezas</li>
        </ul>
        </li>
      </ul>`,
    price: 3990,
    image: keycap7,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant",
    estado: "preparacion"
  },
  {
    id: 'KC008',
    name: 'Yoru Keycaps',
    description: 'Keycaps de Valorant',
    descriptionmodal:`
      <ul>
        <li>Los keycaps de Valorant son cubiertas de teclas personalizadas con diseños inspirados en el popular juego de disparos táctico Valorant.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Compatibilidad: adaptables a teclados mecánicos con switches estilo Cherry</li>
            <li>Material: comunes en plástico ABS o PBT (más duradero)</li>
            <li>Incluye 14 piezas</li>
        </ul>
        </li>
      </ul>`,
    price: 3990,
    image: keycap8,
    marca: "KeycapLand",
    categoria: "Keycaps",
    juego: "Valorant",
    estado: "preparacion"
  },
  /*Mousepad*/
  {
    id: 'MP001',
    name: 'Omen Mousepad',
    description: 'Mousepad de Valorant',
    descriptionmodal:`
      <ul>
        <li>Es una alfombrilla diseñada especialmente para gamers que buscan precisión, control y una estética relacionada con el popular juego competitivo Valorant.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Superficie texturizada para equilibrio entre velocidad y control</li>
            <li>Materiales de alta calidad (poliéster, goma antideslizante)</li>
            <li>Bordes cosidos para mayor durabilidad y evitar deshilachados</li>
        </ul>
        </li>
      </ul>`,
    price: 14990,
    image: mousepad1,
    marca: "MousepadLab",
    categoria: "Mousepad",
    juego: "Valorant",
    estado: "preparacion"
  },
  {
    id: 'MP002',
    name: 'Phoenix Mousepad',
    description: 'Mousepad de Valorant',
    descriptionmodal:`
      <ul>
        <li>Es una alfombrilla diseñada especialmente para gamers que buscan precisión, control y una estética relacionada con el popular juego competitivo Valorant.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Superficie texturizada para equilibrio entre velocidad y control</li>
            <li>Materiales de alta calidad (poliéster, goma antideslizante)</li>
            <li>Bordes cosidos para mayor durabilidad y evitar deshilachados</li>
        </ul>
        </li>
      </ul>`,
    price: 14990,
    image: mousepad2,
    marca: "MousepadLab",
    categoria: "Mousepad",
    juego: "Valorant",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/mousepad-gamer-steelseries-qck-edge-xl-63824/?srsltid=AfmBOoocWe9OnpirnaZlXLPl89yPjHX6GhlDJVZ4sUfq3xUGgENTFUkB*/
    id: 'MP003',
    name: 'Mouse Pad Gamer SteelSeries QCK EDGE XL, 90x30cm',
    description: 'Mousepad',
    descriptionmodal:`
      <ul>
        <li>El Mouse Pad Gamer SteelSeries QCK EDGE XL es una alfombrilla de gran tamaño diseñada para jugadores que buscan máxima precisión y durabilidad en sus sesiones de juego.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tamaño XL: 900 x 300 x 2 mm</li>
            <li>Superficie: Tela microtejida QcK exclusiva para control preciso y suave</li>
            <li>Bordes: Cosidos para evitar deshilachados y pelados</li>
            <li>Base: Goma antideslizante para máxima estabilidad</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 34990,
    discount: 0.50,
    image: mousepad3,
    marca: "SteelSeries",
    categoria: "Mousepad",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/primus-gaming-mouse-pad-grogu-mouse-pad-m/*/
    id: 'MP004',
    name: 'Mouse Pad Gamer Primus Gaming Arena M Star Wars Limited Edition, 32x27 cm, Diseño Grogu - Baby Yoda',
    description: 'Mousepad',
    descriptionmodal:`
      <ul>
        <li>El Mouse Pad Gamer Primus Gaming Arena M Star Wars Limited Edition con diseño Grogu (Baby Yoda) es una alfombrilla de tamaño medio (32 x 27 cm) que combina funcionalidad y estética para gamers y fanáticos de la saga.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tamaño: 32 cm (ancho) x 27 cm (largo) x 0.3-0.4 cm (grosor)</li>
            <li>Superficie: Tela microtexturizada para deslizamiento suave y precisión</li>
            <li>Base: Goma antideslizante natural para estabilidad</li>
            <li>Bordes: Reforzados con costuras para mayor durabilidad</li>
            <li>Diseño exclusivo de Grogu (Baby Yoda) en alta definición</li>
        </ul>
        </li>
      </ul>`,
    price: 19990,
    discount: 0.43,
    image: mousepad4,
    marca: "Primus Gaming",
    categoria: "Mousepad",
    juego: "Star Wars",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/primus-gaming-mouse-pad-dark-side-mousepad-m/*/
    id: 'MP005',
    name: 'Mouse Pad Gamer Primus Gaming Arena M Star Wars Limited Edition, 32x27 cm, Diseño Dark Side',
    description: 'Mousepad',
    descriptionmodal:`
      <ul>
        <li>El Mouse Pad Gamer Primus Gaming Arena M Star Wars Limited Edition con diseño Dark Side es una alfombrilla de tamaño medio (32 x 27 cm) pensada para gamers que buscan combinación de rendimiento y estética temática inspirada en el lado oscuro del universo Star Wars.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tamaño: 32 cm (ancho) x 27 cm (largo) x 0.3 cm (grosor)</li>
            <li>Material superficie: Tela microtexturizada premium</li>
            <li>Base: Goma natural antideslizante para máxima estabilidad</li>
            <li>Bordes: Costuras reforzadas para mayor durabilidad</li>
            <li>Diseño temático Dark Side de Star Wars en alta definición</li>
        </ul>
        </li>
      </ul>`,
    price: 19990,
    discount: 0.45,
    image: mousepad5,
    marca: "Primus Gaming",
    categoria: "Mousepad",
    juego: "Star Wars",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/mousepad-gamer-primus-gaming-arena-xxl-star-wars-limited-edition-90x42-cm-diseno-grogu-baby-yoda/*/
    id: 'MP006',
    name: 'Mouse Pad Gamer Primus Gaming Arena XXL Star Wars Limited Edition, 90x42 cm, Diseño Grogu Baby Yoda',
    description: 'Mousepad',
    descriptionmodal:`
      <ul>
        <li>El Mouse Pad Gamer Primus Gaming Arena XXL Star Wars Limited Edition con diseño Grogu (Baby Yoda) es una alfombrilla de gran tamaño, 90 x 42 cm, creada para ofrecer una experiencia de juego precisa y cómoda, combinando funcionalidad con una temática exclusiva de Star Wars.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tamaño: 90 cm (ancho) x 42 cm (largo) x 0.3 cm (grosor)</li>
            <li>Material superficie: Tela de microfibra suave para precisión y velocidad en el deslizamiento</li>
            <li>Base: Goma natural antideslizante de alta calidad para estabilidad</li>
            <li>Bordes: Costuras reforzadas que previenen desgaste</li>
        </ul>
        </li>
      </ul>`,
    price: 29990,
    discount: 0.37,
    image: mousepad6,
    marca: "Primus Gaming",
    categoria: "Mousepad",
    juego: "Star Wars",
    estado: "preparacion"
  },
  /*Limpieza PC*/
  {
    /*https://www.spdigital.cl/set-de-limpieza-pantalla-philco-3-en-1/?srsltid=AfmBOorEDuT8cmuUOGJOsFyovXtEGOm6ijLz_YlQAE4TBE4GmgSnR39X*/
    id: 'LP001',
    name: 'Set de Limpieza Pantalla Philco 3 en 1',
    description: 'Set limpieza',
    descriptionmodal:`
      <ul>
        <li>El Set de Limpieza Pantalla Philco 3 en 1 es un kit diseñado para mantener limpias y protegidas las pantallas de diversos dispositivos electrónicos, como notebooks, smart TVs, LCD, LED, cámaras digitales, tablets y smartphones.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Función 3 en 1: limpia, protege y no deja manchas</li>
            <li>Solución limpiadora de 200 ml con fórmula segura y efectiva</li>
            <li>Paño limpiador suave para evitar rayones</li>
            <li>Cepillo para remover polvo en áreas difíciles</li>
        </ul>
        </li>
      </ul>`,
    price: 6400,
    discount: 0.35,
    image: limpieza1,
    marca: "Philco",
    categoria: "Limpieza Pc",
    estado: "preparacion"
  },
  /*Microfonos*/
  {
    /*https://www.spdigital.cl/microfono-para-streaming-redragon-fenris-gm301-rgb-montura-anti-vibracion-conexion-por-usb/?srsltid=AfmBOoqnFBiIftW6jbVqqNxMfANTLtfZL7f6D4Q9nG9GSZTtJO_dgcwW*/
    id: 'MF001',
    name: 'Micrófono para Streaming Redragon Fenris GM301, RGB, Montura Anti Vibración, Conexión por USB',
    description: 'Microfono Redragon',
    descriptionmodal:`
      <ul>
        <li>Micrófono de condensador diseñado especialmente para streamers, podcasters y creadores de contenido que buscan calidad de sonido profesional y facilidad de uso. </li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Micrófono de condensador unidireccional cardioide</li>
            <li>Conexión: USB Plug and Play, cable de 1.8 metros</li>
            <li>Sensibilidad: -45 ± 3 dB</li>
            <li>Respuesta de frecuencia: 50 Hz - 20 kHz</li>
            <li>Iluminación: RGB ajustable con varios modos y colores fijos</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 59990,
    discount: 0.23,
    image: micro1,
    marca: "Redragon",
    categoria: "Microfonos",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/micr%C3%B3fono-profesional-gamer-rgb-hyperx-quadcast-s-montura-anti-vibraciones-tres-condensadores/?srsltid=AfmBOooS0FJfaOBPEMjldqRJEGA10CL0q7T-ZwaIrfV42vbJ5wCvjKsC*/
    id: 'MF002',
    name: 'Micrófono para Streaming HyperX QuadCast S RGB, Montura Antivibraciones, Tres Condensadores',
    description: 'Microfono HyperX',
    descriptionmodal:`
      <ul>
        <li>Un micrófono de condensador USB diseñado para streamers, podcasters y creadores de contenido que buscan alta calidad de audio y personalización.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Micrófono USB de condensador con tres cápsulas de 14 mm</li>
            <li>Patrones polares: Cardioide, omnidireccional, bidireccional y estéreo</li>
            <li>Respuesta de frecuencia: 20 Hz - 20 kHz</li>
            <li>Sensibilidad: -36 dB (1 V/Pa a 1 kHz)</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 199990,
    image: micro2,
    marca: "HyperX",
    categoria: "Microfonos",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/micr%C3%B3fono-de-condensador-fifine-k669b-streaming-pc-mac-ps4/?srsltid=AfmBOoqdiGll6-6MzPnUdhwTgSM9zmC12v8oA-i93yaXBkcxyVX7zbJS*/
    id: 'MF003',
    name: 'Micrófono para Streaming Fifine K669B, Streaming, PC, Mac, PS4, Condensador',
    description: 'Microfono Fifine',
    descriptionmodal:`
      <ul>
        <li>Micrófono de condensador USB diseñado para ofrecer calidad profesional de audio en streaming, podcasts, grabaciones y videollamadas. Cuenta con un patrón polar cardioide que captura la voz con precisión mientras reduce los ruidos de fondo, como ventiladores o teclados, para lograr un sonido claro y nítido.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Micrófono de condensador USB</li>
            <li>Patrón polar: Cardioide (unidireccional)</li>
            <li>Respuesta de frecuencia: 20 Hz - 20 kHz</li>
            <li>Sensibilidad: -34 dB ± 30% a 1 kHz</li>
            <li>Relación señal/ruido: 78 dB</li>
            <li>Conexión: USB Plug and Play (USB 2.0)</li>
            <li>Compatibilidad: Windows, Mac, PS4, iPhone (con adaptador)</li>
        </ul>
        </li>
      </ul>`,
    price: 44200,
    discount: 0.34,
    image: micro3,
    marca: "Fifine",
    categoria: "Microfonos",
    estado: "preparacion"
  },
  {
    /*https://www.spdigital.cl/988-000568-microfonoyeti-gx-negro/?srsltid=AfmBOoq5fc42dL2PLXqbzFYX6LASqOcRO7rUjFyiji97-5x4-znQlsTd*/
    id: 'MF004',
    name: 'Micrófono Gamer Logitech G Yeti GX, RGB dinámico para gaming con LIGHTSYNC, Blue VO!CE',
    description: 'Microfono Logitech',
    descriptionmodal:`
      <ul>
        <li>Micrófono dinámico USB premium diseñado específicamente para gaming y streaming, con iluminación RGB dinámica personalizable mediante LIGHTSYNC.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tipo: Micrófono USB dinámico</li>
            <li>Patrón polar: Supercardioide (captación frontal con rechazo lateral y trasero)</li>
            <li>Calidad de audio: 24 bits/96 kHz</li>
            <li>Respuesta de frecuencia: 60 Hz - 18.5 kHz</li>
            <li>SPL máximo: 135 dB (Distorsión armónica total 1%)</li>
            <li>Relación señal/ruido: 78 dB</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 199990,
    discount: 0.30,
    image: micro4,
    marca: "Logitech",
    categoria: "Microfonos",
    estado: "preparacion"
  },
  /*Figuras*/
  {
    /*https://www.weplay.cl/pop-games-cyberpunk-2077-takemura.html*/
    id: 'FG001',
    name: 'POP Games: Cyberpunk 2077- Takemura',
    description: 'Funko',
    descriptionmodal:`
      <ul>
        <li>Personaje destacado en Cyberpunk 2077 que desempeña el rol de antiguo guardaespaldas personal de Saburo Arasaka, el poderoso CEO de la megacorporación Arasaka.</li>  
        <li><b>Caracteristicas:</b> Vinilo (PVC), un material plástico que les otorga ligereza, resistencia y una textura suave.</li>
      </ul>`,
    price: 8990,
    image: fig1,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Cyberpunk",
    estado: "preparacion"
  },
  {
    /*https://www.weplay.cl/figura-5-star-fallout-s2-assaultron-gw.html*/
    id: 'FG002',
    name: 'FIGURA 5 STAR: FALLOUT S2 - ASSAULTRON (GW)',
    description: 'Funko',
    descriptionmodal:`
      <ul>
        <li>La figura 5 Star: Fallout S2 - Assaultron (GW) es una pieza coleccionable basada en el icónico robot Assaultron del universo Fallout.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Producto: Figura 5 Star de Fallout S2 - Assaultron</li>
            <li>Material: Vinilo duradero</li>
            <li>Altura aproximada: 8 cm</li>
            <li>Articulación: Varios puntos para pose flexible</li>
            <li>Diseño: Detallado, recrea fielmente el personaje del videojuego</li>
        </ul>
        </li>
      </ul>`,
    price: 4990,
    image: fig2,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Fallout",
    estado: "preparacion"
  },
  {
    /*https://www.weplay.cl/figura-5-star-fallout-s2-vault-boy-pyromaniac.html*/
    id: 'FG003',
    name: 'FIGURA 5 STAR: FALLOUT S2 - VAULT BOY (PYROMANIAC)',
    description: 'Funko',
    descriptionmodal:`
      <ul>
        <li>La figura Funko POP Games: Borderlands 3 - Female Psycho es una figura coleccionable de vinilo basada en el icónico personaje Female Psycho del videojuego Borderlands 3.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Producto: Figura Funko POP Games de Female Psycho de Borderlands 3</li>
            <li>Material: Vinilo/plástico</li>
            <li>Altura aproximada: 10 cm (3 3/4 pulgadas)</li>
            <li>Diseño: Representa la pose y máscara característica del personaje</li>
            <li>Empaque: Caja con ventana para exhibición</li>
        </ul>
        </li>
      </ul>`,
    price: 4990,
    image: fig3,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Fallout",
    estado: "preparacion"
  },
  {
    /*https://www.weplay.cl/pop-games-borderlands-3-female-psycho.html*/
    id: 'FG004',
    name: 'POP Games: Borderlands 3 - Female Psycho',
    description: 'Funko',
    descriptionmodal:`
      <ul>
        <li>La figura Funko POP Games: Borderlands 3 - Female Psycho es una figura coleccionable de vinilo con una altura aproximada de 10 cm (3 3/4 pulgadas).</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Material de vinilo de alta calidad</li>
            <li>Diseño fiel al personaje original, con detalles meticulosos que capturan su actitud y apariencia única</li>
        </ul>
        </li>
      </ul>`,
    price: 8990,
    image: fig4,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Borderlands",
    estado: "preparacion"
  },
  {
    /*https://www.weplay.cl/pop-sale-figura-pop-star-wars-solo-w1-qi-ra.html*/
    id: 'FG005',
    name: 'POP-FIGURA POP STAR WARS: SOLO W1 - QIRA',
    description: 'Funko',
    descriptionmodal:`
      <ul>
        <li>La figura POP Star Wars: Solo W1 - Qira es una figura coleccionable de vinilo basada en Qi'ra, uno de los personajes principales de la película "Solo: A Star Wars Story". Esta figura forma parte de la línea POP de Funko, que se caracteriza por su diseño estilizado y detalles llamativos que capturan la esencia única de cada personaje.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Producto: Figura Funko POP de Qi'ra de Star Wars - Solo W1</li>
            <li>Material: Vinilo/plástico de alta calidad</li>
            <li>Altura: Aproximadamente 9.5 cm (3 3/4 pulgadas)</li>
        </ul>
        </li>
      </ul>`,
    price: 8990,
    image: fig5,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Star Wars",
    estado: "preparacion"
  },
  {
    /*https://www.weplay.cl/figura-pop-games-borderlands-butt-stallion-exclusivo-weplay-nycc-2019.html*/
    id: 'FG006',
    name: 'POP Games: Borderlands - Butt Stallion EXCLUSIVO WEPLAY NYCC-2019',
    description: 'Funko',
    descriptionmodal:`
      <ul>
        <li>Edición limitada y exclusiva lanzada para la Convención de Nueva York (NYCC) en 2019. Representa a Butt Stallion, un icónico personaje del universo Borderlands que es un unicornio glamuroso y lleno de estilo, conocido dentro del juego por ser una mascota y símbolo de lujo.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Producto: Figura Funko POP Games exclusiva NYCC 2019</li>
            <li>Personaje: Butt Stallion de Borderlands</li>
            <li>Material: Vinilo resistente</li>
            <li>Altura: Entre 9 y 10 cm</li>
        </ul>
        </li>
      </ul>`,
    price: 9990,
    image: fig6,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Borderlands",
    estado: "preparacion"
  },
  {
    /*https://www.weplay.cl/pop-games-league-of-legends-lucian.html*/
    id: 'FG007',
    name: 'POP Games: League of Legends - Lucian',
    description: 'Funko',
    descriptionmodal:`
      <ul>
        <li>Lucian es conocido como "El Purificador" y es caracterizado como un cazador implacable de la oscuridad, que usa armas de fuego en batalla.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Producto: Figura Funko POP Games de Lucian de League of Legends</li>
            <li>Material: Vinilo/plástico sin PVC</li>
            <li>Altura: Aproximadamente 9 cm</li>
            <li>Diseño: Representa a Lucian con sus pistolas, traje y pose característica</li>
        </ul>
        </li>
      </ul>`,
    price: 15990,
    image: fig7,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "League Of Legends",
    estado: "preparacion"
  },
  {
    /*https://www.weplay.cl/pop-games-league-of-legends-senna.html*/
    id: 'FG008',
    name: 'POP Games: League of Legends - Senna',
    description: 'Funko',
    descriptionmodal:`
      <ul>
        <li>Senna es conocida por ser una campeona con habilidades únicas en la lucha contra las fuerzas oscuras, y esta figura captura su esencia con detalles que reflejan su apariencia y estilo característicos en el juego.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Producto: Figura Funko POP Games de Senna de League of Legends</li>
            <li>Material: Vinilo/plástico sin PVC</li>
            <li>Altura: Aproximadamente 10 cm (4 pulgadas)</li>
        </ul>
        </li>
      </ul>`,
    price: 15990,
    image: fig8,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "League Of Legends",
    estado: "preparacion"
  },
  {
    /*https://www.weplay.cl/pop-games-league-of-legends-viego.html*/
    id: 'FG009',
    name: 'POP Games: League of Legends - Viego',
    description: 'Funko',
    descriptionmodal:`
      <ul>
        <li>Figura coleccionable de vinilo que representa a Viego, conocido como el Rey Arruinado, un personaje emblemático del videojuego League of Legends.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Producto: Figura Funko POP Games de Viego de League of Legends</li>
            <li>Material: Vinilo de alta calidad</li>
            <li>Altura: Aproximadamente entre 9 y 11 cm</li>
        </ul>
        </li>
      </ul>`,
    price: 18990,
    image: fig9,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "League Of Legends",
    estado: "preparacion"
  },
  {
    /*https://www.weplay.cl/pop-games-league-of-legends-ahri.html*/
    id: 'FG010',
    name: 'POP Games: League of Legends - Ahri',
    description: 'Funko',
    descriptionmodal:`
      <ul>
        <li>Ahri es conocida por ser una poderosa maga con la habilidad de manipular esencia espiritual y atraer a sus enemigos con su encanto, y la figura refleja su esencia con detalles de sus nueve colas características.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Producto: Figura Funko POP Games de Ahri de League of Legends</li>
            <li>Material: Vinilo/plástico de alta calidad</li>
        </ul>
        </li>
      </ul>`,
    price: 18990,
    image: fig10,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "League Of Legends",
    estado: "preparacion"
  },
  {
    /*https://www.weplay.cl/pop-games-five-nights-at-freddy-s-ruin-eclipse.html*/
    id: 'FG011',
    name: 'POP Games: Five Nights At Freddy´s RUIN- Eclipse',
    description: 'Funko',
    descriptionmodal:`
      <ul>
        <li>La figura POP Games: Five Nights At Freddy's RUIN - Eclipse es una figura coleccionable de vinilo inspirada en el oscuro y aterrador personaje Eclipse del videojuego Five Nights at Freddy's: Security Breach - Ruin.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Producto: Figura Funko POP Games de Eclipse de Five Nights at Freddy's</li>
            <li>Serie: Security Breach - Ruin</li>
            <li>Altura: Aproximadamente 11.5 cm</li>
        </ul>
        </li>
      </ul>`,
    price: 16990,
    image: fig11,
    marca: "Pop",
    categoria: "Funko Pop",
    juego: "Five Nights At Freddys",
    estado: "preparacion"
  },
  {
    id: 'SG004',
    name: 'Silla Gamer Profesional Cougar Armor Elite White, Reclinable 160°, Brazos 2D, Hasta 120kg ',
    description: 'Silla con soporte lumbar y materiales premium.',
    descriptionmodal:`
      <ul>
        <li>Las sillas con soporte lumbar y materiales premium están diseñadas para ofrecer comodidad y salud postural en ambientes de trabajo o gaming prolongados.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Soporte lumbar ajustable: Permite adaptar el soporte a la curva natural de la espalda baja, mejorando la postura y previniendo dolores lumbares.</li>
            <li>Materiales premium: Tapicería de cuero sintético ecológico (EPU), cuero auténtico o malla transpirable de alta calidad que otorgan durabilidad, confort y ventilación.</li>
            <li>Respaldo ergonómico: Diseñado para mantener la columna en posición natural, con zonas reforzadas para mayor soporte.</li>
            <li>Brazos ajustables 3D: Ajustes en altura, profundidad y ángulo para acomodar mejor la posición de los brazos y reducir tensión en hombros y cuello.</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 249990,
    discount: 0.34,
    image: silla2,
    marca: "Cougar",
    categoria: "Sillas Gamer",
    estado: "preparacion"
  },
  {
    id: 'SG005',
    name: 'Silla Gamer Primus Thrónos 100 PCH-103BL - Diseño Ergonómico y Confort Superior, Azul',
    description: 'Silla con soporte lumbar y materiales premium.',
    descriptionmodal:`
      <ul>
        <li>La silla gamer Primus Thrónos 100 PCH-103BL en color azul es una silla ergonómica diseñada para brindar confort superior en largas sesiones de juego o trabajo.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Materiales premium: marco metálico resistente, tapizado en PVC de primera calidad y espuma moldeada de alta densidad para un asiento cómodo y duradero.</li>
            <li>Ajustes personalizables: respaldo reclinable hasta 135 grados, asiento con regulación de altura y tensión, y reposabrazos ajustables en dos direcciones (vertical y horizontal).</li>
            <li>Soporte lumbar adicional: incluye cojín lumbar ajustable y almohada para cuello acolchada y removible.</li>
            <li>Base robusta de metal con ruedas giratorias de nylon para desplazamiento suave y silencioso.</li>
            <li>Capacidad de carga máxima: hasta 120 kg.</li>
            <li>Altura del asiento ajustable entre 47 cm y 57 cm.</li>
            <li>Dimensiones del asiento aproximadamente 54 x 53.5 cm; respaldo de 81.5 cm de alto.</li>
            <li>Ruedas con giro de 360 grados que facilitan movilidad.</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 194720,
    discount: 0.19,
    image: silla3,
    marca: "Primus Gaming",
    categoria: "Sillas Gamer",
    estado: "preparacion"
  },
  {
    id: 'SG006',
    name: 'Silla Gamer Primus Thronos100 PCH-103BB - Ergonómica, Ajustable, Blanco con Gris',
    description: 'Silla con soporte lumbar y materiales premium.',
    descriptionmodal:`
      <ul>
        <li>La silla gamer Primus Thronos100 PCH-103BB en color blanco con gris es una silla ergonómica diseñada para proporcionar confort y soporte durante largas sesiones de gaming o trabajo.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Base metálica resistente con ruedas de nylon para movilidad suave y silenciosa.</li>
            <li>Capacidad máxima de carga: hasta 120 kg.</li>
            <li>Ajuste de altura del asiento: desde 47 cm hasta 57 cm.</li>
            <li>Dimensiones del asiento: 54 x 53.5 cm; respaldo de 81.5 cm de alto.</li>
            <li>Ruedas giratorias de 360° que facilitan el desplazamiento.</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 195020,
    discount: 0.19,
    image: silla4,
    marca: "Primus Gaming",
    categoria: "Sillas Gamer",
    estado: "preparacion"
  },
  {
    id: 'SG007',
    name: 'Silla Gamer Primus Gaming Thronos 100T, Reclinable 135°, Soporta hasta 120 kg, Verde/Negro/Blanco',
    description: 'Silla con soporte lumbar y materiales premium.',
    descriptionmodal:`
      <ul>
        <li>La silla gamer Primus Gaming Thronos 100T, en combinación de colores verde, negro y blanco, es un modelo ergonómico que ofrece soporte y confort para largas sesiones de juego o trabajo.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Diseño ergonómico con respaldo alto y aletas laterales contorneadas que brindan soporte lumbar y estabilidad.</li>
            <li>Materiales de alta calidad: estructura metálica resistente, tapizado en PVC y PU premium, y relleno de espuma moldeada de alta densidad para confort prolongado.</li>
            <li>Respaldo reclinable hasta 135° que permite ajuste para descansar o concentrarse.</li>
            <li>Reposabrazos 2D ajustables en altura y ángulo, para adaptar la postura de los brazos.</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 196970,
    discount: 0.19,
    image: silla5,
    marca: "Primus Gaming",
    categoria: "Sillas Gamer",
    estado: "preparacion"
  },
  {
    id: 'SG008',
    name: 'Silla Gamer Cougar Hotrod Black, Almohadillas c/ Ajuste Altura, Reposabrazos 3D, Hasta 136kg, Negro',
    description: 'Silla con soporte lumbar y materiales premium.',
    descriptionmodal:`
      <ul>
        <li>La silla gamer Cougar Hotrod Black es una silla ergonómica diseñada para ofrecer alto rendimiento y confort durante largas sesiones de juego.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Construcción resistente con estructura de PA reforzado con fibra de vidrio y base metálica durable.</li>
            <li>Cilindro de gas clase 4 para ajuste de altura suave y seguro.</li>
            <li>Reclinación del respaldo entre 90° y 150°, permitiendo encontrar el ángulo ideal para descanso o concentración.</li>
            <li>Ruedas silenciosas optimizadas para desplazamiento fluido y sin daño en pisos delicados.</li>
            <li>Capacidad máxima de carga: 136 kg.</li>
        </ul>
        </li>
      </ul>`,
    envioGratis: true,
    price: 399990,
    image: silla6,
    marca: "Cougar",
    categoria: "Sillas Gamer",
    estado: "preparacion"
  },
  /*Llaveros*/
  {
    id: 'LL001',
    name: 'Llavero Borderlands Claptrap',
    description: 'Llavero',
    descriptionmodal:`
      <ul>
        <li>El llavero Borderlands Claptrap es un accesorio coleccionable inspirado en el icónico robot Claptrap del videojuego Borderlands.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tamaño aproximado: 4 cm de altura</li>
            <li>Materiales: Fabricado con materiales de alta calidad resistentes al desgaste diario</li>
            <li>Diseño: Representa a Claptrap en estilo POP!, con detalles coloridos y expresivos que capturan su personalidad divertida y característica</li>
        </ul>
        </li>
      </ul>`,
    price: 9990,
    image: llav1,
    marca: "LlavLab",
    categoria: "Llavero",
    juego: "Borderlands",
    estado: "preparacion"
  },
  {
    id: 'LL002',
    name: 'Llavero Borderlands Llave Dorada SHIFT',
    description: 'Llavero',
    descriptionmodal:`
      <ul>
        <li>La Llave Dorada SHIFT en Borderlands es un ítem especial que permite abrir cofres dorados repartidos en el juego para obtener botines de alta calidad.</li>  
        <li><b>Caracteristicas:</b> Estas llaves son muy valoradas por permitir acceso a botines valiosos y mejorados que facilitan el progreso en Borderlands</li>
      </ul>`,
    price: 9990,
    image: llav2,
    marca: "LlavLab",
    categoria: "Llavero",
    juego: "Borderlands",
    estado: "preparacion"
  },
  {
    id: 'LL003',
    name: 'Llavero logo Borderlands',
    description: 'Llavero',
    descriptionmodal:`
      <ul>
        <li>Accesorio coleccionable oficial inspirado en el icónico logo del videojuego Borderlands. Es un llavero compacto y resistente, diseñado para los fanáticos que desean llevar un símbolo representativo de la saga con estilo y practicidad.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Tamaño pequeño y liviano, ideal para llevar en llaves, mochilas o bolsos.</li>
            <li>Diseño que reproduce el logo distintivo de Borderlands con detalles nítidos y colores característicos.</li>
        </ul>
        </li>
      </ul>`,
    price: 9990,
    image: llav3,
    marca: "LlavLab",
    categoria: "Llavero",
    juego: "Borderlands",
    estado: "preparacion"
  },
  {
    id: 'LL004',
    name: 'Llavero Lanzacohete Jinx Carapescado League Of Legends Metal',
    description: 'Llavero',
    descriptionmodal:`
      <ul>
        <li>El llavero Lanzacohete Jinx Carapescado de League of Legends es un accesorio oficial inspirado en el cañón característico de Jinx, uno de los personajes más populares de la saga.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Material: Fabricado en metal o PLA (plástico derivado de origen vegetal no tóxico en impresiones 3D artesanales).</li>
            <li>Tamaño aproximado: 7.5 cm de ancho x 2 cm de profundidad x 3.5 cm de alto.</li>
        </ul>
        </li>
      </ul>`,
    price: 6165,
    image: llav4,
    marca: "LlavLab",
    categoria: "Llavero",
    juego: "League of legends",
    estado: "preparacion"
  },
  {
    id: 'LL005',
    name: 'Llavero Colgante T1 League Of Legends - Marca Makers',
    description: 'Llavero',
    descriptionmodal:`
      <ul>
        <li>Accesorio inspirado en la icónica liga y personajes de League of Legends, fabricado por Makers, reconocido por sus productos de merchandising oficial y de calidad.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Material: Acrílico premium resistente, con detalles impresos a todo color de alta calidad.</li>
            <li>Tamaño aproximado: 6 cm, ideal para llevar en llaves, mochilas o como colgante.</li>
        </ul>
        </li>
      </ul>`,
    price: 3380,
    image: llav5,
    marca: "LlavLab",
    categoria: "Llavero",
    juego: "League of legends",
    estado: "preparacion"
  },
  {
    id: 'LL006',
    name: 'Llavero League Of Legends Equipo Fnatic / 3makers',
    description: 'Llavero',
    descriptionmodal:`
      <ul>
        <li>Accesorio diseñado para fans del equipo de esports Fnatic y del popular juego League of Legends. Fabricado por la marca 3makers, este llavero combina detalles precisos y materiales de calidad, siendo un accesorio ideal para mostrar afinidad por el equipo y el juego.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Material: Metal duradero con acabado elegante y resistente al uso diario.</li>
            <li>Diseño: Representa el logo o elementos identificativos del equipo Fnatic dentro del universo League of Legends, con detalles precisos y personalizados.</li>
            <li>Fabricación con tecnología 3D y materiales ecológicos para un producto sostenible.</li>
        </ul>
        </li>
      </ul>`,
    price: 3380,
    image: llav6,
    marca: "LlavLab",
    categoria: "Llavero",
    juego: "League of legends",
    estado: "preparacion"
  },
  {
    id: 'LL007',
    name: 'Llavero Colgante League Of Legends Equipo G2 / 3makers',
    description: 'Llavero',
    descriptionmodal:`
      <ul>
        <li>Accesorio oficial fabricado por 3makers, diseñado para los fans del equipo de esports G2 y del popular juego League of Legends.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Material: Acrílico o aleación metálica de alta resistencia, con acabados duraderos.</li>
            <li>Tamaño aproximado: 6 a 12 cm, compacto y ligero para llevar en llaves, mochilas o como colgante.</li>
        </ul>
        </li>
      </ul>`,
    price: 3380,
    image: llav7,
    marca: "LlavLab",
    categoria: "Llavero",
    juego: "League of legends",
    estado: "preparacion"
  },
  {
    id: 'LL008',
    name: 'Llavero Espatula Tft De League Of Legend Arcane Riot Game Dorado',
    description: 'Llavero',
    descriptionmodal:`
      <ul>
        <li>El Llavero Espátula TFT de League of Legends Arcane es un accesorio inspirado en el icónico objeto "Espátula" del modo Teamfight Tactics (TFT) dentro del universo League of Legends.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Diseño: Reproduce con detalle la forma y color del objeto Espátula, representando fielmente el ícono de TFT y el universo Arcane.</li>
            <li>Funcionalidad: Llavero práctico para llevar llaves o decorar mochilas y bolsos.</li>
            <li>Producto oficial/licenciado o inspirado en League of Legends y TFT, ideal para fans y coleccionistas.</li>
        </ul>
        </li>
      </ul>`,
    price: 9990,
    image: llav8,
    marca: "LlavLab",
    categoria: "Llavero",
    juego: "League of legends",
    estado: "preparacion"
  },
  {
    id: 'LP002',
    name: 'Set de Limpieza Philco 4 en 1, Spray+2 Paños+Pincel',
    description: 'Set limpieza',
    descriptionmodal:`
      <ul>
        <li>El Set de Limpieza Philco 4 en 1 incluye todo lo necesario para mantener limpias y en perfecto estado las pantallas de diversos dispositivos electrónicos.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Incluye un spray de limpieza libre de amoníaco que ayuda a restaurar y mantener el brillo y la claridad de las pantallas.</li>
            <li>Dos paños para limpieza: uno de microfibra de alta calidad (17x17 cm) y otro de algodón (17x14 cm), ambos suaves para evitar rayones pero efectivos para remover polvo y suciedad.</li>
            <li>Pincel antiestático incorporado para eliminar el polvo de áreas sensibles como teclados y ranuras sin dañar los componentes.</li>
        </ul>
        </li>
      </ul>`,
    price: 15270,
    discount: 0.8,
    image: limpieza2,
    marca: "Philco",
    categoria: "Limpieza Pc",
    estado: "preparacion"
  },
  {
    id: 'LP003',
    name: 'Pack de 3 Paños de Microfibra Daytona 40x40 cm para Limpieza de Auto, PC, Lentes y TV',
    description: 'Set limpieza',
    descriptionmodal:`
      <ul>
        <li>El Pack de 3 Paños de Microfibra Daytona 40x40 cm es un set diseñado para ofrecer una limpieza eficiente y suave en diversas superficies, ideal para autos, computadoras, lentes, televisores y otros objetos delicados.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Dimensiones: Cada paño mide aproximadamente 40 x 40 cm, tamaño ideal para una limpieza cómoda.</li>
            <li>Material: Compuesto por 80% poliéster y 20% poliamida, otorgando máxima absorción, suavidad y durabilidad.</li>
        </ul>
        </li>
      </ul>`,
    price: 4180,
    discount: 0.38,
    image: limpieza3,
    marca: "Daytona",
    categoria: "Limpieza Pc",
    estado: "preparacion"
  },
  {
    id: 'LP004',
    name: 'Toallitas de Limpieza Thermal Grizzly, 10 unidades',
    description: 'Set limpieza',
    descriptionmodal:`
      <ul>
        <li>Las Toallitas de Limpieza Thermal Grizzly son un kit diseñado para limpiar y preparar superficies de CPU, GPU y otros componentes electrónicos para maximizar la eficacia de la aplicación de materiales de transferencia térmica, como pastas térmicas o metales líquidos.</li>  
        <li><b>Caracteristicas:</b>
        <ul>
            <li>Contenido: 10 paquetes dobles, totalizando 20 toallitas húmedas y 20 secas.</li>
        </ul>
        </li>
      </ul>`,
    price: 18990,
    discount: 0.42,
    image: limpieza4,
    marca: "Thermal Grizzly",
    categoria: "Limpieza Pc",
    estado: "preparacion" // o "en camino", "entregado"
  }
];

export default products;