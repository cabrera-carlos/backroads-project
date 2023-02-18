import tour1 from "./assets/tour-1.jpeg";
import tour2 from "./assets/tour-2.jpeg";
import tour3 from "./assets/tour-3.jpeg";
import tour4 from "./assets/tour-4.jpeg";

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

interface Service {
  id: number;
  icon: string;
  title: string;
  text: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

interface Tour {
  id: number;
  img: string;
  date: string;
  title: string;
  description: string;
  location: string;
  duration: number;
  price: number;
}

export const tours: Tour[] = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    img: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: 20,
    price: 3300,
  },
];
