import { RoleData, PlatformModule, RegionalWorkflow, Testimonial, PricingPlan, FaqItem } from '../types';

export const ROLES_DATA: RoleData[] = [
  {
    id: 'customer',
    title: 'Customer Experience',
    subtitle: 'Elevate every client touchpoint',
    badge: 'FOR SALON GUESTS',
    quote: 'A seamless, friction-free salon visit from booking to checkout.',
    description: 'Customers discover services, view transparent pricing, book 24/7 online, receive live queue token updates on WhatsApp, and earn automatic loyalty points on every visit.',
    capabilities: [
      'Discover services & transparent pricing',
      'Instant online booking & rescheduling',
      'Live queue token tracking with estimated wait times',
      'Digital invoices delivered directly via WhatsApp',
      'Automated loyalty reward points & 1-click rebooking'
    ],
    ctaText: 'Give Customers a Better Salon Experience',
    metricLabel: 'Customer Retention Rate',
    metricValue: '+38%',
    iconName: 'User',
    mockUi: {
      title: 'Customer Self-Service Portal & Token #A27',
      status: 'In Queue • 2 ahead',
      items: [
        { label: 'Booking', value: 'Hair Cut & Styling (45 mins)' },
        { label: 'Estimated Wait', value: '14 mins remaining', color: 'emerald' },
        { label: 'Assigned Stylist', value: 'Rahul Sharma (Senior)' },
        { label: 'Loyalty Points Earned', value: '450 pts (₹450 value)', color: 'purple' }
      ],
      actions: ['Track Live Queue', 'View Services', 'Pay via UPI/Card']
    }
  },
  {
    id: 'receptionist',
    title: 'Receptionist Experience',
    subtitle: 'Make the front desk fast & stress-free',
    badge: 'FOR FRONT DESK STAFF',
    quote: 'Less clicking. Less waiting. More customers served gracefully.',
    description: 'Empower receptionists to check-in appointments in 1 click, assign walk-ins with instant queue tokens, lookup customer histories, and process POS bills in under 10 seconds.',
    capabilities: [
      '1-click appointment check-in & walk-in queue creation',
      'Instant customer lookup by phone or name',
      'Unified POS checkout supporting cash, card, & digital payments',
      'Real-time stylist floor availability tracking',
      'Automated WhatsApp appointment confirmations'
    ],
    ctaText: 'Streamline Your Front Desk Operations',
    metricLabel: 'Average Checkout Speed',
    metricValue: '8.4 seconds',
    iconName: 'LayoutGrid',
    mockUi: {
      title: 'Front Desk POS & Queue Console',
      status: 'Active Shift • 42 Guests Served Today',
      items: [
        { label: 'Next Walk-in', value: 'Priya Sharma (Token #A28)' },
        { label: 'Quick POS Action', value: 'Generate GST Invoice' },
        { label: 'Payment Mode', value: 'Split: Cash ₹500 + UPI ₹1,200', color: 'indigo' },
        { label: 'WhatsApp Invoice', value: 'Sent to +91 98765****', color: 'emerald' }
      ],
      actions: ['New Walk-In', 'Fast Checkout', 'Assign Stylist']
    }
  },
  {
    id: 'manager',
    title: 'Manager Experience',
    subtitle: 'Know what’s happening on your salon floor',
    badge: 'FOR SALON MANAGERS',
    quote: 'Run the salon floor with absolute confidence and real-time operational control.',
    description: 'Monitor live queue positions, balance staff workloads, handle peak walk-in surges, track attendance, manage inventory usage, and resolve delays before customers notice.',
    capabilities: [
      'Real-time floor dashboard showing active, waiting, and completed services',
      'Dynamic staff queue distribution & delay alerts',
      'Live stock consumption tracking and low inventory warnings',
      'Daily register closure and cash drawer reconciliation',
      'Operational performance metrics per shift'
    ],
    ctaText: 'Empower Your Managers Today',
    metricLabel: 'Queue Wait Time Reduced',
    metricValue: '-42%',
    iconName: 'Sliders',
    mockUi: {
      title: 'Salon Floor & Queue Command Center',
      status: 'Peak Hours • 6 Chairs Active',
      items: [
        { label: 'Active Queue', value: '3 Waiting (Avg 12 min wait)' },
        { label: 'Staff Utilization', value: '88% (5/6 Stylists busy)' },
        { label: 'Low Stock Alert', value: 'L’Oréal Color Shampoo (2 left)', color: 'amber' },
        { label: 'Floor Efficiency', value: 'On Track (+12% vs yesterday)', color: 'emerald' }
      ],
      actions: ['Reassign Stylist', 'Add Chair', 'Override Discount']
    }
  },
  {
    id: 'stylist',
    title: 'Stylist / Beautician Experience',
    subtitle: 'Know your next customer before they sit down',
    badge: 'FOR ARTISTS & BEAUTICIANS',
    quote: 'Focus entirely on creative service. Salon OS handles the rest.',
    description: 'Stylists see upcoming client profiles, past formulas, service preferences, personal daily schedule, service timer, and real-time commission earnings right on their mobile device.',
    capabilities: [
      'Instant view of next customer, service list, and special notes',
      'Historical formula & product preference access',
      'Service duration timer & status updates',
      'Transparent live daily commission & tip tracker',
      'Personal appointment schedule & break manager'
    ],
    ctaText: 'Motivate Your Creative Team',
    metricLabel: 'Stylist Service Efficiency',
    metricValue: '+24%',
    iconName: 'Scissors',
    mockUi: {
      title: 'Stylist Mobile Workstation',
      status: 'Service #4 of 7 Today',
      items: [
        { label: 'Current Guest', value: 'Anita Roy • Keratin Treatment' },
        { label: 'Past Preference', value: 'Prefers ammonia-free, low heat' },
        { label: 'Elapsed Time', value: '32 min / 60 min', color: 'indigo' },
        { label: 'Today’s Commission', value: '₹2,840 earned (+₹450 tips)', color: 'emerald' }
      ],
      actions: ['Start Timer', 'Add Product Used', 'Complete Service']
    }
  },
  {
    id: 'owner',
    title: 'Owner Command Center',
    subtitle: 'Know your business without being everywhere',
    badge: 'FOR SALON OWNERS & INVESTORS',
    quote: 'Your entire multi-branch salon business. Accessible anytime, anywhere.',
    description: 'Get bird’s-eye visibility over daily revenue, net profit margins, customer acquisition costs, staff performance rankings, inventory valuation, and multi-branch rollups with conversational AI insights.',
    capabilities: [
      'Real-time multi-branch revenue & profit metrics',
      'Automated customer retention & rebooking engine',
      'Staff sales leaderboard & payroll commission calculation',
      'Conversational AI Business Assistant for deep performance analysis',
      'Centralized multi-location inventory & pricing control'
    ],
    ctaText: 'Take Control of Your Salon Business',
    metricLabel: 'Monthly Revenue Growth',
    metricValue: '+31%',
    iconName: 'Building2',
    mockUi: {
      title: 'Owner Executive Dashboard & AI Engine',
      status: 'Live Updates Across 4 Branches',
      items: [
        { label: 'Today’s Revenue', value: '₹84,250 (+18% YoY)', color: 'emerald' },
        { label: 'Est. Monthly Profit', value: '₹3.42 Lakhs (Net 28%)', color: 'purple' },
        { label: 'Inactive Customers', value: '142 flagged for comeback campaign' },
        { label: 'AI Alert', value: 'Hair Color revenue down 8% in Branch 2', color: 'amber' }
      ],
      actions: ['Launch AI Campaign', 'View All Branches', 'Export Financials']
    }
  }
];

