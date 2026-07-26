export const galleryProjects = [
  { title: 'Colonial exterior renewal', category: 'exterior', location: 'Farmington Valley', image: '/images/projects/colonial-03.webp', span: 'lg:col-span-2 lg:row-span-2' },
  { title: 'Painted bookcase and millwork', category: 'interior', location: 'Greater Hartford', image: '/images/projects/bookcase-after.webp', span: '' },
  { title: 'Bathroom color transformation', category: 'interior', location: 'Central Connecticut', image: '/images/projects/bathroom-after.webp', span: '' },
  { title: 'Kitchen cabinet refinishing', category: 'cabinets', location: 'Farmington Valley', image: '/images/projects/cabinets-after.webp', span: 'lg:row-span-2' },
  { title: 'Classic Cape exterior', category: 'exterior', location: 'Greater Hartford', image: '/images/projects/colonial-01.webp', span: '' },
  { title: 'Traditional Colonial refresh', category: 'exterior', location: 'Central Connecticut', image: '/images/projects/colonial-02.webp', span: '' },
  { title: 'Crisp Colonial trim', category: 'exterior', location: 'Farmington Valley', image: '/images/projects/colonial-05.webp', span: 'lg:col-span-2' },
  { title: 'Classic white exterior', category: 'exterior', location: 'Greater Hartford', image: '/images/projects/colonial-06.webp', span: '' },
  { title: 'New England exterior finish', category: 'exterior', location: 'Central Connecticut', image: '/images/projects/colonial-04.webp', span: '' },
] as const;

export const galleryFilters = [
  ['all', 'All work'],
  ['interior', 'Interior'],
  ['exterior', 'Exterior'],
  ['cabinets', 'Cabinets'],
] as const;
