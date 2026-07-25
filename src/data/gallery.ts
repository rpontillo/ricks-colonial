export const galleryProjects = [
  { title: 'Colonial exterior renewal', category: 'exterior', location: 'Farmington Valley', image: '/images/projects/colonial-03.jpg', span: 'lg:col-span-2 lg:row-span-2' },
  { title: 'Painted bookcase and millwork', category: 'interior', location: 'Greater Hartford', image: '/images/projects/bookcase-after.jpg', span: '' },
  { title: 'Bathroom color transformation', category: 'interior', location: 'Central Connecticut', image: '/images/projects/bathroom-after.jpg', span: '' },
  { title: 'Kitchen cabinet refinishing', category: 'cabinets', location: 'Farmington Valley', image: '/images/projects/cabinets-after.jpg', span: 'lg:row-span-2' },
  { title: 'Classic Cape exterior', category: 'exterior', location: 'Greater Hartford', image: '/images/projects/colonial-01.jpg', span: '' },
  { title: 'Traditional Colonial refresh', category: 'exterior', location: 'Central Connecticut', image: '/images/projects/colonial-02.jpg', span: '' },
  { title: 'Crisp Colonial trim', category: 'exterior', location: 'Farmington Valley', image: '/images/projects/colonial-05.jpg', span: 'lg:col-span-2' },
  { title: 'Classic white exterior', category: 'exterior', location: 'Greater Hartford', image: '/images/projects/colonial-06.jpg', span: '' },
  { title: 'New England exterior finish', category: 'exterior', location: 'Central Connecticut', image: '/images/projects/colonial-04.jpg', span: '' },
] as const;

export const galleryFilters = [
  ['all', 'All work'],
  ['interior', 'Interior'],
  ['exterior', 'Exterior'],
  ['cabinets', 'Cabinets'],
] as const;
