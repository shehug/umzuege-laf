import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
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
      return new Response(
        JSON.stringify({ success: false, message: "Bitte mindestens Name und Telefonnummer angeben." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER || "info@umzuege-laf.de";
    const smtpPass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_TO || "info@umzuege-laf.de";
    const sender = process.env.SMTP_FROM || `"Umzüge LAF" <${smtpUser}>`;

    if (!smtpPass) {
      console.error("SMTP_PASS ist nicht in der Umgebung konfiguriert.");
      return new Response(
        JSON.stringify({
          success: false,
          message: "E-Mail-Dienst vorübergehend nicht konfiguriert. Bitte rufen Sie uns direkt unter 0162 900 75 65 an.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const safeName = escapeHtml(String(name));
    const safePhone = escapeHtml(String(phone));
    const safeEmail = email ? escapeHtml(String(email)) : "";
    const safeRequestType = requestType ? escapeHtml(String(requestType)) : "Allgemein";
    const safeStartLocation = startLocation ? escapeHtml(String(startLocation)) : "Nicht angegeben";
    const safeTargetLocation = targetLocation ? escapeHtml(String(targetLocation)) : "Nicht angegeben";
    const safeMessage = message ? escapeHtml(String(message)).replace(/\n/g, "<br />") : "Keine zusätzliche Nachricht angegeben.";

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
      subject: `Neue Umzugsanfrage: ${safeName} (${safeRequestType})`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0f172a; color: #ffffff; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 20px; color: #f59e0b;">Umzüge LAF - Neue Website-Anfrage</h1>
          </div>
          <div style="padding: 24px; background-color: #ffffff;">
            <h2 style="font-size: 16px; margin-top: 0; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">Kundendaten</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Name:</td><td>${safeName}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Telefon:</td><td><a href="tel:${safePhone}" style="color: #0f172a; font-weight: bold;">${safePhone}</a></td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">E-Mail:</td><td>${safeEmail ? `<a href="mailto:${safeEmail}">${safeEmail}</a>` : "Nicht angegeben"}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Leistungsart:</td><td>${safeRequestType}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Startadresse:</td><td>${safeStartLocation}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Zieladresse:</td><td>${safeTargetLocation}</td></tr>
            </table>

            <h2 style="font-size: 16px; margin-top: 20px; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">Nachricht / Details</h2>
            <p style="background-color: #f8fafc; padding: 12px; border-radius: 6px; font-size: 14px; border: 1px solid #e2e8f0;">
              ${safeMessage}
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

    return new Response(
      JSON.stringify({
        success: true,
        message: "Anfrage wurde erfolgreich übermittelt.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Kontaktformular Fehler:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Die Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns direkt unter 0162 900 75 65 an.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
