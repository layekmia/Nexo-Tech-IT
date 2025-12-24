type AdminContactEmailProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
};

export function AdminContactEmail({
  firstName,
  lastName,
  email,
  phone,
  message,
}: AdminContactEmailProps) {
  return `
      <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:24px">
        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:8px;padding:24px">
          
          <h2 style="color:#111827;margin-bottom:16px">
            📩 New Contact Message
          </h2>
  
          <p style="color:#374151;font-size:15px">
            You have received a new message from your website contact form.
          </p>
  
          <hr style="margin:20px 0"/>
  
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
  
          <div style="margin-top:16px">
            <p><strong>Message:</strong></p>
            <p style="background:#f3f4f6;padding:12px;border-radius:6px;color:#111827">
              ${message}
            </p>
          </div>
  
          <hr style="margin:24px 0"/>
  
          <p style="font-size:13px;color:#6b7280">
            Sent from <strong>NexoTech IT</strong> contact form.
          </p>
  
        </div>
      </div>
    `;
}
