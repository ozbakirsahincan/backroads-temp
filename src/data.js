import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
    {id: 1, href: "#home", text: "Home"},
    {id: 2, href: "#about", text: "about"},
    {id: 3, href: "#services", text: "services"},
    {id: 4, href: "#tours", text: "tours"},
];
export const socialLinks = [
    {id: 1, href: "https://www.twitter.com", icon: 'fab fa-facebook'},
    {id: 2, href: "https://www.twitter.com", icon: 'fab fa-twitter'},
    {id: 3, href: "https://www.twitter.com", icon: 'fab fa-squarespace'},

];

export const services = [
    {
        id: 1,
        title: 'saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
        icon: 'fas fa-wallet fa-fw'
    },
    {
        id: 2,
        title: 'endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
        icon: 'fas fa-tree fa-fw'
    },
    {
        id: 3,
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
        icon: 'fas fa-socks fa-fw'
    }
];
export const tours = [
    {
        id: 1,
        image: tour1,
        date: 'agust 26th , 2024',
        title: 'Tibet Adventure',
        location: 'China',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        duration: 6,
        cost: 2100
    },
    {
        id: 2,
        image: tour2,
        date: 'October 11th , 2024',
        title: 'best of java',
        location: 'indonesia',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        duration: 11,
        cost: 1400
    },
    {
        id: 3,
        image: tour3,
        date: 'September 15th , 2024',
        title: 'Explore Hong Kong',
        location: 'Hong Kong',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        duration: 8,
        cost: 5000
    },
    {
        id: 4,
        image: tour4,
        date: 'December 5th , 2024',
        title: 'Kenya Highlights',
        location: 'Kenya',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        duration: 20,
        cost: 3300
    },
];
