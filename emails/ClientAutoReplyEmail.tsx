type ClientAutoReplyEmailProps = {
    firstName: string;
  };
  
  export function ClientAutoReplyEmail({
    firstName,
  }: ClientAutoReplyEmailProps) {
    return `
      <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:24px">
        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:8px;padding:24px">
  
          <h2 style="color:#111827;margin-bottom:16px">
            Thank you for contacting NexoTech IT 🚀
          </h2>
  
          <p style="color:#374151;font-size:15px">
            Hi ${firstName},
          </p>
  
          <p style="color:#374151;font-size:15px">
            Thank you for reaching out to <strong>NexoTech IT</strong>.
            We’ve received your message and our team will review it shortly.
          </p>
  
          <p style="color:#374151;font-size:15px">
            One of our experts will get back to you within
            <strong>2 hours</strong>.
          </p>
  
          <div style="margin-top:20px">
            <p style="font-size:14px;color:#6b7280">
              If your inquiry is urgent, feel free to reply directly to this email.
            </p>
          </div>
  
          <hr style="margin:24px 0"/>
  
          <p style="font-size:14px;color:#111827">
            Best regards,<br/>
            <strong>NexoTech IT Team</strong>
          </p>
  
          <p style="font-size:12px;color:#6b7280">
            Building modern web solutions worldwide 🌍
          </p>
  
        </div>
      </div>
    `;
  }
  