export const PLATFORM_MODULES: PlatformModule[] = [
  {
    id: 'appointments',
    title: 'Smart Appointments',
    shortDesc: 'Eliminate double-bookings and no-shows with online calendar sync & auto-reminders.',
    fullDesc: 'Comprehensive booking calendar supporting multi-staff scheduling, service durations, buffer times, online booking widget integration, deposit payments, and automated WhatsApp reminders.',
    icon: 'Calendar',
    category: 'core',
    highlights: ['24/7 Customer self-booking', 'Google Calendar / WhatsApp sync', 'No-show deposit protection', 'Multi-staff drag-and-drop calendar'],
    sampleMetric: { label: 'No-shows Reduced', value: '-85%' }
  },
  {
    id: 'queue',
    title: 'Live Queue & Token System',
    shortDesc: 'Eliminate waiting chaos with algorithmic wait-time calculations and digital tokens.',
    fullDesc: 'Patent-pending queue management engine that computes real-time estimated waiting time based on chair availability, ongoing service duration, and walk-in arrivals.',
    icon: 'Users',
    category: 'operations',
    highlights: ['Digital token generation via SMS/WhatsApp', 'Dynamic estimated wait calculation', 'Walk-in vs booked queue balancing', 'Floor manager delay override'],
    sampleMetric: { label: 'Wait Time Transparency', value: '100%' }
  },
  {
    id: 'crm',
    title: 'Customer CRM 360°',
    shortDesc: 'Remember every client preference, visit history, formula, and spending pattern.',
    fullDesc: 'Centralized customer memory bank capturing visit frequencies, favorite stylists, color formulas, service notes, allergy flags, total lifetime value, and automated tags.',
    icon: 'HeartHandshake',
    category: 'core',
    highlights: ['Complete service history & photos', 'Custom hair & skin consultation notes', 'Automated birthday & anniversary wishes', 'Lifetime value & risk flags'],
    sampleMetric: { label: 'Repeat Visits Boost', value: '+40%' }
  },
  {
    id: 'pos',
    title: 'Fast POS & Tax Billing',
    shortDesc: 'Generate tax-compliant GST/VAT bills and collect split payments in under 10 seconds.',
    fullDesc: 'Built for high-volume salon checkouts. Supports itemized billing, service packages, product sales, dynamic discount approvals, and tax compliance across global markets.',
    icon: 'Receipt',
    category: 'core',
    highlights: ['Multi-tax GST/VAT auto-computation', 'Split payments (Cash + UPI + Card)', 'Digital eco-invoices via WhatsApp', 'Discount authorization controls'],
    sampleMetric: { label: 'Invoice Gen Time', value: '< 8 sec' }
  },
  {
    id: 'payments',
    title: 'Unified Payments',
    shortDesc: 'Accept card payments, UPI, Apple Pay, digital wallets, and membership balances.',
    fullDesc: 'Seamless payment processing engine with instant reconciliation, split payments, membership wallet deductions, gift cards, and automated end-of-day register balancing.',
    icon: 'CreditCard',
    category: 'core',
    highlights: ['UPI QR & Instant Pay links', 'Credit/Debit card terminal integration', 'Membership wallet auto-deduct', 'Daily cash drawer reconciliation'],
    sampleMetric: { label: 'Reconciliation Error', value: '0%' }
  },
  {
    id: 'staff',
    title: 'Staff & Commission Engine',
    shortDesc: 'Track attendance, shift rosters, automated commission split, and performance rank.',
    fullDesc: 'Automate complex commission structures (tiered, flat, product vs service), track biometric/PIN attendance, schedule shift rosters, and calculate payouts in one click.',
    icon: 'UserCheck',
    category: 'operations',
    highlights: ['Tiered commission rules', 'Roster scheduling & break management', 'Tip allocation engine', 'Stylist sales leaderboard'],
    sampleMetric: { label: 'Payroll Prep Saved', value: '15 hrs/mo' }
  },
  {
    id: 'inventory',
    title: 'Smart Stock & Consumption',
    shortDesc: 'Link service usage directly to stock levels with auto-deduction and reorder alerts.',
    fullDesc: 'Tracks backbar consumption during services alongside retail inventory. Automatically reduces stock when a service is billed and generates vendor purchase orders.',
    icon: 'Package',
    category: 'operations',
    highlights: ['Backbar usage tracking', 'Low-stock automated alerts', 'Supplier purchase order generator', 'Audit & stock shrinkage tracking'],
    sampleMetric: { label: 'Stock Wastage Reduced', value: '-35%' }
  },
  {
    id: 'memberships',
    title: 'Memberships & Packages',
    shortDesc: 'Create recurring membership plans and prepaid service packages for steady cashflow.',
    fullDesc: 'Build VIP monthly memberships, credit wallets, and bundled packages (e.g. 5 Hair Spas + 1 Free) with automated credit track and expiry alerts.',
    icon: 'Crown',
    category: 'growth',
    highlights: ['Recurring auto-debit plans', 'Prepaid package credit balance', 'VIP tier discounts', 'Expiration & balance notifications'],
    sampleMetric: { label: 'Predictable Cashflow', value: '+55%' }
  },
  {
    id: 'loyalty',
    title: 'Automated Loyalty Rewards',
    shortDesc: 'Turn casual visitors into loyal brand advocates with automated point earn and redeem.',
    fullDesc: 'Configurable points system (e.g. earn 10 points per ₹100 spent) redeemable against services or retail products. Automatically prompts reception at checkout.',
    icon: 'Sparkles',
    category: 'growth',
    highlights: ['Spend-based reward points', 'Instant checkout point redemption', 'Referral reward program', 'Custom milestone badges'],
    sampleMetric: { label: 'Customer LTV', value: '+2.4x' }
  },
  {
    id: 'marketing',
    title: 'Smart Customer Retention',
    shortDesc: 'Automatically trigger targeted campaigns to re-engage inactive & churn-risk clients.',
    fullDesc: 'Behavior-based marketing engine that identifies clients missing their regular 30-day or 60-day cycle and sends automated WhatsApp/SMS offers with 1-click booking.',
    icon: 'Megaphone',
    category: 'growth',
    highlights: ['Inactive client auto-winback', 'Targeted segment broadcasting', 'Festive & promotional offers', 'Campaign ROI tracking'],
    sampleMetric: { label: 'Comeback Rate', value: '28%' }
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Business Suite',
    shortDesc: 'Send booking confirmations, live queue links, invoices, and offers automatically.',
    fullDesc: 'Direct WhatsApp integration delivering high-open-rate confirmations, queue token tracking URLs, digital invoices with PDF links, and two-way chat customer support.',
    icon: 'MessageSquare',
    category: 'growth',
    highlights: ['98% Open-rate notifications', 'Interactive booking buttons', 'PDF Invoice delivery via chat', 'Automated post-visit feedback'],
    sampleMetric: { label: 'Customer Engagement', value: '98%' }
  },
  {
    id: 'analytics',
    title: 'Business Analytics & Reports',
    shortDesc: 'Gain total clarity into revenue, client retention, service mix, and peak hours.',
    fullDesc: 'Visual reporting suite analyzing service popularity, peak footfall hours, average ticket size, staff productivity, customer acquisition channels, and net profit.',
    icon: 'BarChart3',
    category: 'intelligence',
    highlights: ['40+ Standard salon reports', 'Footfall & peak hour heatmaps', 'Product vs service margin split', 'Export to Excel / PDF'],
    sampleMetric: { label: 'Owner Visibility', value: '100%' }
  },
  {
    id: 'ai',
    title: 'Conversational AI Assistant',
    shortDesc: 'Ask questions about your salon in plain English and get actionable strategic advice.',
    fullDesc: 'Built-in AI business intelligence assistant that analyzes raw operational data to answer queries like "Why is revenue down in Branch 2?" and executes corrective campaigns.',
    icon: 'Bot',
    category: 'intelligence',
    highlights: ['Natural language data queries', 'Predictive revenue forecasting', 'Automated churn risk alerts', '1-click corrective campaign launch'],
    sampleMetric: { label: 'Insight Time', value: 'Instant' }
  }
];

