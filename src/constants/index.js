import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  laravel,
  docker,
  ensas,
  yanecode,
  todoApp,
  laforainImmobilier,
  eharfa,
  oms,
  blog,
  threejs,
  alpinejs,
  jquerry,
  mysql,
  netcore,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Laravel Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Alpinejs",
    icon: alpinejs,
  },
  {
    name: "jQuerry",
    icon: jquerry,
  },
  {
    name: "mySQL",
    icon: mysql,
  },
  {
    name: ".Net core",
    icon: netcore,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "PHP Native Developer",
    company_name: "ENSA Safi",
    icon: ensas,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Developing a web application for real estate services.",
      "Developing an admin dashboard to report the application's state and traffic statistics.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Laravel Developer",
    company_name: "YaneCode Safi",
    icon: yanecode,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Developing a dynamic platform that seamlessly integrates e-learning and e-commerce functionalities.",
      "Implementing functionalities like online payment, courses enrollment and progress tracking",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implementing OAuth services, and ensuring robust security measures.",
    ],
  },
  {
    title: ".Net Developer",
    company_name: "ENSA Safi",
    icon: ensas,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Developing, maintaining and deploying a web application for the ENSAS financial services.",
      "Collaborating with cross-functional teams including administration functionals, product manager, and other developers to create high-quality functional product.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ToDo List App",
    description:
      "Implementing CRUD operations in a Todo List application using MongoDB, Nodejs and Bootstrap framework",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: todoApp,
    source_code_link: "https://github.com/b-Aouabe/todo-list",
  },
  {
    name: "Real Estates app",
    description:
      "A web application project and an admin dashboard for the real estate agency LAFORAIN IMMOBILIER using CSS, JS, PHP, MySQL",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: laforainImmobilier,
    source_code_link: "https://github.com/b-Aouabe/Laforain_Immobilier",
  },
  {
    name: "e-Harfa",
    description:
      "`e-Harfa` is a dynamic platform combining e-learning and e-commerce, providing students access to diverse courses created by verified instructors. It features a convenient 100% online experience, including course access, payment, and a marketplace for additional products.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Alpinejs",
        color: "pink-text-gradient",
      },
    ],
    image: eharfa,
    source_code_link: "https://github.com/b-Aouabe/e-Harfa-project",
  },
  {
    name: "ENSAS financial services.",
    description:
      "Developing, maintaining and deploying a web application for mission orders management for the ENSAS financial service.",
    tags: [
      {
        name: ".Net core",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "jQuerry",
        color: "pink-text-gradient",
      },
    ],
    image: oms,
    source_code_link: "https://github.com/b-Aouabe/miniProjet_OrdreMissions",
  },
  {
    name: "Blog Posts.",
    description:
      "Dynamic social app where users can explore a diverse range of novels, short stories shared by fellow members of the community. Engage with content by liking, commenting, and sharing your thoughts.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link:
      "https://github.com/b-Aouabe/Laravel-From-Scratch-Blog-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };
