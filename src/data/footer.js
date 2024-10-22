//Import all the icons and svg
import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import LinkedIn from '../assets/icons/linkedIn.svg';
import Phone from '../assets/icons/phone.svg';
import Email from '../assets/icons/mail.svg';
import Location from '../assets/icons/Location.svg';
import React from 'react';

//Logo and copyright text
import HavestHub from '../assets/icons/HarvestHub-Logo.svg';
export const LogoAndCopyright = [
    { Logo: HavestHub }, // Add the path to your logo image
    { copyright: '©2024 Harvest Hub by CyberNexus Inc.' },
];

//Learn More Links
export const LearnMorelinks = [
    { text: 'About Us', url: '/' },
    { text: 'Contact Us', url: '/' },
    { text: 'Help Center', url: '/' },
    { text: 'Terms of Use & Policy', url: '/term-and-policy' },
];

//Get to know us links
export const Links = [
    { text: 'Team CyberNexus', url: '#' },
    { text: 'CyberNexus Members', url: '#' },
];

//Social Media Links
export const SocialLinks = [
    {
        platform: 'Facebook',
        url: 'https://facebook.com',
        icon: Facebook,
    },
    {
        platform: 'Instagram',
        url: 'https://instagram.com',
        icon: Instagram,
    },
    {
        platform: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: LinkedIn,
    },
];

// Contact us links
export const ContactUs = [
    { text: '+855 12345678', icon: Phone },
    { text: 'User123@gmail.com', icon: Email },
    {
        text: 'Business Development Center (BDC) Building, 8th Floor, OCIC Blvd, Sangkat Chroy Changvar, Khan Chroy Changvar, Phnom Penh, Cambodia',
        icon: Location,
    },
];
