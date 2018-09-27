import { Product } from '../shared/product';

export const PANTSItems: Product[] = [
  {
    id: 6,
    name: 'Red Pants',
    image: './assets/images/RedPants.jpg',
    category: 'Pants',
    label: 'New IN',
    price: '23.50',
    description: 'Rumba red ankle pants',
   feedbacks: [
  {
    rating: 3,
    comment: 'I ordered these and they were way too big. Not for short slim ladies.',
    author: 'A Short Slim Lady',
    date: '2017-12-16T17:57:28.556094Z',
  },
  {
    rating: 5,
    comment: 'Loved the fit, material, style and color. I want more in different colors! Excellent.',
    author: 'Daniella Borne',
    date: '2018-02-06T17:57:28.556094Z'
  },
  {
    rating: 5,
    comment: 'They are very comfortable and wears nice with blouses for work.',
    author: 'Michael Jordan',
    date: '2018-10-05T17:57:28.556094Z'
  },
  {
    rating: 4,
    comment: 'Fit is true to size. They are very comfortable and look quite smart.',
    author: 'Brock',
    date: '2017-11-13T17:57:28.556094Z'
  }
]
}
];
