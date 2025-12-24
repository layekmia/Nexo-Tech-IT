import { NextResponse } from "next/server";
import { Resend } from "resend";
import { AdminContactEmail } from "@/emails/AdminContactEmail";
import { ClientAutoReplyEmail } from "@/emails/ClientAutoReplyEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    // 1️⃣ Send email to YOU (Admin)
    await resend.emails.send({
      from: "NexoTech IT <no-reply@nexotechit.com>",
      to: "contact@nexotechit.com",
      subject: `New Contact Message — ${firstName} ${lastName}`,
      html: AdminContactEmail({
        firstName,
        lastName,
        email,
        phone,
        message,
      }),
    });

    // 2️⃣ Auto-reply to CLIENT
    await resend.emails.send({
      from: "NexoTech IT <contact@nexotechit.com>",
      to: email,
      subject: "We received your message — NexoTech IT",
      html: ClientAutoReplyEmail({ firstName }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL API ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
