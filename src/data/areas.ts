export interface Area {
  slug: string;
  name: string;
  intro: string;
  highlights: string[];
}

export const areas: Area[] = [
  {
    slug: 'oak-ridge-north',
    name: 'Oak Ridge North',
    intro: 'We provide AC repair, maintenance, and installation throughout Oak Ridge North. From established neighborhoods to newer communities, we help homeowners stay cool through the long Texas cooling season.',
    highlights: [
      'Local service across Oak Ridge North neighborhoods',
      'Familiarity with common regional AC systems and brands',
      'Responsive scheduling for both planned and urgent cooling needs',
    ],
  },
  {
    slug: 'the-woodlands',
    name: 'The Woodlands',
    intro: 'The Woodlands homes rely on dependable air conditioning through hot summers. We service central air systems and mini-splits for properties throughout The Woodlands with clear communication and careful work.',
    highlights: [
      'Coverage for a wide range of Woodlands communities',
      'Experience with both standard central air and ductless systems',
      'Priority attention for no-cooling situations in extreme heat',
    ],
  },
  {
    slug: 'spring',
    name: 'Spring',
    intro: 'Spring residents count on us for AC repair, tune-ups, and system replacements. We provide straightforward assessments and reliable service for homes throughout the Spring area.',
    highlights: [
      'Service throughout the Spring area',
      'Support for both older and newer cooling equipment',
      'Clear estimates before work begins',
    ],
  },
  {
    slug: 'conroe',
    name: 'Conroe',
    intro: 'Conroe is within our service area for air conditioning repair and maintenance. Whether you need a same-day repair or a seasonal tune-up, we aim for clear estimates and careful work.',
    highlights: [
      'Coverage across Conroe neighborhoods',
      'Experience with a mix of system ages and brands',
      'Flexible scheduling options',
    ],
  },
  {
    slug: 'shenandoah',
    name: 'Shenandoah',
    intro: 'Shenandoah properties are part of our regular service territory. We help homeowners with AC repair, maintenance, and installation support tailored to local homes.',
    highlights: [
      'Convenient service for Shenandoah residents',
      'Attention to both emergency and scheduled work',
      'Honest assessments of repair versus replacement',
    ],
  },
  {
    slug: 'magnolia',
    name: 'Magnolia',
    intro: 'Magnolia homeowners can request AC repair, maintenance, and system evaluations. We bring the same careful approach to Magnolia that we use throughout the Oak Ridge North and Woodlands region.',
    highlights: [
      'Service reach into Magnolia',
      'Support for residential cooling systems of various ages',
      'Transparent pricing after diagnosis',
    ],
  },
  {
    slug: 'tomball',
    name: 'Tomball',
    intro: 'Tomball is within our service territory for air conditioning repair and related HVAC work. We provide dependable service for homes that may be a bit further from the Oak Ridge North core.',
    highlights: [
      'Coverage for Tomball and surrounding areas',
      'Capability with both routine and more complex AC work',
      'Focus on lasting repairs rather than temporary fixes',
    ],
  },
  {
    slug: 'porter',
    name: 'Porter',
    intro: 'Porter residents can count on us for professional AC service including repair, maintenance, and system checks. We serve homes across the Porter area with accountable local service.',
    highlights: [
      'Service for Porter properties',
      'Experience with seasonal cooling challenges common in the region',
      'Clear communication and realistic scheduling',
    ],
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
