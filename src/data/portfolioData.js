export const personalInfo = {
  name: "MUHAMMAD ANAS AZEEM",
  shortName: "M. Anas Azeem",
  title: "App Developer & UI/UX Designer",
  subtitle: "Crafting cross-platform Flutter & Web experiences",
  bio: "BSSE student and freelance UI/UX designer bringing hands-on experience in mobile application development, working foundation in Flutter/Dart, and 5+ years of design mastery.",
  location: "Faisalabad, Pakistan",
  status: "Available for Mobile & Web Projects",
  phones: ["+92 325 3000192", "+92 310 4025172"],
  email: "graphics121234@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-anas-891396333/",
  github: "https://github.com/MuhammadAnasAzeem",
  experienceYears: "2+ Yrs",
  designExperience: "5+ Years UI/UX Practice",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF4WpouYpspqA8jgEcrfMo42BGrV4PB182lqR_u_RPxYxOeBEI5ta5uzEySk4QcfBY52TIUMlafPvoNzVbeZK7X28DxK2QtzkGVeWHu66cxSzwXCLVk1vToLwt009pFrToqJTvoH4SCZFMwCelIxPn0Imid3uZ1vYeLOMvUxC5A4BQKVbefw8T6hSeJImoKJ--gf2T_6glCYm2DB0334jWZo72JaBV5EwkSkHSRFvz1YuN7kYRPrsAlmFlKBcAXNAV",
};

export const primaryStack = [
  { name: "Flutter & Dart", category: "Mobile Core", color: "text-[#adc6ff] bg-[#181c24]" },
  { name: "Firebase", category: "Backend", color: "text-[#4edea3] bg-[#181c24]" },
  { name: "React & Vite", category: "Frontend Web", color: "text-[#d0bcff] bg-[#181c24]" },
  { name: "Node.js", category: "Backend Runtime", color: "text-[#dfe2ee] bg-[#181c24]" },
  { name: "REST APIs", category: "Networking", color: "text-[#dfe2ee] bg-[#181c24]" },
  { name: "Figma UI/UX", category: "Design System", color: "text-[#d0bcff] bg-[#181c24]" },
  { name: "Android Studio", category: "Tooling", color: "text-[#4edea3] bg-[#181c24]" },
];

