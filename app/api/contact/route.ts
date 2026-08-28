import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      requestType,
      startLocation,
      targetLocation,
      message,
    } = body;

    if (!name || !phone) {
      return Response.json(
        { success: false, message: "Bitte mindestens Name und Telefonnummer angeben." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER || "info@umzuege-laf.de";
    const smtpPass = process.env.SMTP_PASS || "8xP*tJ,>U2*#5;jr";
    const recipient = process.env.CONTACT_TO || "info@umzuege-laf.de";
    const sender = process.env.SMTP_FROM || `"Umzüge LAF" <${smtpUser}>`;

    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: sender,
        to: recipient,
        replyTo: email || smtpUser,
        subject: `Neue Umzugsanfrage: ${name} (${requestType || "Allgemein"})`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0f172a; color: #ffffff; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 20px; color: #f59e0b;">Umzüge LAF - Neue Website-Anfrage</h1>
            </div>
            <div style="padding: 24px; background-color: #ffffff;">
              <h2 style="font-size: 16px; margin-top: 0; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">Kundendaten</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Name:</td><td>${name}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Telefon:</td><td><a href="tel:${phone}" style="color: #0f172a; font-weight: bold;">${phone}</a></td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">E-Mail:</td><td>${email ? `<a href="mailto:${email}">${email}</a>` : "Nicht angegeben"}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Leistungsart:</td><td>${requestType || "Nicht angegeben"}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Startadresse:</td><td>${startLocation || "Nicht angegeben"}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Zieladresse:</td><td>${targetLocation || "Nicht angegeben"}</td></tr>
              </table>

              <h2 style="font-size: 16px; margin-top: 20px; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">Nachricht / Details</h2>
              <p style="background-color: #f8fafc; padding: 12px; border-radius: 6px; font-size: 14px; border: 1px solid #e2e8f0;">
                ${(message || "Keine zusätzliche Nachricht angegeben.").replace(/\n/g, "<br />")}
              </p>
            </div>
            <div style="background-color: #f8fafc; padding: 12px 24px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
              Gesendet über das Kontaktformular von <a href="https://umzuegelandshut.de" style="color: #0f172a;">umzuegelandshut.de</a>
            </div>
          </div>
        `,
        text: `
Neue Umzugsanfrage über umzuegelandshut.de

Name: ${name}
Telefon: ${phone}
E-Mail: ${email || "Nicht angegeben"}
Leistungsart: ${requestType || "Nicht angegeben"}
Startadresse: ${startLocation || "Nicht angegeben"}
Zieladresse: ${targetLocation || "Nicht angegeben"}

Nachricht:
${message || "Keine Angabe"}
        `,
      });
    }

    return Response.json({
      success: true,
      message: "Anfrage wurde erfolgreich übermittelt.",
    });
  } catch (error) {
    console.error("Kontaktformular Fehler:", error);

    return Response.json(
      {
        success: false,
        message: "Die Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns direkt unter 0162 900 75 65 an.",
      },
      { status: 500 }
    );
  }
}
