import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const { size, quantity } = await req.json();

        // Define price brackets for different sizes
        const priceMap: Record<string, number[]> = {
            small: [3, 2.5, 2, 1.4, 1.2], // 0-9, 10-39, 40-79, 80+
            medium: [3.5, 3, 2.7],
            large: [8, 7, 6]
        };

        // Ensure the size exists
        if (!priceMap[size]) {
            return NextResponse.json({ error: "Invalid size" }, { status: 400 });
        }

        let basePrice: number;
        if (size === 'small') {
            if (quantity >= 100) basePrice = priceMap[size][4];
            else if (quantity >= 50) basePrice = priceMap[size][3];
            else if (quantity >= 25) basePrice = priceMap[size][2];
            else if (quantity >= 10) basePrice = priceMap[size][1];
            else basePrice = priceMap[size][0];
        } 
        else if (size === 'medium') {
            if (quantity >= 25) basePrice = priceMap[size][2];
            else if (quantity >= 10) basePrice = priceMap[size][1];
            else basePrice = priceMap[size][0];
        } 
        else { // large
            if (quantity >= 25) basePrice = priceMap[size][2];
            else if (quantity >= 10) basePrice = priceMap[size][1];
            else basePrice = priceMap[size][0];
        }
        
        const highestPrice = Math.max(...priceMap[size]);
        const discount = ((highestPrice - basePrice) / highestPrice) * 100;

        return NextResponse.json({ 
            basePrice,
            totalPrice: basePrice * quantity,
            discount: Math.round(discount)  // Rounded percentage
        });
        
    } catch (error) {
        return NextResponse.json({ error}, { status: 400 });
    }
}
