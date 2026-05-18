const products = [
    {
    id: 1,
    name: 'Kingsize Slim Kit',
    price: 144,
    category: 'papers',
     description: '32 Papers + 32 Tips',
    Textdescription: 'Slow burning Kingsize papers for when you want to take your time. Same smooth burn, more room to roll.',
    image: '/images/eyenormal.png',
    overlayImage: '/images/comboone.webp',
    images: [
      { bg: '/images/descbg.png', overlay: '/images/comboone.webp' },
      { bg: '/images/descbg.png' , overlay: '/images/combothree.webp' },
      { bg: '/images/descbg.png', overlay: '/images/rolling-combo.webp' },
      { bg: '/images/descbg.png', overlay: '/images/rolling-kit.webp', scale: 1.7 , badge: 'Pack of 32', },
      { bg: '/images/descbg.png', overlay: '/images/EAN_8908030756022(kit).png' },
    ],
     imagePosition: '33% 70%',
  },
    {
    id: 2,
    name: 'Kingsize/Slim Tips ',
    price: 69,
    category: 'tips',
     description: '32 Perforated Tips',
    Textdescription: 'Pack of 32 perforated rolling tips. Just fill, pack, twist, and enjoy. No skill required.',
    image: '/images/eyeflip.png',
        overlayImage: '/images/tipstwo.webp',
    badge: 'Pack of 32',
      images: [
      { bg: '/images/descbg.png', overlay: '/images/tipstwo.webp' },
      { bg: '/images/descbg.png', overlay: '/images/rolling-tip.webp'},
      { bg: '/images/descbg.png', overlay: '/images/tipsthree.webp'},
      { bg: '/images/descbg.png', overlay: '/images/rolling-kit.webp', scale: 1.7 },
      { bg: '/images/descbg.png', overlay: '/images/EAN_8908030756015(tips).png' },
    ],
  },
  {
    id: 3,
    name: 'Kingsize Slim',
    price: 111,
    category: 'papers',
     description: '32 Natural Papers',
    Textdescription: 'Slow burning Kingsize papers for when you want to take your time. Same smooth burn, more room to roll.',
    image: '/images/eyenormal.png',
    overlayImage:  '/images/papertwo.webp',
     imagePosition: '33% 70%',
    badge: 'Pack of 32',
     images: [
      { bg: '/images/descbg.png', overlay:  '/images/papertwo.webp' },
      { bg: '/images/descbg.png', },
      { bg: '/images/descbg.png', overlay : '/images/rolling-paper.webp' },
      { bg: '/images/descbg.png', overlay: '/images/rolling-kit.webp', scale: 1.7 },
      { bg: '/images/descbg.png', overlay: '/images/EAN_8908030756008(papers).png' },
    ],
  },
];

export const categories = [
  { key: 'papers', label: 'Rolling Papers' },
  { key: 'tips', label: 'Rolling Tips' },
  { key: 'all', label: 'All Products' },
];

export default products;
