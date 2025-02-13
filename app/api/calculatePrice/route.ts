import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { size, quantity } = await req.json();

        // Define price brackets for different sizes
        const priceMap: Record<string, number[]> = {
            small: [3, 1.9, 1.2, 0.3], // 0-9, 10-39, 40-79, 80+
            medium: [6, 3.8, 2.5, 0.6],
            large: [10, 6.35, 4, 1.6]
        };

        // Ensure the size exists
        if (!priceMap[size]) {
            return NextResponse.json({ error: "Invalid size" }, { status: 400 });
        }

        // Determine price bracket based on quantity
        let basePrice: number;
        if (quantity >= 80) basePrice = priceMap[size][3];
        else if (quantity >= 40) basePrice = priceMap[size][2];
        else if (quantity >= 10) basePrice = priceMap[size][1];
        else basePrice = priceMap[size][0];

        return NextResponse.json({ basePrice });
    } catch (error) {
        return NextResponse.json({ error}, { status: 400 });
    }
}
