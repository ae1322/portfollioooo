// Portfolio Data Configuration

export const personalInfo = {
  name: "Aravind Kumar",
  fullName: "Aravind Kumar",
  role: " Frontend Developer",
  tagline: "I build clean, elegant, and modern web experiences.",
  bio: "I am a passionate frontend developer specializing in building visually stunning, accessible, and high-performance user interfaces. With over 5 years of industry experience, I focus on turning complex technical challenges into simple, pixel-perfect digital solutions.",
  avatar: "/src/assets/aravind.jpeg",
  email: "mailstoaravind13@gmail.com",
  location: "chennai, India",
  cvUrl: "/Aravind_cv.pdf", // Path to your actual resume file in the public folder (e.g. public/Aravind_cv.pdf)
  web3FormsKey: "ebbf217a-adf9-4f0d-a129-473497d074ec", // Go to web3forms.com, enter your email, get a free key in 2 seconds, and paste it here!
  socials: {
    github: "https://github.com/ae1322",
    linkedin: "https://www.linkedin.com/in/aravindkumararu",
    instagram: "https://www.instagram.com/__aravind.22",
  },
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Completed Projects", value: "5+" },
    { label: "Client Satisfaction", value: "100%" }
  ]
};

export const skillCategories = [
  {
    title: "Frontend Developer",
    skills: [
      { name: "React / Vite", level: "95%" },
      { name: "Tailwind CSS", level: "98%" },
      { name: "JavaScript (ES6+)", level: "92%" },
      { name: "TypeScript", level: "85%" },
      { name: "Framer Motion", level: "80%" }
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js / Express", level: "82%" },
      { name: "RESTful APIs", level: "90%" },
      { name: "MongoDB", level: "78%" },
      { name: "PostgreSQL", level: "75%" }
    ]
  },
  {
    title: "Tools & Methodologies",
    skills: [
      { name: "Git & GitHub", level: "92%" },
      { name: "Figma to Code", level: "95%" },
      { name: "Vercel / Netlify", level: "88%" },
      { name: "SEO & Accessibility", level: "85%" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "SaaS Analytics Dashboard",
    category: "Fullstack",
    tags: ["React", "Tailwind CSS", "Node.js", "Chart.js"],
    description: "A premium business intelligence analytics dashboard that tracks sales metrics, user sessions, and financial conversions in real time with high-performance interactive charts.",
    image: "/src/assets/project_saas_dashboard.png",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com"
  },
  {
    id: 2,
    title: "Zenith - Smart Task Manager",
    category: "Frontend",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Context API"],
    description: "An ultra-sleek, card-based task management tool focusing on beautiful transitions, drag-and-drop feedback, dark mode elements, and smart priority organization.",
    image: "/src/assets/project_zenith_task.png",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com"
  },
  {
    id: 3,
    title: "Apex - Visual E-Commerce",
    category: "Fullstack",
    tags: ["React", "Stripe API", "Express.js", "MongoDB"],
    description: "A fast, SEO-optimized digital storefront with real-time cart edits, secure stripe processing, search filtering, and an automated invoice dispatch system.",
    image: "/src/assets/project_apex_ecommerce.png",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com"
  },
  {
    id: 4,
    title: "Porto - Lightweight Design Library",
    category: "Design System",
    tags: ["React", "Tailwind CSS", "Storybook", "NPM"],
    description: "An open-source, highly customizable React UI kit packed with accessible, keyboard-navigable components designed to speed up frontend development work.",
    image: "/src/assets/project_porto_ui.png",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com"
  }
];

export const certifications = [
  {
    title: "HTML & CSS",
    issuer: "GUVI-HCL",
    date: "Dec 2025",
    credentialId: "6R75InL66f7M463501",
    verifyUrl: "https://www.guvi.in/verify-certificate.html?id=6R75InL66f7M463501&course=htmlcsstamiltamil"
  },
  {
    title: "Github",
    issuer: "GUVI-HCL",
    date: "Oct 2025",
    credentialId: "C56w81s94A966Pi74n",
    verifyUrl: "https://www.guvi.in/verify-certificate.html?id=C56w81s94A966Pi74n&course=gittamil"
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "Mar 2026",
    credentialId: "497790ff-15fa-4521-8848-3082566cf54b",
    verifyUrl: "https://www.credly.com/earner/earned/badge/497790ff-15fa-4521-8848-3082566cf54b"
  }
];

export const experiences = [
  {
    role: "Frontend Developer",
    company: "TechVanguard Solutions",
    period: "2024 - Present",
    description: "Architecting visual design systems and leading React feature developments. Refactored the core dashboard to boost loading performance by 35% and introduced standardized component architectures."
  },
  {
    role: "Frontend Developer",
    company: "PixelCraft Studios",
    period: "2022 - 2024",
    description: "Created tailored customer portals and marketing landing pages. Translated interactive Figma high-fidelity wireframes into fully responsive layouts using Tailwind CSS."
  },
  {
    role: "Junior Web Developer",
    company: "CloudFlow Systems",
    period: "2021 - 2022",
    description: "Implemented responsive styling patches, conducted API integration tests, and assisted in building and maintaining internal admin panels and dashboard tools."
  }
];
