import images from './images';

const wines = [
  {
    title: 'Sunset Citrus Cold Brew',
    price: '£2.60',
    tags: 'Refreshing citrus-infused cold brew',
  },
  {
    title: 'Autumn Spice Maple Latte',
    price: '£3.10',
    tags: 'Warm maple syrup and autumn spices',
  },
  {
    title: 'Honey Harvest Iced Macchiato',
    price: '£3.10',
    tags: 'Sweet honey blend with a smooth iced macchiato',
  },
  {
    title: 'Crisp Apple Caramel Cold Brew',
    price: '£3.30',
    tags: 'Crisp apple and caramel flavors in a cold brew',
  },
  // {
  //   title: 'Pumpkin Breeze Nitro',
  //   price: '£3.40',
  //   tags: 'Smooth pumpkin nitro coffee with a creamy finish',
  // },
];

const cocktails = [
  {
    title: 'Sunny Lemon Burst Scones',
    price: '£3.70',
    tags: 'Zesty lemon scones, sweet & tart.' ,
  },
  {
    title: "Autumn Harvest Cherry Tart",
    price: '£4.00',
    tags: 'Cherry tart with warm spices.',
  },
  {
    title: 'Cherry Blossom Crubmle Bars',
    price: '£2.40',
    tags: 'Cherry crumble with buttery top.',
  },
  {
    title: 'Spiced Apple Cider Donuts',
    price: '£2.80',
    tags: 'Cinnamon-sugar apple cider donuts.',
  },
  // {
  //   title: 'Maple Glazed Pumpkin Muffins',
  //   price: '£4.50',
  //   tags: 'Pumpkin muffins with maple glaze.',
  // },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { wines, cocktails, awards };
