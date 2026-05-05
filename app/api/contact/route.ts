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
      subject: `🚀 New Enquiry from ${name} — ${service || "General"}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Contact Form Submission</title>
          </head>
          <body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Segoe UI',Roboto,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background:linear-gradient(135deg,#3b82f6,#1d4ed8);padding:32px 40px;text-align:center;">
                        <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">
                          🚀 New Contact Form Submission
                        </h1>
                        <p style="margin:8px 0 0;color:#bfdbfe;font-size:14px;">Nexo Tech IT — nexotechit.com</p>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding:32px 40px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          
                          <tr>
                            <td style="padding-bottom:24px;">
                              <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;">Full Name</p>
                              <p style="margin:0;font-size:16px;color:#0f172a;font-weight:600;">${name}</p>
                            </td>
                          </tr>
                          
                          <tr>
                            <td style="padding-bottom:24px;">
                              <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;">Email Address</p>
                              <p style="margin:0;font-size:16px;color:#3b82f6;">${email}</p>
                            </td>
                          </tr>

                          ${business ? `
                          <tr>
                            <td style="padding-bottom:24px;">
                              <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;">Business / Shop</p>
                              <p style="margin:0;font-size:16px;color:#0f172a;">${business}</p>
                            </td>
                          </tr>` : ""}

                          ${phone ? `
                          <tr>
                            <td style="padding-bottom:24px;">
                              <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;">WhatsApp / Phone</p>
                              <p style="margin:0;font-size:16px;color:#0f172a;">${phone}</p>
                            </td>
                          </tr>` : ""}

                          <tr>
                            <td style="padding-bottom:24px;">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="48%" style="padding-right:8px;">
                                    <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;">Service Needed</p>
                                    <p style="margin:0;font-size:15px;color:#0f172a;">${service || "Not specified"}</p>
                                  </td>
                                  <td width="48%" style="padding-left:8px;">
                                    <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;">Timeline</p>
                                    <p style="margin:0;font-size:15px;color:#0f172a;">${timeline || "Not specified"}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;">Their Message</p>
                              <div style="background:#f8fafc;border-left:4px solid #3b82f6;border-radius:8px;padding:16px 20px;">
                                <p style="margin:0;font-size:15px;color:#334155;line-height:1.7;">${message.replace(/\n/g, "<br/>")}</p>
                              </div>
                            </td>
                          </tr>

                        </table>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background:#f8fafc;padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0;">
                        <p style="margin:0;font-size:12px;color:#94a3b8;">Nexo Tech IT · Sylhet, Bangladesh · nexotechit.com</p>
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