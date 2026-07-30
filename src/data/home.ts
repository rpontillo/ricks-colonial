export const services = [
  {
    title: 'Interior Painting',
    description: 'Walls, ceilings, trim, doors, and detailed finish work completed with careful preparation and clean execution.',
    href: '/services#interior',
    image: '/images/projects/bookcase-after.webp',
    featured: true,
  },
  {
    title: 'Exterior Painting',
    description: 'Durable exterior paint systems designed to protect New England homes and highlight crisp architectural character.',
    href: '/services#exterior',
    image: '/images/projects/colonial-03.webp',
    featured: true,
  },
  {
    title: 'Cabinet Painting',
    description: 'A precise, furniture-like finish that refreshes kitchens without the disruption of a full remodel.',
    href: '/services#cabinets',
    image: '/images/projects/cabinets-after.webp',
  },
  {
    title: 'Power Washing',
    description: 'Professional surface cleaning that removes dirt, mildew, and buildup before painting or seasonal maintenance.',
    href: '/services#power-washing',
    image: '/images/projects/colonial-06.webp',
  },
  {
    title: 'Commercial Painting',
    description: 'Reliable painting for offices, retail spaces, and light commercial properties with minimal disruption.',
    href: '/services#commercial',
    image: '/images/projects/colonial-07.webp',
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
    image: '/images/projects/colonial-03.webp',
    className: 'md:row-span-2',
  },
  {
    title: 'Bright, refined living space',
    category: 'Interior',
    image: '/images/projects/bookcase-after.webp',
    className: '',
  },
  {
    title: 'Architectural trim details',
    category: 'Detail work',
    image: '/images/projects/bathroom-after.webp',
    className: '',
  },
  {
    title: 'Refinished kitchen cabinetry',
    category: 'Cabinet painting',
    image: '/images/projects/cabinets-after.webp',
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
    quote: 'Great job painting the exterior of my four-bedroom Colonial. I’m happy with the work, and the crew was very professional and polite. As promised, Rick was here from start to finish—not just at the end of the job to pick up the payment. I would recommend Rick’s Colonial Painting LLC to anyone.',
    name: 'Homeowner',
    location: 'Avon, CT',
  },
  {
    quote: 'Very, very happy with this contractor. Rick and his crew removed the wallpaper on every wall and painted all the walls in our 1,700-square-foot home, including repairs and skim coating where needed. They did an outstanding job for a very reasonable price. The results are beautiful, and we will be hiring them again.',
    name: 'Homeowner',
    location: 'Wethersfield, CT',
  },
] as const;
