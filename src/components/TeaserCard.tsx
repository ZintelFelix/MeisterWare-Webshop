// src/components/TeaserCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./TeaserCard.css";

interface TeaserCardProps {
    title: string;
    subtitle: string;
    imgSrc: string;
    linkTo?: string;
}

const TeaserCard: React.FC<TeaserCardProps> = ({ title, imgSrc, linkTo }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (linkTo) navigate(linkTo);
    };

    return (
        <div className="teaser-card" onClick={handleClick}>
            <div className="teaser-image-wrapper">
                <img src={imgSrc} alt={title} />
            </div>
        </div>
    );
};

export default TeaserCard;
