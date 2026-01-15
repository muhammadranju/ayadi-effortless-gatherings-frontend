import { MenuItem } from "./types";

const SALADS: MenuItem[] = [
  {
    id: "s1",
    name: "Dates & Fig Salad",
    description:
      "Mixed greens with dates, dried figs, and crunchy almonds, with a vinaigrette dressing.",
    category: "salad",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "s2",
    name: "Watermelon Feta Salad",
    description:
      "Arugula with watermelon and crumbled feta, with a habaq citrus dressing.",
    category: "salad",
    image:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1078&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "s3",
    name: "Crunchy Chickpea Salad",
    description:
      "Iceberg lettuce topped with crunchy chickpeas, with a tahina-caesar dressing.",
    category: "salad",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1968&auto=format&fit=crop",
  },
  {
    id: "s4",
    name: "Charred Corn Salad",
    description:
      "Baby spinach with charred corn, parmesan, toasted peanuts, basil-infused dressing",
    category: "salad",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CLASSICS: MenuItem[] = [
  {
    id: "c1",
    name: "Kubaibat Hail",
    description: "Vine leaves pockets stuffed with spiced Saudi rice.",
    category: "appetizer",
    isVegetarian: true,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "c2",
    name: "Spinach & Cheese Pockets",
    description: "Flaky pastry stuffed with spinach and cheese.",
    category: "appetizer",
    isVegetarian: true,
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "c3",
    name: "Farmouza",
    description: "Flaky pastry stuffed with minced beef and onions.",
    category: "appetizer",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "c4",
    name: "Shish Barak",
    description: "Minced meat dumplings in a yogurt garlic sauce.",
    category: "appetizer",
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "c5",
    name: "Shish Barak",
    description: "Minced meat dumplings in a yogurt garlic sauce.",
    category: "appetizer",
    image:
      "https://images.unsplash.com/photo-1723744910071-13809ddfe9df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "c6",
    name: "Shish Barak",
    description: "Minced meat dumplings in a yogurt garlic sauce.",
    category: "appetizer",
    image:
      "https://plus.unsplash.com/premium_photo-1664472661537-3b7a575c0972?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SIGNATURES: MenuItem[] = [
  {
    id: "m1",
    name: "Ayadi Signature Shrimp",
    description: "Shrimp cooked in a tahina dill sauce and pickled onions.",
    category: "main",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1942&auto=format&fit=crop",
  },
  {
    id: "m2",
    name: "Vegetable Timman",
    description: "Temman rice with butternut squash, zucchini, and eggplants.",
    category: "main",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "m3",
    name: "Chicken Saleeg",
    description: "Creamy saleeg with chicken.",
    category: "main",
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "m4",
    name: "Seabass Kozbariya",
    description: "Seabass fillet in a coriander tomato sauce.",
    category: "main",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "m5",
    name: "Lamb Qursan",
    description: "Layers of zucchini, carrot, green beans, pumpkin.",
    category: "main",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
