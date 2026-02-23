import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Log the enquiry (replace with email service or database in production)
    console.log("New contact enquiry:", {
      name,
      email,
      phone: phone || "Not provided",
      projectType: projectType || "Not specified",
      message,
      timestamp: new Date().toISOString(),
    });

    // In production, you would integrate with:
    // - An email service (SendGrid, Resend, etc.)
    // - A database (Prisma, Supabase, etc.)
    // - A CRM (HubSpot, etc.)

    return NextResponse.json(
      { success: true, message: "Enquiry received successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
