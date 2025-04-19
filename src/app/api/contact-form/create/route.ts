import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    if (!email || !name || !message) {
        return NextResponse.json({ error: "Email, name, and message are required" }, { status: 400 });
    }

    try {
        const contactFormSubmission = await prisma.contactFormSubmission.create({
            data: { name: name, email: email, message: message },
        });

        return NextResponse.json(contactFormSubmission, { status: 201 });
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return NextResponse.json({ error: "Error submitting contact form" }, { status: 500 });
    }
}