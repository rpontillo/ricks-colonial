export const serviceDetails = [
  {
    id: 'interior',
    title: 'Interior Painting',
    summary: 'Thoughtful preparation and refined finishes for the rooms where life happens.',
    description: 'From a single room refresh to a full-home repaint, every interior project begins with protecting your property and preparing the surface. Wallpaper can be removed, sheetrock repaired, and walls sanded and primed where needed before crisp, even finish coats are applied.',
    image: '/images/projects/bookcase-after.jpg',
    features: ['Walls and ceilings', 'Trim, doors, and molding', 'Wallpaper removal', 'Sheetrock repair and patching'],
  },
  {
    id: 'exterior',
    title: 'Exterior Painting',
    summary: 'Durable protection that preserves architectural character and curb appeal.',
    description: 'A fresh exterior finish does more than improve curb appeal—it helps protect your home from harsh weather and environmental wear. Work includes careful inspection, washing, scraping, sanding, spot priming, caulking, and coatings selected for the surface and exposure.',
    image: '/images/projects/colonial-03.jpg',
    features: ['Wood and aluminum siding', 'Doors, shutters, and porches', 'Window glazing and light repairs', 'Brush, roller, and spray application'],
  },
  {
    id: 'decks',
    title: 'Deck Restoration',
    summary: 'Restore weathered wood and protect outdoor spaces for seasons to come.',
    description: 'Deck restoration combines power washing, sanding, selective repairs, and staining with a finish chosen for the condition of the wood and the appearance you want. The result is a cleaner, safer, and more inviting outdoor space.',
    image: '/images/projects/colonial-01.jpg',
    features: ['Cleaning and mildew treatment', 'Sanding and surface prep', 'Solid and semi-transparent stains', 'Railings, stairs, and trim'],
  },
  {
    id: 'cabinets',
    title: 'Cabinet Painting',
    summary: 'A precise, furniture-like finish without the cost of replacing sound cabinetry.',
    description: 'Cabinet projects are approached as finish work, not wall painting. Doors and hardware are methodically labeled, surfaces are cleaned and prepared, and durable coatings are applied for a smooth, cohesive result.',
    image: '/images/projects/cabinets-after.jpg',
    features: ['Kitchen and bath cabinetry', 'Degreasing and adhesion prep', 'Durable enamel finishes', 'Organized removal and reinstallation'],
  },
  {
    id: 'power-washing',
    title: 'Power Washing',
    summary: 'Professional cleaning for a healthier surface and a stronger finish.',
    description: 'Power washing removes dirt, mildew, pollen, and surface buildup from siding, decks, patios, and other exterior areas. It can be provided as a stand-alone service or as essential preparation before painting or staining.',
    image: '/images/projects/colonial-06.jpg',
    features: ['Siding and trim cleaning', 'Deck and patio washing', 'Pre-paint preparation', 'Material-appropriate pressure'],
  },
  {
    id: 'commercial',
    title: 'Light Commercial Painting',
    summary: 'Dependable scheduling and professional results for working spaces.',
    description: 'Offices, retail spaces, and small commercial properties need a contractor who communicates clearly and minimizes disruption. Work is planned around access, operations, and project priorities.',
    image: '/images/projects/colonial-07.jpg',
    features: ['Offices and retail interiors', 'Common areas and rental turnovers', 'Flexible scheduling', 'Clean, organized job sites'],
  },
] as const;

export const processSteps = [
  { title: 'Walkthrough & estimate', text: 'We review the space, surfaces, priorities, and timing, then provide a clear project estimate.' },
  { title: 'Preparation plan', text: 'Furniture, floors, landscaping, and adjacent surfaces are protected before repairs and thorough surface preparation begin.' },
  { title: 'Professional application', text: 'Coatings are applied using the tools and techniques best suited to each surface and finish.' },
  { title: 'Clean finish', text: 'The home is kept neat at the end of each workday, then the completed project is cleaned and reviewed with you.' },
] as const;

export const additionalServices = [
  'Wallpaper removal',
  'Fire-damage repair',
  'Window glazing',
  'Sheetrock repair',
  'Waterproofing',
  'Light carpentry',
] as const;

export const serviceFaqs = [
  { question: 'Do you provide free estimates?', answer: 'Yes. Rick’s Colonial Painting provides free project estimates after reviewing the space, surfaces, scope, and scheduling needs.' },
  { question: 'Will you help with paint colors?', answer: 'Yes. We can help narrow color and sheen choices based on lighting, architecture, adjacent finishes, durability needs, and the look you want.' },
  { question: 'How is the home protected during work?', answer: 'Floors, furnishings, fixtures, landscaping, and adjacent surfaces are covered or masked as appropriate. Work areas are kept organized and cleaned throughout the project.' },
  { question: 'What affects the project schedule?', answer: 'Project size, surface condition, repair needs, product cure times, access, and—for exterior work—weather all affect timing. The expected schedule is discussed before work begins.' },
] as const;
