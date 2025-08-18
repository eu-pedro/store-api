// src/server.ts
import fastify from "fastify";
var app = fastify({ logger: true });
var mouses = [
  {
    name: "Logitech MX Master 3s",
    slug: "logitech-mx-master-3s",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit...",
    image: "https://w7.pngwing.com/pngs/129/459/png-transparent-computer-mouse-computer-keyboard-gamer-mouse-mats-computer-mouse-game-electronics-computer-keyboard.png",
    price: 499.9
  },
  {
    name: "Logitech Pro X Superlight",
    slug: "logitech-pro-x-superlight",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit...",
    image: "https://w7.pngwing.com/pngs/57/453/png-transparent-computer-mouse-optical-mouse-computer-mouse-electronics-computer-mouse.png",
    price: 699
  },
  {
    name: "Logitech G305 Lightspeed",
    slug: "logitech-g305-lightspeed",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit...",
    image: "https://w7.pngwing.com/pngs/86/943/png-transparent-computer-mouse-logitech-g305-lightspeed-wireless-gaming-mouse-optical-mouse-computer-mouse-electronics-computer-keyboard-mouse.png",
    price: 349.9
  },
  {
    name: "Hyperx Pulsefire Dart",
    slug: "hyperx-pulsefire-dart",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit...",
    image: "https://w7.pngwing.com/pngs/860/34/png-transparent-computer-mouse-computer-mouse-electronics-computer-mouse.png",
    price: 429.5
  },
  {
    name: "Razer Deathadder V2 Pro",
    slug: "razer-deathadder-v2-pro",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit...",
    image: "https://w7.pngwing.com/pngs/988/750/png-transparent-computer-mouse-input-devices-peripheral-computer-hardware-pc-mouse-electronics-computer-mouse.png",
    price: 599
  }
];
var keyboards = [
  {
    name: "Keychron K2 V2",
    slug: "keychron-k2-v2",
    switches: "Gateron Brown",
    image: "https://w7.pngwing.com/pngs/237/738/png-transparent-black-computer-keyboard-computer-keyboard-computer-mouse-computer-hardware-keyboard-shortcut-keyboard-electronics-computer-electronic-device-thumbnail.png",
    price: 499.9
  },
  {
    name: "Anne Pro 2",
    slug: "anne-pro-2",
    switches: "Gateron Red",
    image: "https://w7.pngwing.com/pngs/99/156/png-transparent-computer-keyboard-laptop-computer-mouse-usb-targus-keyboard-electronics-computer-electronic-device.png",
    price: 399.9
  },
  {
    name: "Logitech G Pro X",
    slug: "logitech-g-pro-x",
    switches: "Hot-swappable",
    image: "https://w7.pngwing.com/pngs/144/404/png-transparent-computer-keyboard-pc-keyboard-electronics-computer-input-device.png",
    price: 799.9
  },
  {
    name: "Corsair K70 RGB Pro",
    slug: "corsair-k70-rgb-pro",
    switches: "Cherry MX Red",
    image: "https://w7.pngwing.com/pngs/924/380/png-transparent-computer-keyboard-numeric-keypad-chorded-keyboard-space-bar-keyboard-electronics-rectangle-computer.png",
    price: 899.9
  },
  {
    name: "Razer Huntsman Mini",
    slug: "razer-huntsman-mini",
    switches: "Optical Red",
    image: "https://w7.pngwing.com/pngs/445/81/png-transparent-computer-keyboard-laptop-logitech-wireless-keyboard-laptop-electronics-computer-keyboard-computer.png",
    price: 699.9
  }
];
var headseats = [
  {
    name: "HyperX Cloud II",
    slug: "hyperx-cloud-ii",
    type: "Headset",
    image: "https://w7.pngwing.com/pngs/16/861/png-transparent-headset-headset-music-headphones-headphones-thumbnail.png",
    price: 599.9
  },
  {
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    type: "Over-ear ANC",
    image: "https://w7.pngwing.com/pngs/217/768/png-transparent-headphones-computer-icons-headset-graphy-headset-computer-headset-texture-computer-network-3d-computer-graphics.png",
    price: 2499
  },
  {
    name: "Logitech G733",
    slug: "logitech-g733",
    type: "Wireless Gaming",
    image: "https://w7.pngwing.com/pngs/822/537/png-transparent-microphone-cougar-immersa-gaming-headset-headphones-audio-cougar-immersa-pro-7-1-rgb-gaming-headset-game-headset-microphone-computer-stereophonic-sound.png",
    price: 899.99
  },
  {
    name: "Razer BlackShark V2",
    slug: "razer-blackshark-v2",
    type: "Esports Headset",
    image: "https://w7.pngwing.com/pngs/923/175/png-transparent-headset-xbox-360-headphones-gamer-wireless-headphones-electronics-playstation-4-video-game.png",
    price: 749.5
  },
  {
    name: "Bose QuietComfort 45",
    slug: "bose-qc45",
    type: "Over-ear ANC",
    image: "https://w7.pngwing.com/pngs/394/868/png-transparent-microphone-noise-cancelling-headphones-bluetooth-headset-sony-headphones-industrial-bluetooth-stereophonic-sound.png",
    price: 2299
  }
];
var mousepads = [
  {
    name: "SteelSeries QcK+",
    slug: "steelseries-qck-plus",
    size: "Large",
    image: "https://w7.pngwing.com/pngs/710/614/png-transparent-computer-rectangle-mouse-pad-rectangle-computer-mouse-pad.png",
    price: 149.9
  },
  {
    name: "Logitech G640",
    slug: "logitech-g640",
    size: "Large",
    image: "https://w7.pngwing.com/pngs/495/313/png-transparent-computer-mouse-mouse-mats-benq-video-game-electronic-sports-mouse-pad-electronics-rectangle-video-game.png",
    price: 179
  },
  {
    name: "Razer Gigantus V2",
    slug: "razer-gigantus-v2",
    size: "XL",
    image: "https://w7.pngwing.com/pngs/152/793/png-transparent-computer-mouse-mouse-mats-peripheral-rectangle-mouse-pad-text-rectangle-photography.png",
    price: 199.9
  },
  {
    name: "Corsair MM300 Pro",
    slug: "corsair-mm300-pro",
    size: "Medium",
    image: "https://w7.pngwing.com/pngs/420/475/png-transparent-computer-mouse-mousepad-cartoon-mouse-pad-cartoon-character-blue-animals.png",
    price: 139.5
  },
  {
    name: "HyperX Fury S",
    slug: "hyperx-fury-s",
    size: "XL",
    image: "https://w7.pngwing.com/pngs/126/52/png-transparent-computer-mouse-mousepad-razer-inc-gamer-game-mouse-pad-material-game-animals-text.png",
    price: 169.99
  }
];
var monitors = [
  {
    name: "LG 27GL850",
    slug: "lg-27gl850",
    size: 27,
    hz: 144,
    price: 1899.9,
    image: "https://w7.pngwing.com/pngs/404/255/png-transparent-computer-monitors-4k-resolution-display-resolution-1080p-monitors-gadget-electronics-computer.png"
  },
  {
    name: "Dell S2721DGF",
    slug: "dell-s2721dgf",
    size: 27,
    hz: 165,
    price: 2299,
    image: "https://w7.pngwing.com/pngs/957/599/png-transparent-gray-flat-screen-computer-monitor-computer-monitor-laptop-icon-monitor-television-electronics-computer.png"
  },
  {
    name: "AOC 24G2",
    slug: "aoc-24g2",
    size: 24,
    hz: 144,
    price: 1299.5,
    image: "https://w7.pngwing.com/pngs/554/410/png-transparent-dell-xps-all-in-one-computer-monitors-monitors-electronics-computer-computer-monitor-accessory.png"
  },
  {
    name: "Samsung Odyssey G5",
    slug: "samsung-odyssey-g5",
    size: 32,
    hz: 165,
    price: 2599.99,
    image: "https://w7.pngwing.com/pngs/487/696/png-transparent-dell-monitors-led-backlit-lcd-computer-monitors-led-display-computer-television-computer-computer-monitor-accessory.png"
  },
  {
    name: "Asus TUF VG259QM",
    slug: "asus-tuf-vg259qm",
    size: 24.5,
    hz: 280,
    price: 2099.9,
    image: "https://w7.pngwing.com/pngs/442/677/png-transparent-dell-monitors-led-backlit-lcd-computer-monitor-video-card-monitor-television-electronics-computer.png"
  }
];
var peripherals = {
  mouses,
  keyboards,
  headseats,
  mousepads,
  monitors
};
app.get("/products", async (request, reply) => {
  const query = request.query;
  if (!query?.name) {
    return reply.status(400).send({
      message: "Informe um produto para pesquisar.",
      validCategories: Object.keys(peripherals)
    });
  }
  const key = query.name.toLowerCase();
  const list = peripherals[key];
  if (!list) {
    return reply.code(404).send({
      message: "Categoria n\xE3o encontrada",
      validCategories: Object.keys(peripherals)
    });
  }
  return reply.status(200).send({ products: list });
});
app.get("/product/:name", async (request, reply) => {
  const { name } = request.params;
  const categories = Object.values(peripherals).flat();
  const product = categories.find(
    (p) => p.slug.toLowerCase() === name.toLowerCase() || p.name.toLowerCase() === name.toLowerCase()
  );
  if (!product) {
    return reply.code(404).send({
      message: "Produto n\xE3o encontrado",
      example: "/product/logitech-mx-master-3s"
    });
  }
  return reply.status(200).send(product);
});
var port = Number(process.env.PORT ?? 3333);
var host = process.env.HOST ?? "0.0.0.0";
app.listen({ port, host }).then(() => app.log.info(`HTTP server running on http://${host}:${port}`)).catch((err) => {
  app.log.error(err);
  process.exit(1);
});
