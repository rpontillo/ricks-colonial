export const galleryProjects = [
  { title: 'Colonial exterior renewal', category: 'exterior', location: 'Farmington Valley', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85', span: 'lg:col-span-2 lg:row-span-2' },
  { title: 'Bright living room refresh', category: 'interior', location: 'Greater Hartford', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85', span: '' },
  { title: 'Detailed millwork finish', category: 'interior', location: 'Central Connecticut', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85', span: '' },
  { title: 'Kitchen cabinet transformation', category: 'cabinets', location: 'Farmington Valley', image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1100&q=85', span: 'lg:row-span-2' },
  { title: 'Restored outdoor deck', category: 'decks', location: 'Greater Hartford', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85', span: '' },
  { title: 'Refined dining room palette', category: 'interior', location: 'Central Connecticut', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85', span: '' },
  { title: 'Crisp exterior trim', category: 'exterior', location: 'Farmington Valley', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85', span: 'lg:col-span-2' },
  { title: 'Calm bedroom repaint', category: 'interior', location: 'Greater Hartford', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85', span: '' },
  { title: 'Classic white cabinetry', category: 'cabinets', location: 'Central Connecticut', image: 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=1100&q=85', span: '' },
] as const;

export const galleryFilters = [
  ['all', 'All work'],
  ['interior', 'Interior'],
  ['exterior', 'Exterior'],
  ['cabinets', 'Cabinets'],
  ['decks', 'Decks'],
] as const;
