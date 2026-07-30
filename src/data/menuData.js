import carrusel2 from '../assets/Carruseles-2.webp';
import carrusel3 from '../assets/Carruseles-3.webp';
import carrusel4 from '../assets/Carruseles-4.webp';
import carrusel5 from '../assets/Carruseles-5.webp';

export const RESTAURANT_INFO = {
  name: "Yamamoto",
  subtitle: "Restaurante Japonés",
  logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcwNPpMKOfnSGfHyT6iw0ww9Pm3TF_BE_Tfa_Bl85wp91JV15zDEutcM7_3gizX2UrT8Amd1leWm7v5B4W9oQKfNwtzuOH5El6SnD9_QO87NOS0qgPhWUSNjIgWSLpRNrQwHIXjZR6-uGwwnrmJUvIsCfPw4xhHth2psGyYCZpjcFRdldJhJuVzs5MHUwjrBANjYlvvOUFwUTP0_vtuMGomcQwcowAsH2J2Z9lFnRJazsenaXmDW-4zu6kjLTV5q-fofDBIJcuQA",
  tagline: "MENÚ YAKINIKU",
  introQuote: "La mejor manera de comer la selección de Carnes Premium, es como aquí te la sugerimos: asado a la parrilla en mesa dándole el término que cada uno prefiera.",
  hours: "Lun - Dom: 13:00 hrs - 23:00 hrs",
  address: "Av. Principal #123, Ciudad de México",
  phone: "+52 (55) 1234-5678"
};

export const MENU_CATEGORIES = [
  { id: "todos", name: "Todos" },
  { id: "cortes", name: "Cortes" },
  { id: "combinaciones", name: "Combinaciones" },
  { id: "vegetales", name: "Vegetales" }
];

export const MENU_DATA = [
  {
    id: "cortes",
    title: "Cortes",
    images: [carrusel4, carrusel3],
    imageAlt: "Cortes de Res y Wagyu Yakiniku",
    imagePosition: "right",
    items: [
      {
        id: "new-york-prime",
        name: "New York Prime",
        price: 580.00,
        description: "160gr. De carne de res seleccionada, en cortes de 8mm de grosor aproximadamente. Listo para poner a la parrilla.",
        badge: "Lomo de Res Angus"
      },
      {
        id: "brisket-prime",
        name: "Brisket Prime",
        price: 380.00,
        description: "160gr. De carne de res seleccionada, rebanada a 3 mm para facilitar su cocción en la parrilla.",
        badge: "Pecho de Res Angus"
      },
      {
        id: "rib-eye",
        name: "Rib Eye",
        price: 620.00,
        description: "160 gr. De carne de res seleccionada en corte de 8mm de grosor aproximadamente, listo para poner a la parrilla.",
        badge: "Lomo del Costillar Angus"
      },
      {
        id: "wagyu-a5",
        name: "Wagyu Japonés A5",
        price: 980.00,
        description: "140 gr de carne Wagyu en cortes de aproximadamente 6mm para un sellado profundo.",
        badge: "Wagyu Certificado"
      },
      {
        id: "gyutan",
        name: "Gyutan",
        price: 580.00,
        description: "160 gr de lengua de res seleccionada en corte fino a 3mm aproximadamente para facilitar su cocción en parrilla.",
        badge: "Lengua de Res"
      }
    ]
  },
  {
    id: "combinaciones",
    title: "Combinaciones",
    tagline: "Experiencia Yakiniku",
    images: [carrusel2],
    imageAlt: "Combinaciones Yakiniku Yamamoto",
    imagePosition: "left",
    items: [
      {
        id: "mixto-nacional",
        name: "Mixto Nacional",
        price: 840.00,
        description: "150 gr de New York prime en cortes de 8mm + 150 gr de Brisket prime rebanada a 3mm.",
        badge: "Selección Nacional"
      },
      {
        id: "mixto-internacional",
        name: "Mixto Internacional",
        price: 1440.00,
        description: "160 gr de Rib Eye en cortes de 8mm de grosor + 140 gr de Wagyu A5 en cortes de aproximadamente 6mm de grosor.",
        badge: "Selección Internacional"
      },
      {
        id: "recomendacion-chef",
        name: "Recomendación del Chef",
        price: 1600.00,
        description: "120 gr de Rib Eye en cortes de 8mm de grosor + 120 gr de Wagyu A5 en cortes de aproximadamente 6mm + 120 gr de lengua de res en corte fino de aproximadamente 3mm.",
        badge: "Trilogía Especial"
      }
    ]
  },
  {
    id: "vegetales",
    title: "Vegetales",
    images: [carrusel5],
    imageAlt: "Verduras mixtas para asar a la parrilla",
    imagePosition: "right",
    items: [
      {
        id: "verduras-mixtas",
        name: "Verduras Mixtas",
        price: 180.00,
        description: "Calabaza, zanahoria, pimientos, cebolla, champiñones y espárragos.",
        badge: "Fresco de Temporada"
      },
      {
        id: "orden-esparragos",
        name: "Orden de Espárragos",
        price: 220.00,
        description: "Espárragos frescos seleccionados listos para asar a la parrilla.",
        badge: "Fresco de Temporada"
      }
    ]
  }
];

