export const siteConfig = {
  name: "Yechan Kim",
  title: "Full-Stack Developer",
  tagline: "Building things for the web.",
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
