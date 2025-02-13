'use client';
import React from 'react';
import { Badge } from "@/components/ui/badge";


interface PriceBadgeProps {
    price: number | null;
}

const PriceBadge: React.FC<PriceBadgeProps> = ({ price }) => {

    return (
        <Badge variant="secondary" className="text-md px-1.5 py-1.5">
            {price === null ? (
                <div className="w-6 h-6 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
            ) : (
                `${price % 1 === 0 ? price.toFixed(0) : price.toFixed(2)}zł`
            )}
        </Badge>
    );
};

export default PriceBadge;