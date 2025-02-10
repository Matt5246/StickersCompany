'use client';
import React from 'react';
import { Badge } from "@/components/ui/badge";


interface PriceBadgeProps {
    price: number | null;
}

const PriceBadge: React.FC<PriceBadgeProps> = ({ price }) => {

    return (
        <Badge variant="secondary" className="text-lg px-3 py-1">
            {price === null ? (
                <div className="w-6 h-6 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
            ) : (
                `${price.toFixed(2)} ZŁ`
            )}
        </Badge>
    );
};

export default PriceBadge;