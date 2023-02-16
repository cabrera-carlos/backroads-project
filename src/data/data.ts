interface Link {
  id: number;
  href: string;
}

interface NavLink extends Link {
  label: string;
}

interface SocialLink extends Link {
  icon: string;
}

export const navLinks: NavLink[] = [
  { id: 1, href: "#home", label: "home" },
  { id: 2, href: "#about", label: "about" },
  { id: 3, href: "#services", label: "services" },
  { id: 4, href: "#tours", label: "tours" },
];

export const socialLinks: SocialLink[] = [
  { id: 1, href: "https://www.facebook.com", icon: "facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "squarespace" },
];
