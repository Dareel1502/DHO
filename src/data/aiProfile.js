// Plain-text data fed to the AI as context. Keep this separate from
// content.js because content.js imports image assets that shouldn't
// be bundled into the serverless function.

export const aiProfile = {
  name: "Daryl Hans Ocao",
  role: "Web Developer, Software Engineer & GHL Automation Specialist",
  summary:
    "Daryl is a web developer, software engineer, and AI engineer specializing in GoHighLevel (GHL) websites, funnels, automation, and lead generation. He's a GHL specialist/expert who helps businesses attract, convert, and keep more customers through high-converting funnels, smart automation, and AI-powered systems.",

  coreSkills: [
    "Web Design & Web Development",
    "Software Engineering",
    "AI Engineering",
    "GoHighLevel (GHL) — specialist/expert: website & funnel design, workflows, automations",
    "Automation across Make, n8n, and GHL workflows",
    "Lead Generation (strategy, funnels, and assisting businesses inside GHL)",
    "High-Converting Funnels",
    "SEO",
    "Booking & Scheduling Systems",
    "Responsive web design",
    "Branding & Canva/Dribbble-based visual design",
    "AI-powered lead generation & cold SMS outreach systems",
    "AI website generation pipelines (webhook-triggered site builders)",
  ],

  services: [
    {
      name: "Process Automation",
      details:
        "Workflow automation using Make, n8n, and GHL — task automation, process optimization, custom scripting to remove manual work.",
    },
    {
      name: "Scheduling Systems",
      details:
        "Appointment scheduling, resource management, calendar integration, automated reminders.",
    },
    {
      name: "Web & Funnel Design / Development",
      details:
        "Responsive layouts, visual branding, GHL website & funnel builds, custom web development, light media editing.",
    },
    {
      name: "Lead Generation & GHL Support",
      details:
        "Helps and assists businesses inside GHL as a specialist/expert — building pipelines, funnels, and automations that generate and nurture leads.",
    },
    {
      name: "AI Engineering",
      details:
        "Builds AI-powered systems: outreach bots, AI website generators, and automation pipelines connecting AI models to business workflows.",
    },
  ],

  experience: [
    {
      role: "AI Automation & Funnel Specialist",
      company: "Profit Flow AI (Agency)",
      period: "2025 — Present",
      summary:
        "Builds AI outreach systems messaging 100-500 prospects with response rates up to 30%. Built an AI website generator that turns a business name into a live site in under 40 seconds. Automated full client onboarding from site generation to delivery.",
    },
    {
      role: "GoHighLevel Funnel & Automation Expert",
      company: "Freelance — Client-Based",
      period: "2024 — 2025",
      summary:
        "Redesigned e-commerce funnels (+30% completed purchases), automated order/shipping/inventory workflows (-55% manual processing time), connected CRM/support tools (40% faster resolution), increased AOV by 22% via upsell automation.",
    },
  ],

  notableProjects: [
    "GB Construction & Outdoors — construction & outdoor services website",
    "Foundation Fitness — fitness studio landing page with booking",
    "Lopez Lawn Care — instant quote request funnel",
    "Veterans Wellbeing — appointment booking for a wellness center",
    "High Quality Roofing — emergency callout + estimate funnel",
    "Website Automation Generation — webhook → AI website builder, live site generated in under a minute",
    "Categorized Website Generation — industry-specific site builder routed by business category",
    "Lead Generation & Cold SMS Nurturing — Apify scraping + Google Sheets + automated SMS nurture sequences",
  ],

  whatHeIsGoodFor: [
    "Building or redesigning a lead-generating website or funnel (especially in GoHighLevel)",
    "Automating business workflows with Make, n8n, or GHL: onboarding, follow-ups, reminders, CRM syncing",
    "Setting up booking/scheduling systems",
    "Cold outreach / lead generation automation (scraping, SMS, nurture sequences)",
    "AI-powered website generation pipelines and AI engineering work",
    "General web development / software engineering tied to funnels, sites, or automation",
    "SEO improvements tied to a funnel or landing page",
    "Acting as a GHL expert to help businesses set up or troubleshoot their GHL account",
  ],

  whatHeIsNotAFitFor: [
    "Native mobile app development (iOS/Android)",
    "Enterprise backend engineering, large-scale distributed systems, or DevOps/infrastructure work",
    "Deep data science / machine learning model development (training models from scratch, research-level ML)",
    "Complex custom software unrelated to funnels, websites, or automation (e.g. games, embedded systems)",
    "Legal, financial, medical, or other licensed professional services",
  ],

  contact: {
    email: "psync15@gmail.com",
    phone: "+63 938 4247 715",
  },
};
