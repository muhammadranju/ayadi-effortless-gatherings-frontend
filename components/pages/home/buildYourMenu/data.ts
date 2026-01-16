import { MenuItem } from "./types";
// all texts are fixed
const SALADS: MenuItem[] = [
  {
    id: "s1",
    name: "Dates & Fig Salad",
    description:
      "Mixed greens with dates, dried figs, and crunchy almonds, with a vinaigrette dressing",
    category: "salad",
    image: "/items/salad/1.jpg",
  },
  {
    id: "s2",
    name: "Watermelon Feta Salad",
    description:
      "Arugula with watermelon and crumbled feta, with a habaq citrus dressing.",
    category: "salad",
    image: "/items/salad/2.jpg",
  },
  {
    id: "s3",
    name: "Crunchy Chickpea Salad",
    description:
      "Iceberg lettuce topped with crunchy chickpeas, with a tahina-caesar dressing.",
    category: "salad",
    image: "/items/salad/3.jpg",
  },
  {
    id: "s4",
    name: "Charred Corn Salad",
    description:
      "Baby spinach with charred corn, parmesan, toasted peanuts, basil-infused dressing",
    category: "salad",
    image: "/items/salad/4.jpg",
  },
];

// all texts are fixed
const CLASSICS: MenuItem[] = [
  {
    id: "c1",
    name: "Kubaibat Hail",
    description: "Vine leaves pockets stuffed with spiced Saudi rice.",
    category: "appetizer",
    isVegetarian: true,
    image: "/items/classics/1.jpg",
  },
  {
    id: "c2",
    name: "Spinach & Cheese Pockets",
    description: "Flaky pastry stuffed with spinach and cheese.",
    category: "appetizer",
    isVegetarian: true,
    image: "/items/classics/2.jpg",
  },
  {
    id: "c3",
    name: "Farmouza",
    description: "Flaky pastry stuffed with minced beef and onions.",
    category: "appetizer",
    image: "/items/classics/3.jpg",
  },
  {
    id: "c4",
    name: "Shish Barak",
    description: "Minced meat dumplings in a yogurt garlic sauce.",
    category: "appetizer",
    image: "/items/classics/4.jpg",
  },
  {
    id: "c5",
    name: "Creamy Mashed Potatoes",
    description: "Smooth and buttery mashed potatoes",
    category: "appetizer",
    image: "/items/classics/5.jpg",
  },
  {
    id: "c6",
    name: "Korean Chicken Drumsticks",
    description:
      "Fried chicken drumsticks coated in a Korean-style chili sauce topped with sesame",
    category: "appetizer",
    image: "/items/classics/6.jpg",
  },
];

const SIGNATURES: MenuItem[] = [
  {
    id: "m1",
    name: "Ayadi Signature Shrimp",
    description: "Shrimp cooked in a tahina dill sauce and pickled onions.",
    category: "main",
    image: "/items/signature/1.jpg",
  },
  {
    id: "m2",
    name: "Timman Vegetable",
    description: "Temman rice with butternut squash, zucchini, and eggplants.",
    category: "main",
    image: "/items/signature/2.jpg",
  },
  {
    id: "m3",
    name: "Chicken Saleeg",
    description: "Creamy saleeg with chicken.",
    category: "main",
    image: "/items/signature/3.jpg",
  },

  {
    id: "m4",
    name: "Lamb Qursan",
    description: "Layers of zucchini, carrot, green beans, pumpkin.",
    category: "main",
    image: "/items/signature/5.jpg",
  },
  {
    id: "m5",
    name: "Seabass Kozbariya",
    description: "Seabass fillet in a coriander tomato sauce.",
    category: "main",
    image: "/items/signature/4.jpg",
  },
  {
    id: "m6",
    name: "Lasagna",
    description: "Lasagna with minced beef, tomato sauce, and béchamel",
    category: "main",
    image: "/items/signature/6.jpg",
  },
  {
    id: "m7",
    name: "Tuscan Chicken",
    description:
      "Creamy chicken with mushroom, spinach, and cherry tomato confit",
    category: "main",
    image: "/items/signature/7.jpg",
  },
  {
    id: "m8",
    name: "Braised Beef",
    description: "Braised beef with caramelized onion reduction & thyme jus",
    category: "main",
    image: "/items/signature/8.jpg",
  },
  {
    id: "m9",
    name: "Pesto Orzo",
    description: "Orzo pasta tossed with basil pesto and parmesan",
    category: "main",
    image: "/items/signature/9.png",
  },
  {
    id: "m10",
    name: "Seared Seabass",
    description:
      "Seared seabass fillet with a lemon butter sauce and cherry tomatoes",
    category: "main",
    image: "/items/signature/10.png",
  },
];

const ADDONS: MenuItem[] = [
  {
    id: "a1",
    name: "White Rice",
    category: "addon",
  },
  {
    id: "a2",
    name: "Grilled Vegetables",
    category: "addon",
  },
  {
    id: "a3",
    name: "Sauces",
    category: "addon",
  },
  {
    id: "a4",
    name: "Salad",
    category: "addon",
  },
  {
    id: "a5",
    name: "Classic",
    category: "addon",
  },
  {
    id: "a6",
    name: "Main Dish",
    category: "addon",
  },
];

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
];

const STEPS = [
  "Select Menu & Add ons",
  "Select Date & Time",
  "Delivery Details",
  "Payment",
];

export { SALADS, CLASSICS, SIGNATURES, ADDONS, TIME_SLOTS, STEPS };
