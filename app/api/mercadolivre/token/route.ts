import { NextResponse } from "next/server";

export async function GET() {

  const response = await fetch("https://api.mercadolibre.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: process.env.ML_CLIENT_ID!,
      client_secret: process.env.ML_CLIENT_SECRET!,
      code: process.env.ML_CODE!,
      redirect_uri: "https://beleza-e-fitness.vercel.app/auth",
    }),
  });

  const data = await response.json();

  return NextResponse.json(data);
}
