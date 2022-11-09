import {BadgeEuro, FolderOpenDot, SquareCode} from "lucide-react";
import vontobel from "/public/vontobel.jpg";
import werbas from "/public/werbas.jpg";
import baloise from "/public/baloise.jpg";

export const menuLinks = [
    { link: "Services", hash: "#services" , icon: <SquareCode /> },
    { link: "Projects", hash: "#projects" , icon: <FolderOpenDot /> },
    { link: "Pricing", hash: "#pricing" , icon: <BadgeEuro /> },
];

export const services = [
    {
        title: 'Frontend',
        description: "Creating web applications that aren't just functional but also visually striking. I'll ensure your web applications not only meet your business needs but also leave your users in awe of the experience.",
    },
    {
        title: 'Backend',
        description: "Building powerful, scalable, and lightning-fast server solutions that make your web applications perform like clockwork, giving you the competitive edge you need in the digital landscape.",
    }
];

export const companies= [
    {
        image: vontobel,
        name: 'Bank Vontobel',
        period: 'July 2022 - Present',
        description: "Weiterentwicklung des Internetbankings. Umsetzung Stories im Frontend sowie im Backend. Integration von Avaloq Komponenten.",
        technologies: ['Kotlin', 'Angular'],
    },
    {
        image: werbas,
        name: 'Werbas Holzgerlingen',
        period: 'July 2022 - Present',
        description: "Weiterentwicklung des Internetbankings. Umsetzung Stories im Frontend sowie im Backend. Integration von Avaloq Komponenten.",
        technologies: ['Angular', 'C#', 'Azure'],
    },
    {
        image: baloise,
        name: 'Basloise Versicherungen',
        period: 'July 2022 - Present',
        description: "Weiterentwicklung des Internetbankings. Umsetzung Stories im Frontend sowie im Backend. Integration von Avaloq Komponenten.",
        technologies: ['Kotlin', 'Angular'],
    },
];