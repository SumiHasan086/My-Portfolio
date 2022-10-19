import { GoDeviceDesktop } from "react-icons/go";
import { SiAdobeindesign } from "react-icons/si";
import { BiMobileAlt } from "react-icons/bi";

export const ABOUT = {
    title: "About Me",
    name: "Sumi Hasan",
    description: "I am a Front-End developer with a passion for building beautiful, responsive websites and applications. I am currently working on a career in Front-End development.I'm over sure that I am oriented ,stategic and hard working. Always I work with an end goal in mind and try to make an error free website",
    exports: ['JavaScript', 'React', 'Tailwind','jQuery', 'Bootstrap'],
    image: "/Asset/me.jfif",
    services: [
        {
            title: "Web Design",
            text: "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers.",
            icon: <SiAdobeindesign size={33} />
        },
        {
            title: "Web Development",
            text: "Web development refers in general to the tasks associated with developing websites for hosting via or internet. The web development process includes web design, web content development, client-side scripting and network security configuration, among other tasks.",
            icon: <GoDeviceDesktop size={33} />
        },
        {
            title: "Responsive Design",
            text: "Responsive Web Design is about using HTML and CSS to automatically resize a website. Responsive Web Design is about making a website look good on all devices (desktops, tablets, and phones): Setting The Viewport When making responsive web pages, add the following element to all your web pages:",
            icon: <BiMobileAlt size={33} />
        },
    
    
    ]
}