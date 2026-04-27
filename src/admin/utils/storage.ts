// src/admin/utils/storage.ts

// --- INTERFACES (Needed for the forms to work) ---

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  grade: string;
  subject: string;
  fileData: string; 
  fileName: string;
  uploadDate: string;
}

export type UploadedFile = {
  key: string;
  label: string;
  fileName: string;
  mimeType: string;
  dataUrl: string;
};

export type SubjectMark = {
  subject: string;
  mark: number;
};

export type LearnerParticulars = {
  initials?: string;
  otherNames?: string;
  identificationNumber?: string;
  citizenship?: string;
  race?: string;
  homeLanguage?: string;
  physicalAddress?: string;
  citySuburb?: string;
  postalCode?: string;
  isBoarder?: 'Yes' | 'No';
  modeOfTransport?: string;
  deceasedParent?: 'Mother' | 'Father' | 'Both' | 'None';
  religion?: string;
};

export type ParentGuardian = {
  title?: string;
  firstName?: string;
  surname?: string;
  gender?: string;
  identificationNumber?: string;
  accountPayer?: 'Yes' | 'No';
  residentialStreetAddress?: string;
  occupation?: string;
  relationshipToLearner?: string;
};

export interface Application {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender?: string;
  grade: string;
  year: string;
  studentNumber: string;
  guardianName: string;
  guardianRelationship?: string;
  guardianPhone: string;
  guardianEmail: string;
  address: string;
  locality: string;
  previousSchool: string;
  applicationType: 'General' | 'Boarding';
  boardingType?: string;
  uploads: UploadedFile[];
  subjectMarks: SubjectMark[];
  averageMark: number;
  status: 'Pending' | 'Reviewed' | 'Accepted' | 'Rejected';
  submittedDate: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  monThu: string;
  friday: string;
  weekend: string;
}

export interface AboutInfo {
  historyParagraphs: string[];
  principalName: string;
  principalTitle: string;
  principalMessage: string[];
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
}

export interface HallOfFameEntry {
  id: string;
  name: string;
  title: string;
  year: string;
  desc: string;
  image: string;
}

export interface YearResults {
  overall: number;
  bachelor: number;
  bachelorRate: number;
  distinctions: number;
  wrote: number;
  subjects: { subject: string; rate: number }[];
}

// --- UTILS ---

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

export function generateStudentNumber(year: string): string {
  const key = `admin_student_counter_${year}`;
  const current = Number(localStorage.getItem(key) || '0');
  const next = current + 1;
  localStorage.setItem(key, String(next));
  return `${year}-${next.toString().padStart(6, '0')}`;
}

export function calculateAverageMark(subjectMarks: SubjectMark[]): number {
  if (!subjectMarks || subjectMarks.length === 0) return 0;
  const total = subjectMarks.reduce((sum, s) => sum + (s.mark || 0), 0);
  return Math.round((total / subjectMarks.length) * 10) / 10;
}

// --- DEFAULT DATA (Maluti SSS Specific) ---

const defaultNews: NewsItem[] = [
  {
    id: '1',
    title: 'Welcome to the Official Maluti SSS Portal',
    date: '2026-01-15',
    content: 'We are proud to launch our new digital platform for learners and parents. Stay updated with news and academic results.',
    image: '',
  },
  {
    id: '2',
    title: 'Matubatuba Kanetso: A Provincial Beacon',
    date: '2026-01-20',
    content: 'Congratulations to Matubatuba for his 7 distinctions in the 2025 NSC exams.',
    image: '/Achiever2025.png',
  }
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
    'Maluti Senior Secondary School is a public Quintile 3 school based in Ramohlakoawa A/A, Matatiele (EMIS: 200500551).',
    'As a no-fee institution, we are committed to providing top-tier secondary education to the community without financial barriers.',
    'The school has a rich history of academic resilience, recently achieving an 83% pass rate in the 2025 NSC examinations.'
  ],
  principalName: 'Mr Lulamile Masoka',
  principalTitle: 'Principal',
  principalMessage: [
    'Welcome to Maluti Senior Secondary School. Our 2025 results prove that excellence is possible through discipline.',
    'We celebrate every learner, especially our top achievers who put Matatiele on the provincial map.',
    'Together, we continue to build a legacy of academic pride.'
  ],
};

const defaultHall: HallOfFameEntry[] = [
  { 
    id: 'mat-2025', 
    name: 'Matubatuba Kanetso', 
    title: 'Provincial Top Achiever', 
    year: '2025', 
    desc: 'Recorded a historic 7 Distinctions in the NSC exams.', 
    image: '/Achiever2025.png' 
  },
  { 
    id: 'class-2025', 
    name: 'NSC Class of 2025', 
    title: '83% Pass Rate', 
    year: '2025', 
    desc: 'Achieved a total of 90 subject distinctions school-wide.', 
    image: '' 
  },
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

// --- STORAGE HELPERS ---

function getItems<T>(key: string, fallback: T[]): T[] {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch { return fallback; }
}

function getObject<T>(key: string, fallback: T): T {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch { return fallback; }
}

export const getNews = () => getItems<NewsItem>('admin_news', defaultNews);
export const setNews = (items: NewsItem[]) => localStorage.setItem('admin_news', JSON.stringify(items));

export const getDocuments = () => getItems<DocumentItem>('admin_documents', []);
export const setDocuments = (items: DocumentItem[]) => localStorage.setItem('admin_documents', JSON.stringify(items));

export const getApplications = () => getItems<Application>('admin_applications', []);
export const setApplications = (items: Application[]) => localStorage.setItem('admin_applications', JSON.stringify(items));

export const getContact = () => getObject<ContactInfo>('admin_contact', defaultContact);
export const setContact = (info: ContactInfo) => localStorage.setItem('admin_contact', JSON.stringify(info));

export const getAbout = () => getObject<AboutInfo>('admin_about', defaultAbout);
export const setAbout = (info: AboutInfo) => localStorage.setItem('admin_about', JSON.stringify(info));

export const getActivities = () => getItems<Activity>('admin_activities', []);
export const setActivities = (items: Activity[]) => localStorage.setItem('admin_activities', JSON.stringify(items));

export const getHallOfFame = () => getItems<HallOfFameEntry>('admin_hall_of_fame', defaultHall);
export const setHallOfFame = (items: HallOfFameEntry[]) => localStorage.setItem('admin_hall_of_fame', JSON.stringify(items));

export const getResultsByYear = (year: string) => defaultResults[year] || null;

// Auth
export const isAuthenticated = () => localStorage.getItem('admin_auth') === 'true';
export const login = (password: string): boolean => {
  if (password === 'admin2026') {
    localStorage.setItem('admin_auth', 'true');
    return true;
  }
  return false;
};
export const logout = () => localStorage.removeItem('admin_auth');
