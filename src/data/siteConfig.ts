export const siteConfig = {
  name: "Yechan Kim",
  url: "https://yechankim.com",
  title: "Yechan Kim — Software Engineer & Entrepreneur",
  tagline: "Software engineer, entrepreneur, and writer. Building products at the intersection of technology and business.",
  description: "Yechan Kim is a software engineer and entrepreneur. CS and Economics graduate from the University of Virginia. Writing about AI, technology, economics, and society.",
  email: "yechankim0531@gmail.com",
  openToWork: true,
  socials: {
    github: "https://github.com/yechankim0531",
    linkedin: "https://www.linkedin.com/in/yechan-kim-25bb891a4/",
    instagram: "https://www.instagram.com/kim.yech/",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