export const WORKFLOW_STAGES = [
  { id: 'discover', step: '01', title: 'DISCOVER', desc: 'Customer discovers your salon via Instagram, Google Maps, or Website widget.', icon: 'Search' },
  { id: 'book', step: '02', title: 'BOOK', desc: 'Customer selects service, preferred stylist, & time slot in under 40 seconds.', icon: 'CalendarCheck' },
  { id: 'arrive', step: '03', title: 'ARRIVE', desc: 'Front desk receives automatic check-in notification as guest enters.', icon: 'MapPin' },
  { id: 'queue', step: '04', title: 'QUEUE', desc: 'Smart queue token issued with live estimated wait time sent to guest phone.', icon: 'Clock' },
  { id: 'service', step: '05', title: 'SERVICE', desc: 'Stylist sees guest preferences & notes on workstation tablet before starting.', icon: 'Scissors' },
  { id: 'bill', step: '06', title: 'BILL', desc: 'Completed service auto-flows to POS with exact tax & discount rules.', icon: 'Receipt' },
  { id: 'pay', step: '07', title: 'PAY', desc: 'Guest pays via UPI, Card, Wallet or Cash; invoice sent on WhatsApp instantly.', icon: 'CreditCard' },
  { id: 'rebook', step: '08', title: 'REBOOK', desc: 'System earns loyalty points & sends 30-day automated rebooking prompt.', icon: 'RotateCw' },
  { id: 'grow', step: '09', title: 'GROW', desc: 'Owner views real-time revenue, profit & AI growth insights across branches.', icon: 'TrendingUp' }
];

