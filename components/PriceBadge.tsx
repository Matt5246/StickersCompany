'use client';
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface PriceBadgeProps {
    price: number | null;
    discount?: number | null;
}

const PriceBadge: React.FC<PriceBadgeProps> = ({
    price,
    discount
}) => {
    return (
        <div className="relative inline-block">
            <Badge variant="secondary" className="text-md px-3 py-1.5 relative">
                {price === null ? (
                    <div className="w-6 h-6 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
                ) : (
                    `${price % 1 === 0 ? price.toFixed(0) : price.toFixed(2)}zł`
                )}

                {discount !== null && discount !== 0 && discount && (
                    <Badge
                        variant="destructive"
                        className="absolute -top-2 -right-2 text-xs px-1 py-0.3 rounded-full"
                    >
                        -{discount}%
                    </Badge>
                )}
            </Badge>
        </div>
    );
};

export default PriceBadge;