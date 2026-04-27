// src/admin/utils/storage.ts

export interface NewsItem { id: string; title: string; content: string; image: string; date: string; }
export interface DocumentItem { id: string; name: string; grade: string; subject: string; fileData: string; fileName: string; uploadDate: string; }
export interface Application { id: string; firstName: string; lastName: string; dob: string; gender?: string; grade: string; year: string; studentNumber: string; guardianName: string; guardianPhone: string; guardianEmail: string; address: string; applicationType: 'General' | 'Boarding'; status: string; submittedDate: string; uploads: any[]; subjectMarks: any[]; averageMark: number; }
export interface ContactInfo { address: string; phone: string; email: string; monThu: string; friday: string; weekend: string; }
export interface AboutInfo { historyParagraphs: string[]; principalName: string; principalTitle: string; principalMessage: string[]; }
export interface Activity { id: string; name: string; description: string; category: string; image: string; }
export interface HallOfFameEntry { id: string; name: string; title: string; year: string; desc: string; image: string; }
export interface YearResults { overall: number; bachelor: number; bachelorRate: number; distinctions: number; wrote: number; subjects: { subject: string; rate: number }[]; }

export function generateId(): string { return Date.now().toString(36) + Math.random().toString(36).substr(2, 9); }

// --- SCHOOL SPECIFIC DATA ---

const defaultNews: NewsItem[] = [
  {
    id: '1',
    title: '2025 Matric Results Celebration',
    date: 'Jan 2026',
    content: 'We celebrate our 83% pass rate and our provincial top achiever Matubatuba Kanetso who obtained 7 distinctions.',
    image: '',
  },
];

const defaultContact: ContactInfo = {
  address: 'Ramohlakoawa A/A, Maluti, 4740 (Matatiele), Eastern Cape',
  phone: '039 256 7244 / +27 78 065 1426',
  email: 'admin@malutisss.co.za',
  monThu: '07:30 - 15:30',
  friday: '07:30 - 13:30',
  weekend: 'Closed',
};

const defaultAbout: AboutInfo = {
  historyParagraphs: [
    'Maluti Senior Secondary School is a public Quintile 3 school located in Ramohlakoawa A/A, Maluti (EMIS: 200500551).',
    'We are a no-fee institution serving the community of Matatiele with a focus on academic excellence and discipline.',
    'The school consistently performs well in the NSC examinations, with our most recent results reaching an 83% pass rate.'
  ],
  principalName: 'Mr Lulamile Masoka',
  principalTitle: 'Principal',
  principalMessage: [
    'Welcome to Maluti Senior Secondary School. Our mission is to provide quality education and foster an environment where every learner can thrive.',
    'The success of Matubatuba Kanetso and the Class of 2025 proves that through hard work and dedication, we can achieve greatness.'
  ],
};

const defaultHall: HallOfFameEntry[] = [
  { 
    id: 'mat-2025', 
    name: 'Matubatuba Kanetso', 
    title: 'Provincial Awardee', 
    year: '2025', 
    desc: 'Top Achiever in the Eastern Cape with 7 Distinctions.', 
    image: '' // Placeholder until you upload image
  },
  { id: '2', name: 'Class of 2025', title: 'Matric Cohort', year: '2025', desc: '90 Total Distinctions achieved.', image: '' },
];

const defaultResults: Record<string, YearResults> = {
  '2025': {
    overall: 83.0,
    bachelor: 0,
    bachelorRate: 0,
    distinctions: 90,
    wrote: 230,
    subjects: [
      { subject: 'Passed', rate: 191 },
      { subject: 'Candidates', rate: 230 },
    ],
  },
};

// Storage Getters
export const getNews = () => JSON.parse(localStorage.getItem('admin_news') || JSON.stringify(defaultNews));
export const getContact = () => JSON.parse(localStorage.getItem('admin_contact') || JSON.stringify(defaultContact));
export const getAbout = () => JSON.parse(localStorage.getItem('admin_about') || JSON.stringify(defaultAbout));
export const getHallOfFame = () => JSON.parse(localStorage.getItem('admin_hall_of_fame') || JSON.stringify(defaultHall));
export const getResultsByYear = (year: string) => defaultResults[year] || null;

// Auth
export const isAuthenticated = () => localStorage.getItem('admin_auth') === 'true';
export const login = (password: string) => {
  if (password === 'admin2026') {
    localStorage.setItem('admin_auth', 'true');
    return true;
  }
  return false;
};
export const logout = () => localStorage.removeItem('admin_auth');
