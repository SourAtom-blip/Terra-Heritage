import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Lead from "@/models/Lead";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIRED_FIELDS = ["firstName", "lastName", "email", "propertyAddress", "acreage"];

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!body[field] || String(body[field]).trim() === "") {
      return NextResponse.json({ error: `${field} is required.` }, { status: 400 });
    }
  }

  if (!EMAIL_RE.test(body.email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  try {
    await connectToDatabase();

    const lead = await Lead.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone || "",
      propertyAddress: body.propertyAddress,
      apn: body.apn || "",
      acreage: body.acreage,
      reason: body.reason || "",
      details: body.details || "",
    });

    return NextResponse.json({ id: lead._id, message: "Lead submitted successfully." }, { status: 201 });
  } catch (err) {
    console.error("Failed to save lead:", err);
    return NextResponse.json(
      { error: "We couldn't save your submission right now. Please try again shortly." },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  const authHeader = request.headers.get("authorization");
  const adminKey = process.env.ADMIN_API_KEY;

  if (!adminKey || authHeader !== `Bearer ${adminKey}`) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    await connectToDatabase();
    const leads = await Lead.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ leads });
  } catch (err) {
    console.error("Failed to fetch leads:", err);
    return NextResponse.json({ error: "Failed to fetch leads." }, { status: 500 });
  }
}
