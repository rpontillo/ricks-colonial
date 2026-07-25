export const serviceDetails = [
  {
    id: 'interior',
    number: '01',
    title: 'Interior Painting',
    summary: 'Thoughtful preparation and refined finishes for the rooms where life happens.',
    description: 'From a single room refresh to a full-home repaint, every interior project begins with protection and preparation. Surfaces are repaired, sanded, primed where needed, and finished with crisp lines and even coverage.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
    features: ['Walls and ceilings', 'Trim, doors, and molding', 'Drywall repair and patching', 'Color transitions and accent walls'],
  },
  {
    id: 'exterior',
    number: '02',
    title: 'Exterior Painting',
    summary: 'Durable protection that preserves architectural character and curb appeal.',
    description: 'Connecticut weather demands more than a quick coat of paint. Exterior work includes careful inspection, washing, scraping, sanding, spot priming, caulking, and application of coatings selected for the surface and exposure.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85',
    features: ['Siding and trim', 'Doors, shutters, and porches', 'Surface preparation and repairs', 'Weather-resistant finish systems'],
  },
  {
    id: 'decks',
    number: '03',
    title: 'Deck Restoration',
    summary: 'Restore weathered wood and protect outdoor spaces for seasons to come.',
    description: 'Deck restoration combines surface cleaning, sanding, selective repairs, and a finish chosen for the wood condition and desired appearance. The result is a cleaner, safer, and more inviting outdoor space.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85',
    features: ['Cleaning and mildew treatment', 'Sanding and surface prep', 'Solid and semi-transparent stains', 'Railings, stairs, and trim'],
  },
  {
    id: 'cabinets',
    number: '04',
    title: 'Cabinet Painting',
    summary: 'A precise, furniture-like finish without the cost of replacing sound cabinetry.',
    description: 'Cabinet projects are approached as finish work, not wall painting. Doors and hardware are methodically labeled, surfaces are cleaned and prepared, and durable coatings are applied for a smooth, cohesive result.',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1400&q=85',
    features: ['Kitchen and bath cabinetry', 'Degreasing and adhesion prep', 'Durable enamel finishes', 'Organized removal and reinstallation'],
  },
  {
    id: 'power-washing',
    number: '05',
    title: 'Power Washing',
    summary: 'Professional cleaning for a healthier surface and a stronger finish.',
    description: 'Power washing removes dirt, mildew, pollen, and surface buildup from siding, decks, patios, and other exterior areas. Pressure and cleaning methods are adjusted to suit each material.',
    image: 'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=85',
    features: ['Siding and trim cleaning', 'Deck and patio washing', 'Pre-paint preparation', 'Material-appropriate pressure'],
  },
  {
    id: 'commercial',
    number: '06',
    title: 'Light Commercial Painting',
    summary: 'Dependable scheduling and professional results for working spaces.',
    description: 'Offices, retail spaces, and small commercial properties need a contractor who communicates clearly and minimizes disruption. Work is planned around access, operations, and project priorities.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85',
    features: ['Offices and retail interiors', 'Common areas and rental turnovers', 'Flexible scheduling', 'Clean, organized job sites'],
  },
] as const;

export const processSteps = [
  { number: '01', title: 'Walkthrough & estimate', text: 'We review the space, surfaces, priorities, and timing, then provide a clear project estimate.' },
  { number: '02', title: 'Preparation plan', text: 'Furniture, floors, landscaping, and adjacent surfaces are protected before repairs and prep begin.' },
  { number: '03', title: 'Professional application', text: 'Coatings are applied using the tools and techniques best suited to each surface and finish.' },
  { number: '04', title: 'Final walkthrough', text: 'The work area is cleaned and the completed project is reviewed with you before closeout.' },
] as const;

export const serviceFaqs = [
  { question: 'Do you provide free estimates?', answer: 'Yes. Rick’s Colonial Painting provides free project estimates after reviewing the space, surfaces, scope, and scheduling needs.' },
  { question: 'Will you help with paint colors?', answer: 'Yes. We can help narrow color and sheen choices based on lighting, architecture, adjacent finishes, durability needs, and the look you want.' },
  { question: 'How is the home protected during work?', answer: 'Floors, furnishings, fixtures, landscaping, and adjacent surfaces are covered or masked as appropriate. Work areas are kept organized and cleaned throughout the project.' },
  { question: 'What affects the project schedule?', answer: 'Project size, surface condition, repair needs, product cure times, access, and—for exterior work—weather all affect timing. The expected schedule is discussed before work begins.' },
] as const;