export const REGIONAL_WORKFLOWS: RegionalWorkflow[] = [
  {
    id: 'india',
    country: 'India',
    flag: '🇮🇳',
    headline: 'GST-Ready, UPI Payments & WhatsApp-First Operations',
    highlights: ['1-Click GST tax invoice generation (CGST + SGST / IGST)', 'Seamless PhonePe, Google Pay, Paytm & BHIM UPI QR integration', 'Native WhatsApp Business messaging for tokens & invoices', 'Support for local multi-branch chains & franchise models'],
    features: ['GST compliant invoices', 'Instant UPI payments', 'WhatsApp automation', 'Franchise royalty tracking'],
    taxComplianceNote: 'Designed to support local business tax structures and digital payment workflows in India.'
  },
  {
    id: 'usa',
    country: 'United States',
    flag: '🇺🇸',
    headline: 'Modern POS, Tip Management & High-Velocity Appointments',
    highlights: ['Customizable tipping workflows & automated tip distribution', 'Card reader integration (Stripe, Square, Clover readiness)', 'State & city sales tax multi-jurisdiction calculation', 'Booster appointment booking & booth renter management'],
    features: ['Tip distribution engine', 'Booster appointments', 'Multi-state sales tax', 'Booth rental management'],
    taxComplianceNote: 'Designed to support local business tax structures and tipping workflows in the USA.'
  },
  {
    id: 'uk',
    country: 'United Kingdom & Europe',
    flag: '🇬🇧 🇪🇺',
    headline: 'Multi-Location Operations, VAT Compliance & GDPR Privacy',
    highlights: ['Itemized VAT tax calculations & EU country tax rate support', 'GDPR-compliant customer data consent & privacy management', 'Contactless card terminals & Apple Pay / Google Wallet', 'Multi-currency support (GBP £, Euro €)'],
    features: ['Itemized VAT invoices', 'GDPR privacy compliance', 'Apple/Google Pay', 'Multi-currency (£ / €)'],
    taxComplianceNote: 'Designed to support European business workflows and data protection practices.'
  },
  {
    id: 'africa',
    country: 'Africa',
    flag: '🌍',
    headline: 'Mobile-First Workflows, SMS/WhatsApp & Digital Money',
    highlights: ['Mobile money payment integration readiness (M-Pesa, Orange Money)', 'Low-bandwidth offline mode resilience for unstable networks', 'SMS & WhatsApp appointment reminders and walk-in queue tokens', 'Multi-branch regional reporting for growing salon chains'],
    features: ['Mobile money ready', 'Low-bandwidth mode', 'SMS/WhatsApp tokens', 'Regional chain scale'],
    taxComplianceNote: 'Designed to support regional mobile business workflows across African markets.'
  },
  {
    id: 'global',
    country: 'Global / Rest of World',
    flag: '🌎',
    headline: 'Unified Multi-Currency Cloud Infrastructure for World Salons',
    highlights: ['Multi-currency pricing engine supporting 120+ currencies', 'Global cloud hosting with 99.99% uptime guarantee', 'Granular multi-role security & permission isolation', 'API integration readiness for global accounting software'],
    features: ['120+ Currencies', '99.99% Cloud Uptime', 'Role Security Matrix', 'Accounting Sync Ready'],
    taxComplianceNote: 'Designed as a flexible, worldwide operating system for salon businesses globally.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Salon OS completely transformed our 4-branch chain. Our queue wait times dropped by 40% and our repeat bookings increased within 60 days.',
    author: 'Vikramaditya Rao',
    role: 'Founder & Managing Director',
    salonName: 'Luxe Aesthetics & Hair Studio',
    country: 'India',
    countryFlag: '🇮🇳',
    businessType: 'Multi-Branch Salon Chain (4 Locations)',
    rating: 5,
    avatarBg: 'from-violet-600 to-indigo-600'
  },
  {
    id: '2',
    quote: 'The Live Queue token system and front desk POS are game-changers. Receptionists check customers out in seconds, and WhatsApp invoices are loved by our clients.',
    author: 'Sarah Jenkins',
    role: 'Operations Director',
    salonName: 'Apex Grooming & Spa Co.',
    country: 'United States',
    countryFlag: '🇺🇸',
    businessType: 'Premium Urban Spa & Barbershop',
    rating: 5,
    avatarBg: 'from-blue-600 to-cyan-600'
  },
  {
    id: '3',
    quote: 'Having real-time revenue and AI insights on my phone means I no longer need to sit in the salon every hour. I run our 3 locations seamlessly from anywhere.',
    author: 'Elena Rostova',
    role: 'Salon Owner',
    salonName: 'Velvet Glow Beauty Lounge',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    businessType: 'Boutique Beauty Studio Group',
    rating: 5,
    avatarBg: 'from-emerald-600 to-teal-600'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for independent salons, boutique studios, and solo stylists getting started.',
    monthlyPrice: 2499,
    annualMonthlyPrice: 1999,
    branches: '1 Branch',
    staffLimit: 'Up to 3 Staff Members',
    features: [
      'Appointments & Self-Booking Widget',
      'Live Queue Token Management',
      'Fast POS Billing & Digital Invoices',
      'Customer CRM & Basic History',
      'WhatsApp Confirmation Messages',
      'Daily Revenue & Service Reports',
      'Standard Email & Chat Support'
    ],
    cta: 'Start Free 14-Day Trial'
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'MOST POPULAR',
    description: 'Designed for expanding salons needing full operational control & marketing automation.',
    monthlyPrice: 4999,
    annualMonthlyPrice: 3999,
    branches: '1 Branch',
    staffLimit: 'Up to 10 Staff Members',
    features: [
      'Everything in Starter Plan',
      'Automated WhatsApp Retention Campaigns',
      'Backbar Stock & Inventory Auto-Deductions',
      'Staff Roster & Commission Calculator',
      'Loyalty Points & Package Memberships',
      'Conversational AI Business Assistant',
      'Advanced Performance Analytics',
      'Priority 24/7 Phone & WhatsApp Support'
    ],
    cta: 'Start Free 14-Day Trial',
    isPopular: true
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Built for multi-branch salon owners requiring centralized cross-location management.',
    monthlyPrice: 9999,
    annualMonthlyPrice: 7999,
    branches: 'Up to 3 Branches included',
    staffLimit: 'Up to 25 Staff Members',
    features: [
      'Everything in Growth Plan',
      'Centralized Head Office Multi-Branch View',
      'Cross-Branch Customer Loyalty Sync',
      'Granular Role & Permissions Matrix',
      'Bulk Supplier Purchase Orders',
      'Custom AI Revenue Opportunity Alerts',
      'Dedicated Customer Success Manager',
      'Custom Staff Onboarding & Training'
    ],
    cta: 'Start Business Trial'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Tailored for large salon chains, regional franchises, and high-volume brands.',
    monthlyPrice: 19999,
    annualMonthlyPrice: 15999,
    branches: 'Unlimited Branches',
    staffLimit: 'Unlimited Staff',
    features: [
      'Custom API & Accounting Integration',
      'Franchise Royalty & Audit Controls',
      'Dedicated Cloud Instance option',
      'Strict SLA Uptime Guarantee (99.99%)',
      'Custom Payment Gateway Connectors',
      'Unlimited WhatsApp Broadcast Volume',
      'Quarterly Business Review & AI Audits',
      '24/7 Dedicated Account Director'
    ],
    cta: 'Contact Enterprise Sales'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'General',
    question: 'What is Salon OS?',
    answer: 'Salon OS is a complete, end-to-end Salon Operating System that unifies bookings, live queues, customer CRM, POS billing, payments, staff management, inventory, marketing automation, analytics, and AI business insights into one seamless cloud platform.'
  },
  {
    category: 'General',
    question: 'Is Salon OS only for large salon chains?',
    answer: 'No! Salon OS is built to scale smoothly whether you are a single-chair independent stylist, a boutique beauty salon, a busy barbershop, a spa, or a 20-branch regional salon chain.'
  },
  {
    category: 'Operations',
    question: 'Can I manage walk-in customers and appointments together?',
    answer: 'Yes! Salon OS features a patent-pending Live Queue and token management engine that balances scheduled appointments with unscheduled walk-ins, calculating real-time wait times so your reception desk never gets overcrowded.'
  },
  {
    category: 'Multi-Branch',
    question: 'Can I manage multiple salon branches from one account?',
    answer: 'Absolutely. The Owner Command Center gives you a centralized dashboard to track live revenue, footfall, inventory, staff performance, and profit margins across all your locations in real time.'
  },
  {
    category: 'Permissions',
    question: 'Can I control what my staff can view or edit?',
    answer: 'Yes. Salon OS features a granular role-based permission system. You can specify exact rights (View, Create, Edit, Delete, Approve, Refund) for Owners, Managers, Receptionists, and Stylists.'
  },
  {
    category: 'Billing & POS',
    question: 'Does Salon OS support tax-compliant billing and split payments?',
    answer: 'Yes. Salon OS automatically computes local taxes (such as GST in India or VAT in Europe), supports split payments (e.g. cash + card or UPI), and delivers instant digital invoices to clients via WhatsApp.'
  },
  {
    category: 'Marketing',
    question: 'How does automated customer retention work?',
    answer: 'Salon OS analyzes client visit intervals. When a client passes their typical rebooking window (e.g. 30 or 60 days), the system automatically triggers a personalized WhatsApp message with a special rebooking incentive.'
  },
  {
    category: 'Staff',
    question: 'Can Salon OS calculate staff commissions automatically?',
    answer: 'Yes. You can define flexible commission rules (tiered percentages, flat service fees, or retail product bonuses). The system tracks daily completed services and generates accurate commission reports instantly.'
  },
  {
    category: 'AI Assistant',
    question: 'What can I ask the AI Business Assistant?',
    answer: 'You can ask operational and financial questions in plain natural language, such as "Why did revenue drop in Branch 2?", "Which stylists had the highest upsells this week?", or "Show me customers at risk of churning."'
  },
  {
    category: 'Global',
    question: 'Is Salon OS available in my country?',
    answer: 'Yes! Salon OS is engineered as a global SaaS application supporting salons across India, USA, UK, Europe, Africa, the Middle East, Asia-Pacific, and rest of the world.'
  },
  {
    category: 'Onboarding',
    question: 'How long does it take to set up Salon OS in my salon?',
    answer: 'You can be up and running in less than 15 minutes! Import your staff list and services, set your operating hours, and start taking bookings and issuing queue tokens immediately.'
  }
];