export const projects = [
  {
    id: "propmap-ai",
    title: "PropMap AI — Real Estate App",
    category: "Property Management",
    framework: "Flutter + Dart",
    timeline: "08/2026 – 09/2026",
    statusBadge: "Shipped v1.4",
    statusColor: "bg-[#4d8eff]/20 text-[#adc6ff]",
    shortDescription: "Developed a cross-platform property management application using Flutter and Dart, implementing authentication, property listings, profile, and home modules with Firebase integration.",
    fullDescription: "PropMap AI is an enterprise-grade real estate management platform designed to deliver smooth property discovery, interactive map viewports, and automated lease tracking. Architected with clean Dart modularity, state providers, and real-time Cloud Firestore database synchronization.",
    architectureDeliverables: [
      "Core modules for listings, property detail maps, and user profiles",
      "Configured Firebase across Android, iOS, Web, macOS, and Windows",
      "Structured models, providers, services & reusable widget system",
      "Real-time geolocation markers with 14 active property pins",
    ],
    techStack: ["Flutter", "Dart", "Firebase Firestore", "Firebase Auth", "Provider State Management", "Google Maps API", "Cross-Platform"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy5ranVTV1Z2K8LM4vxUwmj_ag9YWlVFwQf-ue0t_X1Ohckoe6RWlb60gghKLrtZoicb-8kOd3pNJIOdze2X6elnVLPK1h0GMcJ4Q9wFyEQ1dKkxyZu4EM-8GHdm_tBI9pCfR_bfwNiWeevvK90_-rtwv-jMdUU0nV-Z1a85csinuGRGiwVG2QR0i6tXR0kjV6aJ-IY1KyKDAPaF-_pUTCH5i_Ch4evFEVxVXN2hP7iOMraqbNB9Q",
    metrics: [
      { label: "Active Listings", value: "14" },
      { label: "Pending Leases", value: "3" },
      { label: "Client Inquiries", value: "8" },
    ],
    demoUrl: "#contact",
  },
  {
    id: "personal-portfolio",
    title: "Personal Developer Portfolio",
    category: "Web Portfolio",
    framework: "React / Vite",
    timeline: "2025 – 2026",
    statusBadge: "Live Production",
    statusColor: "bg-[#4edea3]/20 text-[#4edea3]",
    shortDescription: "Designed and built a personal developer portfolio site in React/Vite with Framer Motion animations and high-fidelity native iOS glassmorphism.",
    fullDescription: "A high-performance personal developer portfolio showcasing cross-platform mobile apps, design systems, and technical telemetry. Built with React 19, Tailwind CSS v4, and dynamic interactive preview components including a fully interactive iPhone 16 Pro Max centerpiece.",
    architectureDeliverables: [
      "Interactive 3D-feel iPhone 16 Pro Max simulator with dynamic island states",
      "Custom responsive 12-column grid pinned to 1280px max canvas width",
      "Interactive engineering lab modules featuring physics drag and CRDT sync simulation",
      "Optimized load times with smooth section transitions and touch-friendly controls",
    ],
    techStack: ["React 19", "Vite", "Tailwind CSS v4", "Framer Motion", "Material Symbols", "GitHub Pages"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF4WpouYpspqA8jgEcrfMo42BGrV4PB182lqR_u_RPxYxOeBEI5ta5uzEySk4QcfBY52TIUMlafPvoNzVbeZK7X28DxK2QtzkGVeWHu66cxSzwXCLVk1vToLwt009pFrToqJTvoH4SCZFMwCelIxPn0Imid3uZ1vYeLOMvUxC5A4BQKVbefw8T6hSeJImoKJ--gf2T_6glCYm2DB0334jWZo72JaBV5EwkSkHSRFvz1YuN7kYRPrsAlmFlKBcAXNAV",
    metrics: [
      { label: "FPS Target", value: "120Hz" },
      { label: "Components", value: "18+" },
      { label: "Lighthouse Score", value: "99" },
    ],
    demoUrl: "https://github.com/MuhammadAnasAzeem",
  },
  {
    id: "bmi-calculator",
    title: "BMI Health & Fitness Utility",
    category: "Health & Fitness",
    framework: "Flutter Mobile",
    timeline: "2025",
    statusBadge: "Production Build",
    statusColor: "bg-[#d0bcff]/20 text-[#d0bcff]",
    shortDescription: "Interactive BMI calculator built with Dart & Flutter featuring custom interactive sliders, body mass classification gauge, and clean architecture.",
    fullDescription: "A modern health utility mobile application that calculates Body Mass Index in real time with visual feedback gauges, biometric range classifications, and custom slider widgets.",
    architectureDeliverables: [
      "Real-time BMI calculation algorithm with immediate metric updates",
      "Custom gradient visual gauge displaying Underweight, Normal, and Overweight ranges",
      "Smooth interactive height & weight sliders built with Flutter gestures",
      "Dart Clean Architecture with isolated presentation and domain layers",
    ],
    techStack: ["Flutter", "Dart", "Clean Architecture", "Custom Sliders", "Gestures API"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { label: "BMI Value", value: "21.4" },
      { label: "Status", value: "Normal" },
      { label: "Latency", value: "0ms" },
    ],
    demoUrl: "#contact",
  },
];

export const skillCategories = [
  {
    name: "Mobile App Development",
    skills: [
      { name: "Flutter", level: 92, tag: "Primary Framework" },
      { name: "Dart", level: 90, tag: "Core Language" },
      { name: "Android (Java/Kotlin Basics)", level: 80, tag: "Native Android" },
      { name: "iOS SwiftUI Concepts", level: 75, tag: "iOS Ergonomics" },
      { name: "Provider State Management", level: 90, tag: "Architecture" },
    ]
  },
  {
    name: "Frontend & Full-Stack Web",
    skills: [
      { name: "React & Vite", level: 88, tag: "Web Core" },
      { name: "JavaScript / HTML5 / CSS3", level: 95, tag: "Foundation" },
      { name: "Node.js & Express", level: 82, tag: "Server Runtime" },
      { name: "Tailwind CSS", level: 92, tag: "Styling System" },
      { name: "RESTful APIs Integration", level: 90, tag: "Networking" },
    ]
  },
  {
    name: "Backend, Cloud & Tools",
    skills: [
      { name: "Firebase Authentication", level: 94, tag: "Cloud Auth" },
      { name: "Cloud Firestore & Storage", level: 92, tag: "NoSQL DB" },
      { name: "Git & GitHub", level: 90, tag: "Version Control" },
      { name: "Gradle & Build Tools", level: 85, tag: "Build System" },
      { name: "Android Studio & VS Code", level: 95, tag: "IDE Environment" },
    ]
  },
  {
    name: "UI/UX Design Mastery (5+ Yrs)",
    skills: [
      { name: "Figma Interface Design", level: 96, tag: "Design Tool" },
      { name: "Adobe XD & Photoshop", level: 90, tag: "Asset Design" },
      { name: "Wireframing & Prototyping", level: 94, tag: "User Journey" },
      { name: "Design Tokens & Glassmorphism", level: 95, tag: "Design Systems" },
    ]
  }
];

export const experiences = [
  {
    role: "Flutter App Developer",
    company: "Self-Employed / Freelance",
    period: "2025 — PRESENT",
    location: "Remote / Client Projects",
    summary: "Developing responsive cross-platform Flutter applications and modern web solutions for individual and small-business clients.",
    responsibilities: [
      "Developing responsive websites and web applications using HTML, CSS, JavaScript, React, and Node.js.",
      "Developed cross-platform applications using Flutter and Dart for Android, iOS, Web, Windows, and macOS.",
      "Built responsive and user-friendly interfaces using reusable Flutter widgets.",
      "Implemented application functionality using models, providers, services, and modular architecture.",
      "Integrated Firebase for authentication, real-time database, and cloud storage services.",
      "Troubleshot Flutter, Dart, Gradle, and Firebase integration issues to achieve high stability.",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "React", "Node.js", "Gradle", "Provider"],
  },
  {
    role: "UI/UX Designer & Graphic Specialist",
    company: "Freelance",
    period: "2020 — PRESENT (5+ Years)",
    location: "Faisalabad, Pakistan",
    summary: "Delivering mobile and web visual design, wireframes, high-fidelity prototypes, and brand identities for client applications.",
    responsibilities: [
      "Crafted mobile application user flows, interactive prototypes, and component libraries in Figma.",
      "Established dark-mode precision aesthetic systems with subtle glassmorphism and Apple-grade ergonomics.",
      "Collaborated directly with engineering leads to ensure 100% design-to-code fidelity.",
    ],
    technologies: ["Figma", "Adobe XD", "Design Systems", "Prototyping", "Glassmorphism"],
  }
];

export const endorsements = [
  {
    name: "Client Feedback",
    role: "PropMap AI Stakeholder",
    company: "Real Estate Client",
    quote: "Anas delivered our cross-platform property management application ahead of schedule with flawless Firebase integration and exceptional UI polish. His Flutter expertise and design background made working with him effortless.",
    rating: 5,
  },
  {
    name: "Engineering Colleague",
    role: "Full-Stack Developer",
    company: "Tech Associate",
    quote: "Muhammad Anas combines deep low-level Flutter/Dart problem-solving with a 5-year visual design background. He builds modular, scalable widget architectures that look like high-end native iOS products.",
    rating: 5,
  },
  {
    name: "Small Business Client",
    role: "Founder",
    company: "Retail Enterprise",
    quote: "The web and mobile solutions Anas created for our business were fast, responsive, and beautifully designed. Highly recommended for any client seeking clean code and top-tier UI.",
    rating: 5,
  }
];
