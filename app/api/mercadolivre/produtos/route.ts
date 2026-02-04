import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.mercadolibre.com/users/me",
      {
        headers: {
          Authorization: `Bearer ${process.env.ML_ACCESS_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Erro ML" }, { status: 500 });
  }
}