export const AI_PRESET_PROMPTS = [
  {
    prompt: 'Why is revenue down this month?',
    answer: 'Revenue is down 8.4% primarily due to a 22% decline in Hair Color bookings and lower weekday afternoon traffic. Recommendation: Re-engage 146 inactive clients who haven’t visited in 60+ days.',
    actionLabel: 'Launch Comeback Campaign'
  },
  {
    prompt: 'Which service has the highest profit margin?',
    answer: 'Keratin Treatment has your highest net margin (74%), generating ₹1,850 profit per 90-min session. Recommendation: Create a package offer with Hair Spa to boost average bill value by 18%.',
    actionLabel: 'Create Keratin Bundle'
  },
  {
    prompt: 'Which staff member is performing best this week?',
    answer: 'Rahul Sharma leads with ₹42,500 in service sales and a 94% client retention rate. Recommendation: Assign high-value keratin walk-ins to Rahul during peak Saturday slots.',
    actionLabel: 'View Staff Roster'
  },
  {
    prompt: 'Do we have any inventory low-stock alerts?',
    answer: 'L’Oréal Professional Color Shampoo is at 2 units (below reorder threshold of 5). Recommendation: Generate automated purchase order for Vendor Supply Co.',
    actionLabel: 'Generate Purchase Order'
  }
];
