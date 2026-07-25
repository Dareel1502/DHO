// All editable copy/data for the site lives here.

// Project thumbnail images — place the matching files in src/assets
import dogGroomImg from "./assets/dog-groom.jpg";
import realStateImg from "./assets/real-state-houses.jpg";
import aircoImg from "./assets/airco.jpg";
import averyLaneImg from "./assets/avery-lane.jpg";
import roofingImg from "./assets/high-quality-roofing.jpg";
import wellbeingImg from "./assets/veterans-wellbeing.jpg";
import lopezLawnImg from "./assets/lopez-lawn.jpg";
import fitnessImg from "./assets/foundation-fitness.jpg";
import gbConstructionImg from "./assets/gb-construction.jpg";
import respoAppImg from "./assets/respo-app.png";
import acquiroImg from "./assets/acquiro.png";
import leadGenAutomationImg from "./assets/lead-gen-automation.png";
import categorizedWebsiteAutomationImg from "./assets/categorized-website-automation.png";
import websiteAutomationGenerationImg from "./assets/website-automation-generation.png";

// Certificate images — place matching files in src/assets
import certInfoManagementImg from "./assets/cert-information-management.png";
import certResearchRepImg from "./assets/cert-research-representative.jpg";
import certTop10Img from "./assets/cert-top10-research.jpg";
import certChampionImg from "./assets/cert-research-champion.jpg";
import certGraduationImg from "./assets/cert-graduation.jpg";

export const profile = {
  name: "Daryl Hans Ocao",
  handle: "daryl.ocao",
  role: "Web & Funnel Designer",
  tagline: "engineering growth for businesses",
  headline:
    "I build the systems that help your business attract, convert, and keep more customers.",
  focus:
    "Lead generation, high-converting websites & funnels, SEO, and GoHighLevel automations — working together to bring in more leads, fill your calendar, and keep your business running smoothly while you focus on what you do best.",
  email: "psync15@gmail.com",
  phone: "+63 938 4247 715",
  phoneSms: "sms:09384247715",
  facebook: "https://www.facebook.com/DarylHansOcao",
  instagram: "https://www.instagram.com/dryl.hns/",
  telegram: "https://web.telegram.org/k/",
  // Get a free key at https://web3forms.com (takes ~1 minute, no account needed)
  // Paste it below to make the contact form actually deliver to your email.
  web3formsAccessKey: "298d49f7-a221-4cc9-88e2-97c266620407",
  // Place Daryl_Hans_Ocao_Resume.pdf (renamed resume.pdf) inside the /public folder
  // so this path resolves correctly — no import needed for files in /public.
  resumeUrl: "/resume.pdf",
};

export const capabilities = [
  "Lead Generation",
  "High-Converting Funnels",
  "SEO",
  "Automation",
  "Booking Systems",
];

export const stats = [
  { value: "30+", label: "Completed Projects" },
  { value: "100%", label: "Satisfaction" },
  { value: "24/7", label: "Support & Assistance" },
];

export const about = {
  intro:
    "I'm a passionate web & funnel designer who always aims to do things right.",
  overview:
    "I design high-converting websites and funnels in GoHighLevel (GHL) that help businesses strengthen their online presence and drive engagement. My approach focuses on modern, responsive design, seamless user experience, and visually compelling layouts that capture attention and convert visitors into customers.",
  competencies:
    "My expertise spans funnel strategy, landing page design, UI/UX optimization, branding, lead capture, and conversion-focused web development — creating smooth, automated workflows that guide users from discovery to action.",
  stackIntro:
    "I leverage a versatile toolkit to build professional, high-performing digital experiences — from funnels and CRM integration to branded visuals and responsive design.",
};

export const techStack = [
  "GoHighLevel (GHL)",
  "Canva",
  "Dribbble",
  "Responsive Design",
  "Media Editing",
  "Modern Web Technologies",
];

export const servicesIntro =
  "Specialized solutions designed to automate processes, streamline operations, and build powerful web applications that drive your business forward.";

export const services = [
  {
    name: "Process Automation",
    description:
      "Transform manual workflows into efficient automated systems that save time, reduce errors, and boost productivity.",
    items: [
      "Workflow Automation",
      "Task Automation",
      "Process Optimization",
      "Custom Scripting",
    ],
  },
  {
    name: "Scheduling Systems",
    description:
      "Intelligent calendar and scheduling solutions that streamline appointments and resource management.",
    items: [
      "Appointment Scheduling",
      "Resource Management",
      "Calendar Integration",
      "Automated Reminders",
    ],
  },
  {
    name: "Web & Funnel Design",
    description:
      "Modern GHL websites and funnels that engage users, strengthen branding, and drive consistent high-conversion results.",
    items: [
      "Responsive Layouts",
      "Visual Design & Branding",
      "Light Media Editing",
      "GHL Website & Funnel Design",
    ],
  },
];

