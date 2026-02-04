import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.mercadolibre.com/sites/MLB/search?q=creatina&limit=12"
,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    return NextResponse.json(data.results || []);
  } catch (err) {
    return NextResponse.json({ error: "Falha ao conectar no ML" }, { status: 500 });
  }
}
