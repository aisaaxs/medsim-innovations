import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

export async function GET() {
	try {
		const products = await prisma.product.findMany();

		return NextResponse.json(products, { status: 200 });
	} catch(error) {
		console.error("Error fetching products: ", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}