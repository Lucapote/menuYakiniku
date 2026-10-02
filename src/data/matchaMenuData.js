import cocoImg from "../assets/matchas/coco.webp";
import classicImg from "../assets/matchas/classic.webp";
import goldImg from "../assets/matchas/gold.webp";
import fizzImg from "../assets/matchas/fizz.webp";
import gingerImg from "../assets/matchas/ginger.webp";
import tiramisuImg from "../assets/matchas/tiramisu.webp";
import mochiImg from "../assets/matchas/mochi.webp";
import beerImg from "../assets/matchas/beer.webp";

export const MATCHA_CATEGORIES = [
  { id: "todo", label: "Todo", num: null },
  { id: "lattes", label: "Lattes", num: "01", tagline: "Batidos con leche, calientes o fríos" },
  { id: "refrescantes", label: "Refrescantes", num: "02", tagline: "Con burbuja, cítricos y hielo" },
  { id: "postres", label: "Postres", num: "03", tagline: "Matcha en cuchara" },
  { id: "otros", label: "Otros", num: "04", tagline: "Con alcohol" },
];

export const MATCHA_PRODUCTS = [
  {
    id: "coco-cloud",
    category: "lattes",
    index: "01",
    name: "Coco Cloud Matcha",
    jp: "ココ・クラウド・抹茶",
    price: 160,
    image: cocoImg,
    desc: "Suave y cremosa: frescura de coco sobre té verde japonés.",
    pairing: "Nigiris de pescado blanco",
    badge: "RECOMENDADO",
    ingredients: ["Matcha ceremonial", "Leche de coco", "Jarabe ligero"],
    maridajeText:
      "La cremosidad del coco suaviza el umami del pescado crudo, y el matcha limpia el paladar entre bocado y bocado.",
    perfil: { Acidez: 1, Dulzor: 4, Umami: 2, Ligereza: 3 },
  },
  {
    id: "the-classic",
    category: "lattes",
    index: "02",
    name: "The Classic",
    jp: "抹茶・ラテ",
    price: 120,
    image: classicImg,
    desc: "El matcha latte de siempre, batido al momento.",
    pairing: "Mochi de matcha",
    badge: null,
    ingredients: ["Matcha ceremonial", "Leche entera", "Jarabe ligero"],
    maridajeText:
      "Un latte neutro que deja que el dulzor del mochi sea protagonista, sin competir con él.",
    perfil: { Acidez: 1, Dulzor: 2, Umami: 2, Ligereza: 3 },
  },
  {
    id: "matcha-gold",
    category: "refrescantes",
    index: "01",
    name: "Matcha Gold",
    jp: "抹茶・ゴールド",
    price: 140,
    image: goldImg,
    desc: "Yuzu japonés y tónica burbujeante sobre matcha.",
    pairing: "Sashimi de hamachi con jalapeño",
    badge: "INSIGNIA",
    ingredients: ["Matcha ceremonial", "Yuzu", "Agua tónica"],
    maridajeText:
      "El amargor cítrico del yuzu corta la grasa del hamachi, y el picor del jalapeño se equilibra con las burbujas de la tónica.",
    perfil: { Acidez: 4, Dulzor: 2, Umami: 2, Ligereza: 4 },
  },
  {
    id: "matcha-fizz",
    category: "refrescantes",
    index: "02",
    name: "Matcha Fizz",
    jp: "抹茶・フィズ",
    price: 130,
    image: fizzImg,
    desc: "Calpis dulce-acidulado con la efervescencia de la soda.",
    pairing: "Spicy tuna roll",
    badge: null,
    ingredients: ["Calpis", "Agua mineral", "Matcha ceremonial"],
    maridajeText:
      "El perfil lácteo dulce del Calpis alivia el picor del spicy mayo o la sriracha, y el gas de la soda aligera los rolls más contundentes con aguacate o queso crema.",
    perfil: { Acidez: 4, Dulzor: 3, Umami: 3, Ligereza: 5 },
  },
  {
    id: "ginger-zap",
    category: "refrescantes",
    index: "03",
    name: "Ginger Zap",
    jp: "ジンジャー・ザップ",
    price: 120,
    image: gingerImg,
    desc: "Mocktail efervescente con un toque picante de jengibre.",
    pairing: "Edamames al spicy garlic",
    badge: "MOCKTAIL",
    ingredients: ["Matcha ceremonial", "Jengibre", "Soda"],
    maridajeText:
      "El picor del jengibre acompaña al ajo picante de los edamames, y la soda mantiene todo ligero entre bocado y bocado.",
    perfil: { Acidez: 3, Dulzor: 2, Umami: 1, Ligereza: 5 },
  },
  {
    id: "tiramisu-matcha",
    category: "postres",
    index: "01",
    name: "Tiramisú de Matcha",
    jp: "抹茶・ティラミス",
    price: 140,
    image: tiramisuImg,
    desc: "Fusión italo-japonesa de bizcocho al matcha y mascarpone.",
    pairing: "Espresso de la casa",
    badge: "RECOMENDADO",
    ingredients: ["Matcha ceremonial", "Mascarpone", "Bizcocho"],
    maridajeText:
      "El amargor del espresso contrasta con la cremosidad del mascarpone y resalta las notas vegetales del matcha.",
    perfil: { Acidez: 1, Dulzor: 4, Umami: 1, Ligereza: 2 },
  },
  {
    id: "mochi-tradicional",
    category: "postres",
    index: "02",
    name: "Mochi Tradicional",
    jp: "抹茶・モッチ",
    price: 95,
    image: mochiImg,
    desc: "Pastel de arroz glutinoso con relleno cremoso.",
    pairing: "The Classic caliente",
    badge: null,
    ingredients: ["Harina de arroz glutinoso", "Matcha ceremonial", "Relleno cremoso"],
    maridajeText:
      "Un latte caliente y suave acompaña la textura elástica del mochi sin opacar su dulzor delicado.",
    perfil: { Acidez: 1, Dulzor: 3, Umami: 1, Ligereza: 3 },
  },
  {
    id: "matcha-beer",
    category: "otros",
    index: "01",
    name: "Matcha Beer",
    jp: "抹茶・ビール",
    price: 140,
    image: beerImg,
    desc: "Cerveza clara tirada con la riqueza umami del matcha.",
    pairing: "Yakitori",
    badge: "RECOMENDADO",
    ingredients: ["Cerveza clara", "Matcha ceremonial"],
    maridajeText:
      "El amargor lupulado de la cerveza y el umami del matcha resaltan el ahumado dulce del yakitori a la parrilla.",
    perfil: { Acidez: 2, Dulzor: 1, Umami: 4, Ligereza: 3 },
  },
];