// category: "Website" | "Automation" | "Other"
// `image` is optional — omit it to fall back to the placeholder icon card.
// `year` shows on the compact card; edit these to the real year for each project.
export const projects = [
  {
    category: "Website",
    name: "GB Construction & Outdoors",
    year: "2024",
    description:
      "Construction & outdoor services website with bold hero & trust elements.",
    link: "https://gbconstructionandoutdoors.com/home",
    image: gbConstructionImg,
  },
  {
    category: "Website",
    name: "Foundation Fitness",
    year: "2024",
    description:
      "Modern fitness studio landing page with class schedules & trainer profiles.",
    link: "https://sites.leadconnectorhq.com/preview/nYVdRyrD8wYnDV5GBSJo",
    image: fitnessImg,
  },
  {
    category: "Website",
    name: "Lopez Lawn Care",
    year: "2024",
    description:
      "Lawn care service with instant quote request and seasonal promotions.",
    link: "https://lopez-lawn-care.com/home-302320",
    image: lopezLawnImg,
  },
  {
    category: "Website",
    name: "Veterans Wellbeing",
    year: "2024",
    description:
      "Compassionate center with mental health resources & appointment booking.",
    link: "https://sites.leadconnectorhq.com/preview/JJ9Zol80Lmv7RA1gwFo8",
    image: wellbeingImg,
  },
  {
    category: "Website",
    name: "High Quality Roofing",
    year: "2024",
    description:
      "Premium roofing contractor with emergency callout & free estimate form.",
    link: "https://highqualityroofingal.com/home",
    image: roofingImg,
  },
  {
    category: "Website",
    name: "Avery Lane",
    year: "2024",
    description:
      "Elegant wellness brand website with product highlights & calming design.",
    link: "https://sites.leadconnectorhq.com/preview/F4bZ4f8bkf4wRThq5xal",
    image: averyLaneImg,
  },
  {
    category: "Website",
    name: "Airco Services",
    year: "2024",
    description:
      "AC repair funnel with emergency booking, service packages & financing.",
    link: "https://sites.leadconnectorhq.com/preview/7huBwDxpApmr8jtpYVbh",
    image: aircoImg,
  },
  {
    category: "Website",
    name: "Real State Houses",
    year: "2024",
    description:
      "Real estate listings with agent profiles, mortgage calculator & virtual tours.",
    link: "https://sites.leadconnectorhq.com/preview/AHerpV1p9la3Re53QS1X",
    image: realStateImg,
  },
  {
    category: "Website",
    name: "Dog Groom Studio",
    year: "2024",
    description:
      "Pet grooming salon with online booking, service menu & happy customer gallery.",
    link: "https://sites.leadconnectorhq.com/preview/Map4TVM8buSGf76bdvwF",
    image: dogGroomImg,
  },
  {
    category: "Automation",
    name: "Website Automation Generation",
    year: "2025",
    tagline: "Webhook → AI website builder pipeline",
    description:
      "Fully autonomous system that listens to incoming form submissions via webhook, extracts business data, and instantly generates a fully functional business website — complete with logo, service images, and photo gallery — in under a minute, no manual design work required.",
    link: "https://sites.leadconnectorhq.com/preview/XWdyLGeip2TFAKTUrJye",
    image: websiteAutomationGenerationImg,
  },
  {
    category: "Automation",
    name: "Categorized Website Generation",
    year: "2025",
    tagline: "Industry-specific site builder, branch by category",
    description:
      "An extension of the website generator that routes each incoming request by business category — so a plumbing business gets a plumbing-specific template, layout, and copy, while another trade gets its own tailored version, all generated automatically from the same pipeline.",
    link: "https://sites.leadconnectorhq.com/preview/XWdyLGeip2TFAKTUrJye",
    image: categorizedWebsiteAutomationImg,
  },
  {
    category: "Automation",
    name: "Lead Generation & Cold SMS Nurturing",
    year: "2025",
    tagline: "Apify scraping → cold SMS → long-term nurturing",
    description:
      "An end-to-end lead pipeline: Apify scrapes and qualifies prospects, results are logged straight to Google Sheets, and a cold SMS sequence reaches out automatically — with a long-term nurture flow that keeps following up until a lead is ready to convert.",
    link: "https://sites.leadconnectorhq.com/preview/XWdyLGeip2TFAKTUrJye",
    image: leadGenAutomationImg,
  },
  {
    category: "Other",
    name: "AQUIRO",
    year: "2025",
    tagline: "Social donation & community support platform",
    description:
      "Social donation platform concept connecting people through video content — donors earn points and rewards for supporting causes, encouraging ongoing community participation rather than one-off giving.",
    link: "https://sites.leadconnectorhq.com/preview/XWdyLGeip2TFAKTUrJye",
    image: acquiroImg,
  },
  {
    category: "Other",
    name: "RESPO App",
    year: "2025",
    tagline: "Emergency communication & response application",
    description:
      "Emergency response app concept with a one-tap SOS hotline, live citizen alert tracking, weather monitoring, and an AI assistant — designed to help communities report and respond to emergencies faster.",
    link: "https://sites.leadconnectorhq.com/preview/XWdyLGeip2TFAKTUrJye",
    image: respoAppImg,
  },
];

