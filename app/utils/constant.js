export const FACEBOOK = "https://www.facebook.com/shirlingtonkb"
export const INSTAGRAM = "https://www.instagram.com/skb.dc"

export const SCHEDULE_LINK = "https://calendly.com/skbdc"

export const SERVICES = [
  {
    name: 'Kitchens',
    image: '/assets/services/kitchen.webp',
    original_image: '/assets/services/kitchen-original.webp',
    description: 'The kitchen is the heart of your home, where memories are made. At Shirlington Kitchen & Bath, we blend innovative design with expert craftsmanship to bring your culinary dreams to life. From selecting premium materials to flawless installation, our seamless process ensures a satisfying experience from start to finish.',
    url: "/page/kitchens"
  },
  {
    name: 'Bathrooms',
    image: '/assets/services/bathroom.webp',
    original_image: '/assets/services/bathroom-original.webp',
    description: 'From elegant fixtures to innovative storage and luxurious amenities, we offer a range of options to suit every style, ensuring results that exceed your expectations.',
    url: "/page/bathrooms"
  },
  {
    name: 'Custom Closets',
    image: '/assets/services/custom-closets.webp',
    original_image: '/assets/services/custom-closets-original.webp',
    description: 'Your closet should reflect your style. We design custom closets that maximize space, adding luxury and function to your home. Tailored to your needs, our closet solutions enhance both your space and daily routine.',
    url: "/page/custom-closets"

  },
  {
    name: 'Basement',
    image: '/assets/services/basement.webp',
    original_image: '/assets/services/basement-original.webp',
    description: 'Transform your basement into a versatile, inviting space. Whether it’s a cozy retreat, sleek bar, or entertainment room, we combine innovative design and expert craftsmanship to bring your vision to life.',
    url: '/page/basement'
  },
  {
    name: 'Home Remodel',
    image: '/assets/services/home-remodel.webp',
    original_image: '/assets/services/home-remodel-original.webp',
    description: 'We turn your home remodeling dreams into reality, going beyond kitchens and baths. Our licensed professionals are dedicated to exceeding expectations from start to finish, handling projects of any size or complexity. With full industry certifications, we ensure compliance and provide confidence at every step.',
    url: '/page/home-remodel'
  },
  {
    name: 'Exterior',
    image: '/assets/services/exterior.webp',
    original_image: '/assets/services/exterior-original.webp',
    description: 'Your home’s exterior is the first thing guests and onlookers notice, and we ensure it makes a lasting impression. Our team combines creative design and skilled craftsmanship to elevate your home’s curb appeal and outdoor living spaces. From siding updates to stunning front porches, we create exteriors that stand out.',
    url: '/page/exterior'
  },
];

