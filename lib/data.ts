export const personalInfo = {
  name: "Raj Patel",
  title: "Full Stack Developer",
  subtitle: "React • Next.js • Express.js • TypeScript",
  tagline:
    "Building high-performance, scalable, and user-friendly applications with modern JavaScript technologies",
  email: "rajpatel158g@gmail.com",
  location: "Ahmedabad, India",
  username: "rajpatelbot",
  github: "https://github.com/rajpatelbot",
  linkedin: "https://linkedin.com/in/rajpatelbot",
}

export const aboutData = {
  yearsExperience: "3+",
  description: [
    "I'm a Full Stack Developer with over 3 years of experience building digital experiences. My expertise in to create applications and robust backend architecture.",
    "I built real-time systems, secure authentication systems, video processing workflows, chatbots and seamless cloud integrations.",
    "Every project I undertake is driven by a commitment to clean code, optimal performance, and good user experience.",
  ],
}

export const experienceData = [
  {
    title: "Software Engineer",
    company: "HK Infosoft",
    period: "2023 — Present",
    description: "Building scalable web and mobile applications with modern JavaScript technologies.",
    achievements: [
      "Developed real-time WebSocket chat platform enabling seamless communication",
      "Built applications using javascript technologies",
      "Integrated AWS S3, Google Maps, and Service Worker for enhanced functionality",
      "Implemented secure authentication systems with 2 factor authentication",
      "Led codebase optimization and TypeScript migration initiatives",
      "Created video trimming & annotation system achieving 50% efficiency gain",
    ],
  },
  {
    title: "Freelancer",
    company: "Self-Employed",
    period: "2022 — 2023",
    description: "Delivered custom application as a freelance developer.",
    achievements: [
      "Developed custom web applications tailored to client needs",
      "Implemented responsive designs ensuring cross-device compatibility",
      "Integrated third-party services like S3-bucket, stripe etc for enhanced application functionality",
      "Provided ongoing maintenance and feature enhancements post delivery",
    ],
  }
]

export const techStack = {
  languages: ["JavaScript", "TypeScript"],
  frontend: [
    "React",
    "Next.js",
    "Redux Toolkit",
    "React-Hook-Form",
    "Yup",
    "Zod",
    "Tailwind CSS",
    "MUI",
    "Axios",
    "React Query",
    "i18n",
    "React Testing Library",
  ],
  backend: ["Express.js", "Prisma", "MongoDB", "PostgreSQL", "REST APIs"],
  other: ["AWS S3", "Git", "GitHub", "Docker", "Deployment"],
}

export const services = [
  {
    title: "Frontend Development",
    shortCode: "FD",
    description:
      "UI engineering, responsive design and expertise in the React/Next.js ecosystem.",
    icon: "layout",
  },
  {
    title: "Full-Stack Development",
    shortCode: "FSD",
    description: "APIs, databases, and backend architecture using Express.js, Prisma, MongoDB, and PostgreSQL.",
    icon: "layers",
  },
  {
    title: "Mobile App Development",
    shortCode: "MAD",
    description: "React Native apps, delivering smooth and performant mobile experiences.",
    icon: "smartphone",
  },
  {
    title: "Cloud Integration & Deployment",
    shortCode: "CID",
    description: "AWS S3, deployments, CI/CD pipelines and docker setup for production applications.",
    icon: "cloud",
  },
]

export const projects = [
  {
    title: "CodeBuddy",
    subtitle: "AI Regulatory Assistance",
    description:
      "An intelligent AI-powered platform providing real-time regulatory guidance and compliance assistance with advanced chat capabilities and multi-language support.",
    tech: ["React", "TypeScript", "Redux Toolkit", "WebSockets", "i18n"],
    features: ["Real-time AI chat", "Multi-language support", "Document analysis", "Compliance tracking"],
    image: "/codebuddy.png",
    link: "https://codebuddy.chat/",
  },
  {
    title: "Rentweet",
    subtitle: "Property Management Platform",
    description:
      "A comprehensive property management solution enabling landlords and tenants to streamline their rental processes with real-time updates and seamless communication.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB"],
    features: ["Property listings management", "Tenant portal", "Payment tracking", "Maintenance requests"],
    image: "/rentweet.png",
    link: "https://rentweet.com",
  },
  {
    title: "VisionCoach",
    subtitle: "Video Analysis Platform",
    description:
      "A powerful video editing and annotation platform designed for coaches and analysts, featuring efficient trimming tools and collaborative annotation features.",
    tech: ["React", "Service Worker", "FFmpeg", "REST APIs"],
    features: ["Video trimming", "Frame-by-frame annotation", "Offline support", "Team collaboration"],
    image: "/video-editing-interface-sports.jpg",
    link: "",
  },
  {
    title: "kirri",
    subtitle: "BLE Device Application",
    description:
      "A React Native application enabling seamless Bluetooth Low Energy device communication for IoT applications with real-time data synchronization.",
    tech: ["React Native", "BLE"],
    features: ["Device scanning", "Real-time data sync", "Connection management", "Data visualization"],
    image: "",
    link: "https://play.google.com/store/apps/details?id=com.scentaustralia.kirri",
  },
  {
    title: "TuneUp Golf",
    subtitle: "Sports Training Application",
    description:
      "A performance video editing application for golf training, featuring native module integration for smooth playback and analysis capabilities.",
    tech: ["React Native", "Native Modules"],
    features: ["Slow-motion playback", "Swing analysis", "Progress tracking", "Video comparison"],
    image: "",
    link: "https://apps.apple.com/in/app/tuneup-golf/id6505066475",
  },
]

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]
