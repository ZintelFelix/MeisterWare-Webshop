import React from 'react';
import './OverviewSection.css';
import { Truck, DollarSign, Headphones, CreditCard } from 'lucide-react';

const features = [
    {
        Icon: Truck,
        title: 'Kostenloser Versand & Rückgabe',
        subtitle: 'Kostenloser Versand für alle Bestellungen über 99€',
    },
    {
        Icon: DollarSign,
        title: 'Geld-zurück-Garantie',
        subtitle: '100% Geld-zurück-Garantie',
    },
    {
        Icon: Headphones,
        title: 'Online Support 24/7',
        subtitle: 'Hilfecenter & Support.',
    },
    {
        Icon: CreditCard,
        title: 'Sichere Zahlung',
        subtitle: 'Alle Karten werden akzeptiert.',
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