// ---- Experience — fill in with your real details whenever ready ----

export const experience = [
  {
    role: "AI Automation & Funnel Specialist",
    company: "Profit Flow AI (Agency)",
    period: "2025 — Present", // adjust to your real dates
    description:
      "Built the AI and automation backbone behind client acquisition — helping the agency's clients fill their pipeline, onboard faster, and scale without adding headcount.",
    highlights: [
      "Built AI-powered outreach systems that message 100–500 prospects at once with business-specific messaging, generating response rates up to 30% and keeping pipelines consistently full.",
      "Automated lead generation and qualification so teams spend less time chasing cold leads and more time closing warm, ready-to-buy ones.",
      "Engineered an AI website generator that turns a business name into a live, professional site in under 40 seconds — cutting typical launch time from weeks to seconds.",
      "Automated the entire onboarding journey — from site generation to delivery — so clients could scale their customer base without adding manual work.",
      "Delivered end-to-end, hands-off systems for acquisition, nurturing, and fulfillment that cut operational workload while keeping every client experience personal.",
    ],
  },
  {
    role: "GoHighLevel Funnel & Automation Expert",
    company: "Freelance — Client-Based",
    period: "2024 — 2025", // adjust to your real dates
    description:
      "Partnered directly with business owners to rebuild their sales funnels and back-office workflows in GoHighLevel — turning slow, manual operations into fast, automated systems that grew revenue.",
    highlights: [
      "Redesigned an e-commerce funnel around a simpler checkout flow, lifting completed purchases by 30% and cutting cart abandonment.",
      "Automated order confirmations, shipping updates, and inventory alerts, cutting manual processing time by 55% and virtually eliminating fulfillment errors.",
      "Connected CRM and support tools so customer questions, warranty claims, and technical issues got resolved 40% faster — boosting satisfaction and repeat business.",
      "Built product pages and automated follow-up sequences that increased average order value by 22% through targeted upsells and cross-sells.",
      "Streamlined the client's verification process to be fast and simple while staying fully compliant with data privacy standards.",
    ],
  },
];

// ---- Certificates ----
// `image` is optional — omit it to fall back to the placeholder icon card.
export const certificates = [
  {
    name: "Information Management in the Digital Age",
    issuer: "Certificate of Completion",
    date: "November 2024",
    year: "2024",
    achievement: "Professional Development",
    description:
      "Completed comprehensive training on managing and securing information in the modern digital landscape, focusing on data organization, cybersecurity principles, and effective technology utilization.",
    image: certInfoManagementImg,
  },
  {
    name: "Research Festival Representative",
    issuer: "AcendensAsia",
    date: "April 2025",
    year: "2025",
    achievement: "Academic Achievement",
    description:
      "Selected to represent the institution in the prestigious Research Festival, showcasing innovative research ideas and contributing to academic excellence through collaborative projects.",
    image: certResearchRepImg,
  },
  {
    name: "Top 10 Research Project on Finals",
    issuer: "AcendensAsia",
    date: "May 2025",
    year: "2025",
    achievement: "Academic Excellence",
    description:
      "Recognized as one of the top 10 research projects in the finals, demonstrating exceptional critical thinking, rigorous methodology, and impactful research findings.",
    image: certTop10Img,
  },
  {
    name: "Research Festival Champion",
    issuer: "AcendensAsia",
    date: "May 2025",
    year: "2025",
    achievement: "Academic Excellence",
    description:
      "Achieved first place at the Research Festival, demonstrating outstanding research innovation, effective collaboration, and superior presentation skills among competing projects.",
    image: certChampionImg,
  },
  {
    name: "Graduation Certificate",
    issuer: "Bestlink College of The Philippines",
    date: "June 2025",
    year: "2025",
    achievement: "Academic Milestone",
    description:
      "Awarded upon successful completion of all academic requirements, symbolizing dedication, perseverance, and outstanding academic achievement throughout the program.",
    image: certGraduationImg,
  },
];

export const testimonials = [
  {
    quote:
      "Daryl completely transformed how we bring in and manage clients. He built our GHL system from the ground up and it just works — our pipeline runs smoother, follow-ups happen automatically, and I finally have visibility into where every lead stands.",
    name: "Adam Harper",
    role: "CEO/Owner",
  },
  {
    quote:
      "Working alongside Daryl on GHL builds and web design has been great — he's sharp, fast, and genuinely knows the platform inside and out. Whenever a funnel or automation gets tricky, he's the first person I go to.",
    name: "Julian Jules Pardi",
    role: "GHL & Web Design Specialist",
  },
];
