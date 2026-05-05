import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(request: NextRequest) {

  try {
    const body = await request.json();
    const { name, email, business, phone, service, timeline, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // --- Send Email to You (contact@nexotechit.com) ---
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_RECEIVER_EMAIL || "contact@nexotechit.com",
      replyTo: email, // 💡 Crucial: This lets you click "Reply" in your email client to respond to the customer directly.
      subject: `New Business Enquiry from ${name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry</title>
</head>

<body style="margin:0;padding:0;background:#f1f5f9;font-family:Inter,Segoe UI,Roboto,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr>
      <td align="center">

        <!-- Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;">

          <!-- Header -->
          <tr>
            <td style="background:#3883F0;padding:24px 32px;">
              <h2 style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">
                New Client Enquiry
              </h2>
              <p style="margin:6px 0 0;color:#dbeafe;font-size:13px;">
                Nexotech IT • nexotechit.com
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">

              <!-- Info Table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">

                <tr>
                  <td style="padding-bottom:16px;">
                    <strong style="display:block;font-size:12px;color:#64748b;">FULL NAME</strong>
                    <span style="font-size:15px;color:#0f172a;">${name}</span>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:16px;">
                    <strong style="display:block;font-size:12px;color:#64748b;">EMAIL</strong>
                    <span style="font-size:15px;color:#3883F0;">${email}</span>
                  </td>
                </tr>

                ${phone ? `
                <tr>
                  <td style="padding-bottom:16px;">
                    <strong style="display:block;font-size:12px;color:#64748b;">PHONE</strong>
                    <span style="font-size:15px;color:#0f172a;">${phone}</span>
                  </td>
                </tr>` : ""}

                ${business ? `
                <tr>
                  <td style="padding-bottom:16px;">
                    <strong style="display:block;font-size:12px;color:#64748b;">BUSINESS</strong>
                    <span style="font-size:15px;color:#0f172a;">${business}</span>
                  </td>
                </tr>` : ""}

              </table>

              <!-- Service + Timeline -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td width="50%" style="padding-right:8px;">
                    <strong style="display:block;font-size:12px;color:#64748b;">SERVICE</strong>
                    <span style="font-size:14px;color:#0f172a;">${service || "Not specified"}</span>
                  </td>
                  <td width="50%" style="padding-left:8px;">
                    <strong style="display:block;font-size:12px;color:#64748b;">TIMELINE</strong>
                    <span style="font-size:14px;color:#0f172a;">${timeline || "Not specified"}</span>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="border:1px solid #e2e8f0;border-radius:10px;padding:16px;background:#f8fafc;">
                <strong style="display:block;font-size:12px;color:#64748b;margin-bottom:6px;">
                  MESSAGE
                </strong>
                <p style="margin:0;font-size:14px;color:#334155;line-height:1.6;">
                  ${message.replace(/\n/g, "<br/>")}
                </p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                Nexotech IT · Sylhet, Bangladesh
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`,
    });

    // Handle Resend API errors
    if (error) {
      console.error("[Resend API Error]", error);
      return NextResponse.json(
        { error: "Failed to send the email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}