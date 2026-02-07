imimport { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.mercadolibre.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "authorization_code",
      client_id: process.env.ML_CLIENT_ID,
      client_secret: process.env.ML_CLIENT_SECRET,
      code: "TG-6987a110a6465c00011d89e8-630548155",
      redirect_uri: "https://beleza-e-fitness.vercel.app/auth"
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
