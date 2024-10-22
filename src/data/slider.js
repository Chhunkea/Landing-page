import Community from '../assets/images/community-forum.svg';
import Farming from '../assets/images/farming-tip.svg';
import Payment from '../assets/images/payment.svg';
import Product from '../assets/images/product.svg';

const SliderData = {
    title: '🌿 OUR BEST SERVICES',
    services: [
        {
            title: 'Product',
            description:
                'Discover and purchase top agricultural products from Cambodia 🇰🇭.',
            imageUrl: Product,
            icon: '🌾',
        },
        {
            title: 'Community Forum',
            description:
                'Collaborative Community — Ask questions, offer advice, and explore new farming ideas',
            imageUrl: Community,
            icon: '💬',
        },
        {
            title: 'Farming Tips',
            description:
                'Discover the best farming tips to increase your harvest and maximize efficiency.',
            imageUrl: Farming,
            icon: '🚜',
        },
        {
            title: 'Payment',
            description:
                'Buy and sell farming products through our secure platform.',
            imageUrl: Payment,
            icon: '🛒',
        },
    ],
};

export default SliderData;
