import CommunityImage from '../assets/images/community-landing.svg';
import ProductImage from '../assets/images/product-img.svg';
import JourneyImage from '../assets/images/plant-journey.svg';
import React from 'react';

const landingPageData = {
    sections: [
        {
            title: 'Freshness at Your Fingertips',
            description:
                'From the field to your table, our marketplace offers a wide range of high-quality, locally sourced products. Browse through a variety of fresh produce, grains, and more, all from various sellers on our platform.',
            imageUrl: ProductImage,
            features: [
                'Variety of products',
                'Trusted sellers across the country',
                'Community-wide support and reviews',
            ],
        },
        {
            title: 'Community and Support',
            description:
                'Join a network of passionate individuals who share your interests and goals. Our platform not only facilitates transactions but also fosters a supportive environment for all users.',
            imageUrl: CommunityImage,
        },
        {
            title: 'Empowering Your Agricultural Journey',
            description:
                'In the tutorial section, you’ll find a wealth of resources designed to help you succeed in the agricultural industry. Whether you’re learning from the ground up or exploring advanced selling strategies, we’ve got you covered.',
            imageUrl: JourneyImage,
        },
    ],
};

export default landingPageData;
