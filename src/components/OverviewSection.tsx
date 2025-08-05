import React from 'react';
import './OverviewSection.css';
import { Truck, DollarSign, Headphones, CreditCard } from 'lucide-react';

const features = [
    {
        Icon: Truck,
        title: 'Free Shipping & Return',
        subtitle: 'Free shipping on all orders over $99.',
    },
    {
        Icon: DollarSign,
        title: 'Money Back Guarantee',
        subtitle: '100% money back guarantee.',
    },
    {
        Icon: Headphones,
        title: 'Online Support 24/7',
        subtitle: 'Help center & support.',
    },
    {
        Icon: CreditCard,
        title: 'Secure Payment',
        subtitle: 'All cards accepted.',
    },
];

const OverviewSection: React.FC = () => (
    <div className="overview">
        <div className="overview__container">
            {features.map(({ Icon, title, subtitle }, idx) => (
                <div key={idx} className="overview__item">
                    <Icon className="overview__icon" />
                    <div className="overview__text">
                        <h4 className="overview__title">{title}</h4>
                        <p className="overview__subtitle">{subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default OverviewSection;