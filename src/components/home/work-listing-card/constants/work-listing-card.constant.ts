import { WorkItem } from '../models/work-listing.model';

export const WORK_LISTINGS: WorkItem[] = [
  {
    image_url:
      'https://res.cloudinary.com/dxeimkzxk/image/upload/v1741633127/1_e8bmfj.jpg',
    image_alt: 'lifestyle-blogs',
    icon_name: 'compass',
    heading: 'Vagabond Vignettes',
    subheading: 'Lifestyle Blog',
    description:
      "Weaving timeless stories that echo the beauty of exploration. Join me on a journey of discovery, where each post paints a vivid picture of life's adventures.",
    link: '/blog/lifestyle-travel'
  },
  {
    image_url:
      'https://res.cloudinary.com/dxeimkzxk/image/upload/v1741633126/2_biotxt.jpg',
    image_alt: 'tech-blogs',
    icon_name: 'binary',
    heading: 'Byte Ballet',
    subheading: 'Technology Blog',
    description:
      'Where language of algorithms meets the choreography of code. From the waltz of data structures to the pirouettes of programming challenges, this is my digital dance floor.',
    link: '/blog/technology'
  },
  {
    image_url:
      'https://res.cloudinary.com/dxeimkzxk/image/upload/v1741633127/3_mmb0fi.jpg',
    image_alt: 'content-creation',
    icon_name: 'aperture',
    heading: 'Visual Alchemy',
    subheading: 'Storytelling',
    description:
      'From snapshots to cinematic journeys, each piece is a visual narrative that transcends the limits of words. Craft stories that resonate, each frame a portal to emotions, moments, and tales waiting to unfold.',
    link: '/content'
  },
  {
    image_url:
      'https://res.cloudinary.com/dxeimkzxk/image/upload/v1741633128/4_ncuvbe.jpg',
    image_alt: 'podcast',
    icon_name: 'podcast',
    heading: 'Eclipsed Echoes',
    subheading: 'Podcast',
    description:
      'Join me in unraveling unheard stories, diverse perspectives, and captivating narratives that often remain eclipsed. From intimate interviews to explorations of untold topics, this podcast is a sanctuary for the curious minds.',
    link: '/content#podcast'
  },
  {
    image_url:
      'https://res.cloudinary.com/dxeimkzxk/image/upload/v1741633128/5_nigrqf.jpg',
    image_alt: 'shop',
    icon_name: 'shopping-bag',
    heading: 'Pixel Odyssey',
    subheading: 'Prints Shop',
    description:
      "Each print here is a condensed chapter blending my narrative, a place's essence, and the dreams held in each frame. Elevate your space with these prints.",
    link: '/shop'
  }
];
