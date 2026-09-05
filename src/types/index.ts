export type RoleType = 'customer' | 'receptionist' | 'manager' | 'stylist' | 'owner';

export interface RoleData {
  id: RoleType;
  title: string;
  subtitle: string;
  badge: string;
  quote: string;
  description: string;
  capabilities: string[];
  ctaText: string;
  metricLabel: string;
  metricValue: string;
  iconName: string;
  mockUi: {
    title: string;
    status: string;
    items: { label: string; value: string; badge?: string; color?: string }[];
    actions: string[];
  };
}

export interface PlatformModule {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  category: 'core' | 'operations' | 'growth' | 'intelligence';
  highlights: string[];
  sampleMetric?: { label: string; value: string };
}

export interface RegionalWorkflow {
  id: string;
  country: string;
  flag: string;
  headline: string;
  highlights: string[];
  features: string[];
  taxComplianceNote: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  salonName: string;
  country: string;
  countryFlag: string;
  businessType: string;
  rating: number;
  avatarBg: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  branches: string;
  staffLimit: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface LeadFormData {
  name: string;
  salonName: string;
  email: string;
  phone: string;
  country: string;
  branches: string;
  staffCount: string;
  comments?: string;
}
