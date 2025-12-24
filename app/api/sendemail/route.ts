import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL API ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
