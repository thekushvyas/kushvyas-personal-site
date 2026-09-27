// ──────────────────────────────────────────────────────────────────────────────
// Edit everything about your site here. All pages read from this file.
// ──────────────────────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Kush Vyas",
  headline: "MSBA Candidate @ Boston University",
  subhead:
    "Research-driven business analyst · SQL · Python · Power BI · Finance & supply chain",
  location: "Boston, MA",
  about:
    "Curious mind, strategic thinker, data translator. I’m pursuing my M.S. in Business Analytics at Boston University’s Questrom School of Business, where I work at the intersection of data and decision-making. With experience in CRM strategy, market research, and published work in consumer analytics, I help uncover the patterns that drive smarter business moves — whether that means building dashboards or framing insights for stakeholders. I care about impact, not just output.",
  email: "kushvyas@bu.edu",
  github: "https://github.com/kushvyas-111",
  linkedin: "https://www.linkedin.com/in/kush-vyas-090396279",
  // Place your photo at: public/profile.png  (or change the path below)
  photo: "/profile.png",
};

export const SKILLS = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "Machine Learning",
  "Excel",
  "Web Scraping",
  "CRM Tools",
];

export const EXPERIENCE: {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}[] = [
  {
    role: "Marketing and Data Management Intern",
    org: "DaidaEx · New York, NY",
    period: "Sep 2026 — Present",
    bullets: [],
  },
  {
    role: "Summer Analyst Intern (Data & Business Analytics)",
    org: "Octos Global Solutions · Anaheim, CA",
    period: "Jun 2026 — Aug 2026",
    bullets: [
      "Built an end-to-end lead generation and outreach automation tool from scratch, integrating the Apollo API with AI-drafted personalized outreach — generating 7,000+ leads/week and cutting manual outreach time by 80%.",
      "Conducted competitive and market analysis for 15+ clients, delivering 3 Power BI dashboards and 4 pitch decks that helped secure 2 new client partnerships.",
      "Developed a churn prediction model (75% accuracy) that flagged 120 at-risk accounts, helping retain 45 of them and protect ~$90K in revenue.",
      "Ran pricing and elasticity analysis across 140+ client accounts, designing tiered pricing structures that lifted client revenue by 12%.",
    ],
  },
  {
    role: "Mentor",
    org: "Data Decoders",
    period: "Jun 2025 — Nov 2025",
    bullets: [
      "Mentored 200+ students in an analytics and start-up community through curated workshops, portfolio reviews, and project-based learning.",
      "Spearheaded partnerships with 8 startups and 10+ professionals to deliver real-world case challenges.",
      "Oversaw event planning and coordination, boosting active participation and helping increase placement success by 30%.",
    ],
  },
  {
    role: "Founder & President",
    org: "Data Decoders · Pune, India",
    period: "Jul 2024 — Jun 2025",
    bullets: [
      "Founded and led a community of 200+ students focused on data analytics and industry collaboration.",
      "Ran mentorship programs, workshops, and events with 10+ industry partners.",
      "Led a team of 20+ members across project coordination, content, and events.",
      "Managed operations and finances, implementing growth strategies that increased membership and participation by 40%.",
    ],
  },
  {
    role: "University Joint Secretary, Alumni Relations",
    org: "MIT World Peace University · Pune, India",
    period: "Oct 2024 — Jun 2025",
    bullets: [
      "Initiated alumni-led webinars, career talks, and networking events, driving a 40% increase in alumni-student engagement across two semesters.",
      "Coordinated with 20+ alumni, faculty, and student teams to deliver career counseling sessions.",
      "Supported the pilot of a structured mentorship program and applied opportunity analysis to close collaboration gaps.",
    ],
  },
  {
    role: "Company Relations Manager",
    org: "The Venture, MIT-WPU · Pune, India",
    period: "Jan 2025 — May 2025",
    bullets: [
      "Built partnerships with 10+ startups, founders, and industry professionals for speaker sessions, panels, and pitch events.",
      "Acted as liaison between external partners and internal event teams, and secured sponsorships to grow the club's industry network.",
    ],
  },
  {
    role: "Head of Marketing",
    org: "The Venture, MIT-WPU · Pune, India",
    period: "Aug 2024 — Apr 2025",
    bullets: [
      "Led content and communications for a student startup council, reaching 1,000+ students through targeted social media campaigns.",
      "Managed content calendars, event branding, and outreach for pitch competitions, speaker events, and startup showcases.",
    ],
  },
  {
    role: "Campus Ambassador",
    org: "GroupMe · Pune, India",
    period: "Jan 2025 — May 2025",
    bullets: [
      "Promoted GroupMe on campus through engagement initiatives, awareness drives, and partnerships with student clubs.",
      "Launched mini digital campaigns and interactive demos that improved app visibility and user acquisition.",
      "Shared student usage insights with the GroupMe team to refine positioning for college audiences.",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "Octos Global Solutions · Remote (USA)",
    period: "Jun 2024 — Aug 2024",
    bullets: [
      "Conducted business analysis for mobile app development, translating user requirements into actionable insights.",
      "Coordinated timelines and documentation for 2 key app projects, improving delivery speed by 15%.",
      "Supported market research and competitor benchmarking to shape pricing strategy and feature recommendations.",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "Kunj Services Pvt. Ltd. · Ahmedabad, India",
    period: "Jun 2023 — Jul 2023",
    bullets: [
      "Ran process analysis for a regional tile installation service to identify inefficiencies in service delivery.",
      "Streamlined customer onboarding and communication workflows, cutting average response time by 20%.",
      "Supported market research and competitor analysis in Excel and Google Sheets to inform business development.",
    ],
  },
];

export const PROJECTS: {
  title: string;
  blurb: string;
  href?: string;
  tags: string[];
}[] = [
  {
    title: "Global Semiconductor Supply Chains — Trade Flows, Risks & Resilience",
    blurb:
      "Mapped global trade flows, regional dependencies, and supply-chain vulnerabilities across economies, identifying key chokepoints and market–finance linkages shaping resilience.",
    href: "https://github.com/kushvyas-111/Global-Semiconductor-Supply-Chains---Trade-Flows-Risks-and-Resilience",
    tags: ["Python", "Jupyter", "Supply Chain"],
  },
  {
    title: "Beyond the Pitch — Quantifying Success in Modern Football",
    blurb:
      "Uncovers the key drivers of football club success by analyzing how financial power, squad structure, and on-field discipline shape season-level performance, integrating multiple global datasets.",
    href: "https://github.com/kushvyas-111/Beyond-the-Pitch---Quantifying-Success-in-Modern-Football",
    tags: ["Python", "Jupyter", "Sports Analytics"],
  },
  {
    title: "Adaptive Trilemma Valuation Model (ATVM)",
    blurb:
      "A valuation model exploring trade-offs across growth, risk, and return, with scenario analysis to support investment decisions.",
    href: "https://github.com/kushvyas-111/Adaptive-Trilemma-Valuation-Model-ATVM-",
    tags: ["Python", "Jupyter", "Finance"],
  },
  {
    title: "Boston Airbnb Analysis",
    blurb:
      "Exploratory analysis of Boston Airbnb listings — pricing patterns, neighborhood premiums, and host behavior.",
    href: "https://github.com/kushvyas-111/Boston_Airbnb_Analyis",
    tags: ["Python", "Jupyter", "EDA"],
  },
  {
    title: "Number Guessing Game",
    blurb:
      "A small React app that challenges the user to guess a number — a quick interactive build.",
    href: "https://github.com/kushvyas-111/Number-Guessing-Game",
    tags: ["React", "JavaScript"],
  },
];

export const PUBLICATIONS: {
  title: string;
  venue?: string;
  year?: string;
  href?: string;
}[] = [
  {
    title:
      "Profit Powerhouse: Driving ROI Through Cutting-Edge Business Analytics",
    venue: "International Journal of Scientific Research in Multidisciplinary Studies",
    year: "2025",
    href: "https://www.researchgate.net/publication/393228768_Profit_Powerhouse_Driving_ROI_through_Cutting-Edge_Business_Analytics",
  },
  {
    title:
      "The Age of Screens: Smartphone Usage, Social Media Influence, and Consumer Spending Patterns",
    venue: "International Journal of Scientific Research in Multidisciplinary Studies",
    year: "2024",
    href: "https://www.researchgate.net/publication/381062144_The_Age_of_Screens_Smartphone_Usage_Social_Media_Influence_and_Consumer_Spending_Patterns",
  },
  {
    title:
      "Revolutionizing Data Warehousing: How AI and Robotics Are Transforming the Future of Data Management?",
    venue: "International Journal of Humanities Engineering Science and Management",
    year: "2023",
    href: "https://www.researchgate.net/publication/374615685_Revolutionizing_Data_Warehousing_How_AI_and_Robotics_Are_Transforming_the_Future_of_Data_Management",
  },
];

export const EDUCATION: {
  degree: string;
  school: string;
  detail: string;
  period: string;
}[] = [
  {
    degree: "M.S. in Business Analytics",
    school: "Boston University, Questrom School of Business",
    detail: "Boston, MA · GPA 3.50",
    period: "Expected May 2027",
  },
  {
    degree: "B.B.A. in Business Analytics",
    school: "MIT World Peace University",
    detail: "Pune, India · GPA 8.50",
    period: "Aug 2025",
  },
];

// Navigation order across the site.
export const NAV = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];
