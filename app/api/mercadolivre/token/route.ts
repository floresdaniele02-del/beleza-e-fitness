import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  const response = await fetch("https://api.mercadolibre.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "authorization_code",
      client_id: process.env.ML_APP_ID,
      client_secret: process.env.ML_SECRET_KEY,
      code,
      redirect_uri: "https://beleza-e-fitness.vercel.app/auth"
    })
  });

  const data = await response.json();
  return NextResponse.json(data);
}
