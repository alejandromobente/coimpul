export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { fname, lname, address, city, state, zip, email, phone, timeframe, services } = body;

    if (!fname || !lname || !email || !services) {
      return Response.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const apiKey = env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY no está configurada");
      return Response.json({ error: "Error de configuración del servidor" }, { status: 500 });
    }

    // RESEND_FROM_EMAIL debe ser una dirección de un dominio verificado en Resend.
    // Ejemplo: "COIMPUL Web <web@coimpul.com>"
    // Si no está configurada, usa el dominio de prueba de Resend (solo para testing).
    const fromEmail = env.RESEND_FROM_EMAIL || "COIMPUL Web <onboarding@resend.dev>";

    const html = `
      <h2 style="font-family:sans-serif;color:#333;">Nuevo contacto desde la web de COIMPUL</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;width:160px;">Nombre</td><td style="padding:8px;">${escHtml(fname)} ${escHtml(lname)}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${escHtml(email)}">${escHtml(email)}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Teléfono</td><td style="padding:8px;">${escHtml(phone || "—")}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:bold;">Dirección</td><td style="padding:8px;">${escHtml(address || "—")}, ${escHtml(city || "—")}, ${escHtml(state || "—")} ${escHtml(zip || "")}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Plazo deseado</td><td style="padding:8px;">${escHtml(timeframe || "—")}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:bold;vertical-align:top;">Servicios solicitados</td><td style="padding:8px;white-space:pre-wrap;">${escHtml(services)}</td></tr>
      </table>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [env.CONTACT_TO_EMAIL || "coimpul@coimpul.com"],
        reply_to: email,
        subject: `Nuevo contacto web: ${fname} ${lname}`,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API error:", errText);
      return Response.json({ error: "Error al enviar el email" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
