// Updated segments of src/admin/utils/storage.ts

// Contact Details
const defaultContact: ContactInfo = {
  address: 'Ramohlakoawa A/A, Maluti, 4740 (Matatiele), Eastern Cape',
  phone: '039 256 7244 / +27 78 065 1426',
  email: 'office@malutisss.co.za',
  monThu: '07:30 - 15:30',
  friday: '07:30 - 13:30',
  weekend: 'Closed',
};

// About Details
const defaultAbout: AboutInfo = {
  historyParagraphs: [
    'Maluti Senior Secondary School is a prominent Quintile 3 public school located in Maluti, Matatiele.',
    'With EMIS number 200500551, the school has a long-standing reputation for academic resilience and community involvement.',
    'We are a no-fee institution dedicated to providing high-quality secondary education to the learners of the Eastern Cape.'
  ],
  principalName: 'Mr Lulamile Masoka',
  principalTitle: 'Principal',
  principalMessage: [
    'Welcome to Maluti Senior Secondary School. Our 2025 results of 83% reflect the hard work of our educators and students.',
    'We strive for excellence in every classroom and aim to produce the future leaders of South Africa.'
  ],
};

// Hall of Fame - Highlighting Matubatuba Kanetso
const defaultHall: HallOfFameEntry[] = [
  { 
    id: 'mat-2025', 
    name: 'Matubatuba Kanetso', 
    title: 'Provincial Top Achiever', 
    year: '2025', 
    desc: 'Achieved a spectacular 7 distinctions in the 2025 NSC Examinations, earning provincial recognition.', 
    image: '/assets/achievements/matubatuba.png' 
  },
  { id: '2', name: 'Class of 2025', title: 'Top 10 Performers', year: '2025', desc: 'A cohort that contributed to 90 total distinctions.', image: '' },
];

// Results Update
const defaultResults: Record<string, YearResults> = {
  '2025': {
    overall: 83.0,
    wrote: 230,
    passed: 191, // Calculated from 191/230
    bachelor: 0, // Update via admin panel when known
    bachelorRate: 0,
    distinctions: 90,
    subjects: [
      { subject: 'Overall Pass Rate', rate: 83.0 },
    ],
  },
};
