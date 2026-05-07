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

    if (!name || !phone || !message) {
      return Response.json(
        { success: false, message: "Bitte Name, Telefon und Nachricht ausfüllen." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_TO,
      replyTo: email || process.env.SMTP_USER,
      subject: `Neue Anfrage über die Website: ${requestType || "Kontaktanfrage"}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Neue Anfrage über die Website</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>E-Mail:</strong> ${email || "Nicht angegeben"}</p>
          <p><strong>Anfrageart:</strong> ${requestType || "Nicht angegeben"}</p>
          <p><strong>Startort:</strong> ${startLocation || "Nicht angegeben"}</p>
          <p><strong>Zielort:</strong> ${targetLocation || "Nicht angegeben"}</p>

          <hr />

          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
      text: `
Neue Anfrage über die Website

Name: ${name}
Telefon: ${phone}
E-Mail: ${email || "Nicht angegeben"}
Anfrageart: ${requestType || "Nicht angegeben"}
Startort: ${startLocation || "Nicht angegeben"}
Zielort: ${targetLocation || "Nicht angegeben"}

Nachricht:
${message}
      `,
    });

    return Response.json({
      success: true,
      message: "Anfrage wurde erfolgreich gesendet.",
    });
  } catch (error) {
    console.error("Kontaktformular Fehler:", error);

    return Response.json(
      {
        success: false,
        message: "Die Anfrage konnte nicht gesendet werden.",
      },
      { status: 500 }
    );
  }
}
