export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
}

export interface Grocery {
  id: string;
  name: string;
  image: string;
  price: number;
  unit?: string;
}

export const restaurants: Restaurant[] = [
  {
    id: 'r1',
    name: 'Burger Hub',
    image: 'https://images.unsplash.com/photo-1722125680299-783f98369451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50JTIwZm9vZHxlbnwxfHx8fDE3NjIxMDMwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.3,
    cuisine: 'Burgers, American',
    deliveryTime: '30 mins',
  },
  {
    id: 'r2',
    name: 'Pizza Planet',
    image: 'https://images.unsplash.com/photo-1563245738-9169ff58eccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYyMTIwNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    cuisine: 'Pizza, Italian',
    deliveryTime: '25 mins',
  },
  {
    id: 'r3',
    name: 'Tandoori Treats',
    image: 'https://images.unsplash.com/photo-1728910758653-7e990e489cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjIxNzc5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    cuisine: 'North Indian, Tandoor',
    deliveryTime: '35 mins',
  },
  {
    id: 'r4',
    name: 'Sushi Express',
    image: 'https://images.unsplash.com/photo-1696449241254-11cf7f18ce32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYyMTYzMDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    cuisine: 'Japanese, Sushi',
    deliveryTime: '40 mins',
  },
  {
    id: 'r5',
    name: 'South Spice',
    image: 'https://images.unsplash.com/photo-1743517894265-c86ab035adef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGRvc2F8ZW58MXx8fHwxNzYyMTc4ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.4,
    cuisine: 'South Indian',
    deliveryTime: '28 mins',
  },
  {
    id: 'r6',
    name: 'Chinese Wok',
    image: 'https://images.unsplash.com/photo-1601565960311-8a7f4e1ab709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbm9vZGxlcyUyMGRpc2h8ZW58MXx8fHwxNzYyMTc0NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.2,
    cuisine: 'Chinese',
    deliveryTime: '32 mins',
  },
];

export const groceries: Grocery[] = [
  {
    id: 'g1',
    name: 'Fresh Mixed Vegetables',
    image: 'https://images.unsplash.com/photo-1670680901600-8b2b1856ce3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBncm9jZXJ5fGVufDF8fHx8MTc2MjE2MjQyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    price: 89,
    unit: '500g',
  },
  {
    id: 'g2',
    name: 'Fresh Milk',
    image: 'https://images.unsplash.com/photo-1621458472871-d8b6a409aba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrJTIwZGFpcnklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjIwNjIwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 58,
    unit: '1L',
  },
  {
    id: 'g3',
    name: 'Artisan Bread',
    image: 'https://images.unsplash.com/photo-1679673987713-54f809ce417d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyZWFkJTIwYmFrZXJ5fGVufDF8fHx8MTc2MjEwNDIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    price: 45,
    unit: '400g',
  },
  {
    id: 'g4',
    name: 'Fresh Vegetables',
    image: 'https://images.unsplash.com/photo-1670680901600-8b2b1856ce3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBncm9jZXJ5fGVufDF8fHx8MTc2MjE2MjQyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    price: 120,
    unit: '1kg',
  },
  {
    id: 'g5',
    name: 'Fresh Apples',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGFwcGxlc3xlbnwxfHx8fDE3NjIxNzg4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 120,
    unit: '1kg',
  },
  {
    id: 'g6',
    name: 'Bananas',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJhbmFuYXN8ZW58MXx8fHwxNzYyMTc4ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 50,
    unit: '1 dozen',
  },
  {
    id: 'g7',
    name: 'Oranges',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yYW5nZXN8ZW58MXx8fHwxNzYyMTc4ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 80,
    unit: '1kg',
  },
  {
    id: 'g8',
    name: 'Potato Chips',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFja3MlMjBjaGlwc3xlbnwxfHx8fDE3NjIxNzg4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 30,
    unit: '100g',
  },
];
