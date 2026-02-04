import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.mercadolibre.com/sites/MLB/search?q=suplemento&limit=12",
      { cache: "no-store" }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "Erro ao buscar ML" }, { status: 500 });
    }

    const data = await res.json();

    return NextResponse.json(data.results || []);
  } catch (err) {
    return NextResponse.json({ error: "Falha interna" }, { status: 500 });
  }
}

