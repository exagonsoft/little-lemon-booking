import {
  backlavaSlice,
  caesarSalad,
  falafels,
  grilledSallad,
  kebbaps,
  margueriaPizza,
  mediterranChicken,
  seaPaella,
  spinashSlice,
  styfedGrapes,
} from "../assets/images";

export const menu = [
  {
    name: "Margherita Pizza",
    description:
      "A classic pizza topped with melted mozzarella cheese, fresh basil leaves, and a golden-brown crust. Perfect for those who appreciate simplicity and authentic flavors.",
    image: margueriaPizza,
  },
  {
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce, Parmesan cheese, croutons, and a rich Caesar dressing with a touch of garlic.",
    image: caesarSalad,
  },
  {
    name: "Mediterranean Chicken",
    description:
      "Tender grilled chicken wrapped with fresh tomatoes, cucumbers, lettuce, and a light tzatziki sauce.",
    image: mediterranChicken,
  },
  {
    name: "Seafood Paella",
    description:
      "A Spanish classic with saffron-infused rice, shrimp, mussels, and a hint of lemon for a refreshing twist.",
    image: seaPaella,
  },
  {
    name: "Lamb Kebab",
    description:
      "Juicy, marinated lamb skewers served with a side of roasted vegetables and garlic yogurt sauce.",
    image: kebbaps,
  },
  {
    name: "Spinach and Feta Pie",
    description:
      "A flaky pastry filled with a delicious mix of spinach, creamy feta cheese, and herbs.",
    image: spinashSlice,
  },
  {
    name: "Grilled Halloumi Salad",
    description:
      "Grilled halloumi cheese paired with cherry tomatoes, arugula, and a tangy balsamic glaze.",
    image: grilledSallad,
  },
  {
    name: "Stuffed Grape Leaves",
    description:
      "Grape leaves stuffed with a savory blend of rice, pine nuts, and spices, served with a lemon wedge.",
    image: styfedGrapes,
  },
  {
    name: "Baklava",
    description:
      "A sweet, layered dessert made of phyllo dough, chopped nuts, and honey syrup for a perfect finish.",
    image: backlavaSlice,
  },
  {
    name: "Falafel Plate",
    description:
      "Crispy falafels served with hummus, tabbouleh, and warm pita bread.",
    image: falafels,
  },
];
