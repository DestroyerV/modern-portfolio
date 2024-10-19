export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Amazon Product Scraper",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const techStacks1 = ["React.JS", "Next.js", "TypeScript"];
export const techStacks2 = ["Node.JS", "MongoDB", "Express.JS"];

export const email = "mishravaibhav12321@gmail.com";

export const projects = [
  {
    id: 1,
    title: "Dev Corner",
    des: "A community app for developers to post their stuff.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mongodb.svg", "/c.svg"],
    link: "https://github.com/DestroyerV/dev-corner",
  },
  {
    id: 2,
    title: "Save Some Cash",
    des: "A amazon price tracking website that also notify about prices.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/axios.svg", "/cheerio.svg", "/mongodb.svg"],
    link: "https://save-some-cash.vercel.app/",
  },
  {
    id: 3,
    title: "LibreTube-Desktop",
    des: "Ad free frontend alternative of Youtube made using piped API.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/mui.svg", "/javascript.svg", "/axios.svg", "/vite.svg"],
    link: "https://github.com/DestroyerV/LibreTube-Desktop",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Vaibhav was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vaibhav's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vaibhav is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    profileImage: "/user1.jpg",
  },
  {
    quote:
      "I have had the pleasure of witnessing Vaibhav's growth as a developer firsthand. Their dedication, creativity, and technical skills are truly impressive. They have a remarkable ability to solve complex problems and produce high-quality work. I have no doubt they will achieve great things in their career.",
    name: "Vikram Singh",
    title: "Professor",
    profileImage: "/user2.jpg",
  },
  {
    quote:
      "I had the opportunity to work with Vaibhav during our internship program. Their technical acumen and willingness to learn were evident from day one. They quickly became an integral part of our team, delivering exceptional results under tight deadlines. I am confident that they will make significant contributions in any environment.",
    name: "David Kim",
    title: "Technical Lead",
    profileImage: "/user3.jpg",
  },
  {
    quote:
      "Collaborating with Vaibhav was a game-changer for our project. Their professionalism and innovative approach brought our ideas to life. [Your Name] not only met our expectations but exceeded them, delivering a final product that we are incredibly proud of. I highly recommend them to anyone looking for top-notch development skills.",
    name: "Sarah Patel",
    title: "Project manager",
    profileImage: "/user4.jpg",
  },
  {
    quote:
      "Working alongside Vaibhav on various projects has been an inspiring experience. They bring a unique perspective and a positive attitude to every team. Their attention to detail and commitment to excellence make them a standout contributor. I can’t wait to see where their journey takes them!",
    name: "Sambhav Travedi",
    title: "Classmate",
    profileImage: "/user5.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Open Source Contributor",
    desc: "Contributed in many open source repositories.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Computer Society of India",
    desc: "Developed a website and event registration page for my college club.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a web app for a client, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Personal Projects",
    desc: "Worked on many complex personal projects.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/DestroyerV",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/DESTROYER__V",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/vaibhav-mishra-124baa289/",
  },
];
