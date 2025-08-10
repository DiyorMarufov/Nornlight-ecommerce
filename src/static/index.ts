interface Product {
  id: number;
  title: string;
  desc: string;
}

export const ProductContent: Product[] = [
  {
    id: 1,
    title: "Артикул",
    desc: "LED LAMPS 81284",
  },
  {
    id: 2,
    title: "Мощность, Вт",
    desc: "16",
  },
  {
    id: 3,
    title: "Площадь освещения М²",
    desc: "46.67",
  },
  {
    id: 4,
    title: "Цвет",
    desc: "Золото",
  },
  {
    id: 5,
    title: "Габариты, мм",
    desc: "105х106х40",
  },
  {
    id: 6,
    title: "Масса, кг",
    desc: "0,67 кг",
  },
  {
    id: 7,
    title: "Степень защиты",
    desc: "IP67",
  },
  {
    id: 8,
    title: "Напряжение, Вт",
    desc: "220",
  },
];

export const AboutProduct: Product[] = [
  { id: 1, title: "Вариант установки", desc: "Накладной" },
  { id: 2, title: "Напряжение питания", desc: "230В AC (50 Гц)" },
  { id: 3, title: "Масса, кг", desc: "0,38 кг" },
  { id: 4, title: "Степень защиты", desc: "Накладной" },
  { id: 5, title: "Габариты, мм", desc: "105×81×57,3" },
];
