export const services = [
  {
    title: 'Interior Painting',
    description: 'Walls, ceilings, trim, doors, and detailed finish work completed with careful preparation and clean execution.',
    href: '/services#interior',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    featured: true,
  },
  {
    title: 'Exterior Painting',
    description: 'Durable exterior systems designed to protect New England homes while restoring crisp architectural character.',
    href: '/services#exterior',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    featured: true,
  },
  {
    title: 'Deck Restoration',
    description: 'Cleaning, preparation, staining, and protective coatings for weathered decks and outdoor living spaces.',
    href: '/services#decks',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Cabinet Painting',
    description: 'A precise, furniture-like finish that refreshes kitchens without the disruption of a full remodel.',
    href: '/services#cabinets',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Power Washing',
    description: 'Professional surface cleaning that removes dirt, mildew, and buildup before painting or seasonal maintenance.',
    href: '/services#power-washing',
    image: 'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Commercial Painting',
    description: 'Reliable painting for offices, retail spaces, and light commercial properties with minimal disruption.',
    href: '/services#commercial',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85',
  },
] as const;

export const trustItems = [
  { value: '40+', label: 'Years of experience' },
  { value: 'Owner', label: 'Supervised projects' },
  { value: 'Fully', label: 'Licensed & insured' },
  { value: 'Free', label: 'Project estimates' },
] as const;

export const reasons = [
  'Family-owned and locally established',
  'Clear communication from estimate to completion',
  'Detailed preparation before finish coats',
  'Professional painters who respect your home',
  'Advanced materials and proven techniques',
  'Work backed by a satisfaction-first approach',
] as const;

export const galleryItems = [
  {
    title: 'Classic exterior refresh',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85',
    className: 'md:row-span-2',
  },
  {
    title: 'Bright, refined living space',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    className: '',
  },
  {
    title: 'Architectural trim details',
    category: 'Detail work',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85',
    className: '',
  },
  {
    title: 'Restored outdoor living',
    category: 'Deck restoration',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85',
    className: 'md:col-span-2',
  },
] as const;

export const testimonials = [
  {
    quote: 'They painted the walls and kitchen ceiling in a two-bedroom townhouse with a partially finished basement. There was also a two-story foyer included in his price. Rick was prompt, his estimate was the lowest of the three companies, and his crew cleaned up very well before leaving. Great job!',
    name: 'Homeowner',
    location: 'Avon, CT',
  },
  {
    quote: 'Great work! Very professional and pleasant to deal with. The color is great, with careful attention to detail on trim and elsewhere. The work was finished on time and within budget. I have recommended him to friends and will continue to do so. I hope to have him back soon to do the upstairs!',
    name: 'Homeowner',
    location: 'Simsbury, CT',
  },
  {
    quote: 'Rick did a great job. I wanted to paint my new place before I moved in, and he was ready to go within a week of my initial call. They painted the living room with vaulted ceiling, dining room, kitchen, two bedrooms, hallway, and foyer. The whole thing was done within two days of work.',
    name: 'Homeowner',
    location: 'Enfield, CT',
  },
  {
    quote: 'Great job painting the exterior of my four-bedroom Colonial. I’m happy with the work, and the crew was very professional and polite. As promised, Rick was here from start to finish—not just at the end of the job to pick up the payment. I would recommend Rick’s Colonial Painting to anyone.',
    name: 'Homeowner',
    location: 'Avon, CT',
  },
  {
    quote: 'Very, very happy with this contractor. Rick and his crew removed the wallpaper on every wall and painted all the walls in our 1,700-square-foot home, including repairs and skim coating where needed. They did an outstanding job for a very reasonable price. The results are beautiful, and we will be hiring them again.',
    name: 'Homeowner',
    location: 'Wethersfield, CT',
  },
] as const;