export const PRODUCTS = [
  {
    name: 'Cabinetry',
    image: '/assets/products/cabinetry.webp',
    description: 'Experience the perfect blend of functionality, timeless design, and aesthetic appeal with our diverse range of cabinets, tailored to seamlessly complement your home.',
    url: '/page/cabinetry',
    associates: [
      { name: '', url: 'https://www.greatnortherncabinetry.com/', logo: '/assets/partners/great-northern.jpg' },
      { name: 'Fabuwood', url: 'https://www.fabuwood.com/', logo: '/assets/partners/fabuwood.jpg' },
      { name: 'Mantra', url: 'https://www.mantracabinets.com/products/', logo: '/assets/partners/mantra.jpg' },
      { name: 'Omega', url: "https://www.omegacabinetry.com/", logo: '/assets/partners/omega.jpg' },
      { name: 'Forevermark', url: 'https://forevermarkcabinetry.com/', logo: '/assets/partners/forevermark.jpg' },
    ]
  },
  {
    name: 'Countertops',
    image: '/assets/products/countertops.webp',
    description: 'Countertops are more than just functional surfaces—they’re where culinary creations come to life. Whether you’re envisioning the timeless elegance of marble, the sleek sophistication of quartz, or the rugged charm of granite, – We’re dedicated to helping you uncover the perfect choice that aligns seamlessly with your vision.',
    url: '/page/countertops',
    associates: [
      { name: '', url: 'https://www.wilsonart.com/', logo: '/assets/partners/wilsonart.jpg' },
      { name: '', url: 'https://www.msisurfaces.com/', logo: '/assets/partners/msi.jpg' },
      { name: '', url: 'https://www.cambriausa.com/', logo: '/assets/partners/cambria.jpg' },
      { name: '', url: 'https://www.formica.com/en-us/', logo: '/assets/partners/formica.jpg' },
    ]
  },
  {
    name: 'Flooring',
    image: '/assets/products/floor.webp',
    description: 'Flooring is more than just a surface—it sets the stage for your home’s ambiance and style. We offer a wide selection of flooring options to suit every taste and preference. From luxury vinyl plank to luxurious tiles, we have what you need to match any style you desire.',
    url: '/page/flooring',
    associates: [
      { name: '', url: "https://renwicktiles.com/", logo: '/assets/partners/renwick.jpg' },
      { name: '', url: 'https://www.mosaictileco.com/', logo: '/assets/partners/mosaic.jpg' },
      { name: '', url: 'https://gstile.com/', logo: '/assets/partners/garden-state-tile.jpg' },
      { name: '', url: 'https://www.eliaswilf.com/', logo: '/assets/partners/elias-wilf.jpg' },
      { name: '', url: 'https://www.tilebar.com/', logo: '/assets/partners/tilebar.jpg' },
      { name: '', url: 'https://architessa.com/', logo: '/assets/partners/architessa.jpg' },
    ]
  },
  {
    name: "Appliances",
    image: '/assets/products/appliances.webp',
    description: 'Appliances are essential elements of every household, providing the essential support needed for daily tasks and routines. From cooking and food preservation to laundry and home comfort, appliances are the backbone of modern living. We offer a diverse selection of top-quality appliances from leading brands, ensuring that our customers have access to cutting-edge technology, energy-efficient solutions, and stylish designs that elevate their living spaces.',
    url: '/page/appliances',
    associates: [
      { name: '', url: "https://www.topknobs.com/", logo: '/assets/partners/top-knobs.jpg' },
      { name: '', url: "https://dealer.hardwareresources.com/", logo: '/assets/partners/hardware-resources.jpg' },
      { name: '', url: "https://www.atlashomewares.com/", logo: '/assets/partners/atlas.jpg' },
      { name: '', url: "https://www.moen.com/", logo: '/assets/partners/moen.jpg' },
      { name: '', url: "https://www.kohler.com/", logo: '/assets/partners/kohler.jpg' },
    ]
  },
  {
    name: 'Blinds',
    image: '/assets/products/blinds.webp',
    description: 'Blinds are essential for every home, providing crucial functionality and enhancing daily comfort. They regulate light and privacy, insulate rooms, and complement interior décor. Our diverse range includes durable, stylish, and energy-efficient options, ensuring practical and attractive living spaces.',
    url: '/page/blinds',
    associates: [
      { name: '', url: 'https://www.geappliances.com/', logo: '/assets/partners/ge_appliances.jpg' },
      { name: '', url: 'https://www.whirlpool.com/', logo: '/assets/partners/whirlpool.jpg' },
      { name: '', url: "https://www.samsung.com/us/refrigerators/", logo: '/assets/partners/samsung.jpg' },
      { name: '', url: "https://www.thermador.com/us/", logo: '/assets/partners/thermador.jpg' },
    ],
    hideMenu: true
  },
  {
    name: 'Hardware',
    image: '/assets/products/hardware.webp',
    description: 'Home hardware is more than just functional—it’s the finishing touch that adds personality and style to your space. We offer a diverse selection of hardware options to suit every taste and preference. From sleek and modern to classic and traditional, we have what you need to enhance the aesthetic of your home.',
    url: '/page/hardware',
    hideMenu: false
  },
]

export const APP_HEADER = [
  {
    name: 'Home',
    default: true,
    url: '/'
  },
  {
    name: "Products",
    url: '/products',
    items: PRODUCTS
  },
  {
    name: "Services",
    url: '/services',
    items: SERVICES
  },
  {
    name: "Impact",
    url: "/page/impact"
  },
  {
    name: 'About Us',
    url: '/about-us',
    hideFooter: true
  },
  {
    name: 'Contact Us',
    url: '/contact-us',
    forceWhiteColor: true
  }
]

export const PARTNERS = [
  { name: '', logo: '/assets/partners/hunter-douglas.jpg' },
  { name: '', logo: '/assets/partners/forevermark.jpg' },
  { name: '', logo: '/assets/partners/great-northern.jpg' },
  { name: '', logo: '/assets/partners/fabuwood.jpg' },
  { name: '', logo: '/assets/partners/atlas.jpg' },
  { name: '', logo: '/assets/partners/hardware-resources.jpg' },
  { name: '', logo: '/assets/partners/omega.jpg' },
  { name: '', logo: '/assets/partners/kohler.jpg' },
  { name: '', logo: '/assets/partners/elias-wilf.jpg' },
  { name: '', logo: '/assets/partners/schluter-systems.jpg' },
  { name: '', logo: '/assets/partners/mantra.jpg' },
  { name: '', logo: '/assets/partners/mosaic.jpg' },
  { name: '', logo: '/assets/partners/garden-state-tile.jpg' },
  { name: '', logo: '/assets/partners/renwick.jpg' },
  { name: '', logo: '/assets/partners/top-knobs.jpg' },
  { name: '', logo: '/assets/partners/omega.jpg' },
  { name: '', logo: '/assets/partners/moen.jpg' },
  { name: '', logo: '/assets/partners/delta.jpg' },
  { name: '', logo: '/assets/partners/tilebar.jpg' },
  { name: '', logo: '/assets/partners/architessa.jpg' },
  { name: '', logo: '/assets/partners/formica.jpg' },
  { name: '', logo: '/assets/partners/wilsonart.jpg' },
  { name: '', logo: '/assets/partners/thermador.jpg' },
];

export const ASSOCIATIONS = [
  { name: 'NKBA', logo: '/assets/nkba.jpg' },
  { name: 'NAA', logo: '/assets/naa.jpg' },
  { name: 'NARI', logo: '/assets/nari.jpg' },
  { name: 'NAHB', logo: '/assets/nahb.jpg' },
];