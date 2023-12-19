import { Facebook, FeatureLogoThree, FeatureLogoTwo, FeaturedLogoOne, InstagramLogo, TitTokLogo, TwitterLogo, YotubeLogo, articleLogo, articleLogoTwo, starLogo } from "@/assets/image";
import { feature, headerMenuu, recent, upComing } from "./interface";

export const headerMenu: headerMenuu[] = [
    { label: 'Courses' },
    { label: 'Free Workshops' },
    { label: 'Blog' },
    { label: 'About' },
    { label: 'Contact' },

]
export const headerMenuItem = [
    {
        menu:
            [
                { item: 'About', },
            ]
    },
    {
        menu:
            [
                { item: 'About', },
            ]
    },
    {
        menu:
            [
                { item: 'About', },
            ]
    },
    {
        menu:
            [
                { item: 'About', },
            ]
    },
    {
        menu:
            [
                { item: 'About', },
            ]
    },
]
export const featured: feature[] = [
    { logo: FeaturedLogoOne, title: 'How to Increase Your Engagement on Instagram', text: 'Katie Murphy', price: '$ 59.99 USD', btn: 'Learn More' },
    { logo: FeatureLogoTwo, title: 'Business 101: Setting up Your Taxes', text: 'Bessie Cooper', price: '$ 69.99 USD', btn: 'Learn More' },
    { logo: FeatureLogoThree, title: 'iPhone Photography: Tips, Tricks and Best Practices', text: 'Dianne Russell', price: '$ 69.99 USD', btn: 'Learn More' }

]
export const upcoming: upComing[] = [
    { title: 'Photography Basics', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.', btn: 'Learn More' },
    { title: 'Business 101', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.', btn: 'Learn More' },
    { title: 'Social Networking Camp', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.', btn: 'Learn More' },
]
export const recentCards: recent[] = [
    { logo: articleLogo, date: 'February 8, 2021', title: 'The TikTok Algorithm: How to Get the Best Engagement0', text: 'Dianne Russell' },
    { logo: articleLogo, date: 'February 8, 2021', title: 'How to Win Friends and Influence People', text: 'Marvin McKinney' },
    { logo: articleLogoTwo, date: 'January 31, 2021', title: 'iPhone Photography: Tips, Tricks, and Best Practices', text: 'Katie Murphy' }
]
export const footerLinks = [
    {
        title: 'learning Platform',
        links: [
            { id: 'Home', item: 'Home' },
            { id: 'Courses', item: 'Courses' },
            { id: 'Free Workshops', item: 'Free Workshops' },
            { id: 'Blog', item: 'Blog' },
            { id: 'About', item: 'About' },
            { id: 'Contact', item: 'Contact' },
        ]
    },
    {
        title: 'Template',
        links: [
            { id: 'Instructions', item: 'Instructions' },
            { id: 'Style Guide', item: 'Style Guide' },
            { id: 'Licenses', item: 'Licenses' },
            { id: 'Changelog', item: 'Changelog' },
        ]
    },
    {
        title: 'Follow skillz',
        links: [
            { item: 'TitTokLogo', },
            { item: 'InstagramLogo', },
            { item: 'YotubeLogo', },
            { item: 'Facebook', },
            { item: 'TwitterLogo', }
        ]
    },
]
export const stars = [
    {
        img: starLogo
    },
    {
        img: starLogo
    },
    {
        img: starLogo
    },
    {
        img: starLogo
    },
    {
        img: starLogo
    },
]


