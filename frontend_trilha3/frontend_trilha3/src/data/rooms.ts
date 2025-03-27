import { Room } from "../types/room";

export const rooms: Room[] = [
  {
    id: 1,
    name: "Quarto Luxo",
    description: "Quarto espaçoso com vista para o mar",
    price: 500,
    image: "https://via.placeholder.com/300",
    capacity: 2,
    available: true,
  },
  {
    id: 2,
    name: "Suíte Master",
    description: "Suíte com jacuzzi e varanda",
    price: 800,
    image: "https://via.placeholder.com/300",
    capacity: 3,
    available: true,
  },
  {
    id: 3,
    name: "Quarto Standard",
    description: "Quarto confortável e econômico",
    price: 300,
    image: "https://via.placeholder.com/300",
    capacity: 2,
    available: true,
  },
];
