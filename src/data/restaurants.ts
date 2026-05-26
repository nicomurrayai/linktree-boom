export interface Restaurant {
  name: string
  description: string
  logo: string
  href: string
  accent: string
}

export const restaurants: Restaurant[] = [
  {
    name: 'Sushiboom',
    description: 'Sushi fresco, rolls y sabores asiáticos.',
    logo: '/sushiboom.png',
    href: 'https://lacartaa.com/sushiboom-229',
    accent: '#ff9d28',
  },
  {
    name: 'GreenBoom',
    description: 'Ensaladas frescas y opciones livianas.',
    logo: '/greenboom.png',
    href: 'https://lacartaa.com/green-boom-1',
    accent: '#a3cc4d',
  },
  {
    name: 'WrapsBoom',
    description: 'Wraps sabrosos, prácticos y recién hechos.',
    logo: '/wrapsboom.png',
    href: 'https://lacartaa.com/wraps-boom-1',
    accent: '#cebddd',
  },
]
