const products = [
    {
    id: 1,
    name: 'King Size Slim Kit',
    price: 144,
    category: 'papers',
     description: '32 Papers + 32 Tips',
    Textdescription: 'Extra-long king size papers for when you want to take your time. Same smooth burn, more room to roll.',
    image: '/images/eyenormal.png',
    overlayImage: '/images/comboone.png',
    images: [
      { bg: '/images/descbg.png', overlay: '/images/comboone.png' },
      { bg: '/images/descbg.png' , overlay: '/images/combothree.png' },
      { bg: '/images/descbg.png', overlay: '/images/rolling-combo.png' },
      { bg: '/images/descbg.png', overlay: '/images/rolling-kit.png', scale: 1.7 , badge: 'Pack of 32', },
    ],
     imagePosition: '33% 70%',
  },
    {
    id: 2,
    name: 'Kingsize/Slim Tips ',
    price: 69,
    category: 'tips',
     description: '32 Perforated Tips',
    Textdescription: 'Pack of 32 perfectly shaped rolling tips. Just fill, pack, twist, and enjoy. No skill required.',
    image: '/images/eyeflip.png',
        overlayImage: '/images/tipstwo.png',
     imagePosition: '27% 70%',
    badge: 'Pack of 32',
      images: [
      { bg: '/images/descbg.png', overlay: '/images/tipstwo.png' },
      { bg: '/images/descbg.png', overlay: '/images/rolling-tip.png'},
      { bg: '/images/descbg.png', overlay: '/images/tipsthree.png'},
      { bg: '/images/descbg.png', overlay: '/images/rolling-kit.png', scale: 1.7 },
    ],
  },
  {
    id: 3,
    name: 'King Size Slim',
    price: 111,
    category: 'papers',
     description: '32 Natural Papers',
    Textdescription: 'Extra-long king size papers for when you want to take your time. Same smooth burn, more room to roll.',
    image: '/images/eyenormal.png',
    overlayImage:  '/images/papertwo.png',
     imagePosition: '33% 70%',
    badge: 'Pack of 32',
     images: [
      { bg: '/images/descbg.png', overlay:  '/images/papertwo.png' },
      { bg: '/images/descbg.png', },
      { bg: '/images/descbg.png', overlay : '/images/rolling-paper.png' },
      { bg: '/images/descbg.png', overlay: '/images/rolling-kit.png', scale: 1.7 },
    ],
  },
];

export const categories = [
  { key: 'papers', label: 'Rolling Papers' },
  { key: 'tips', label: 'Rolling Tips' },
  { key: 'all', label: 'All Products' },
];

export default products;
