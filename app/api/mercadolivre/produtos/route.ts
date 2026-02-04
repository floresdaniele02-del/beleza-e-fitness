import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.mercadolibre.com/sites/MLB/search?q=suplemento&limit=12"
  );

  const data = await res.json();

  return NextResponse.json(data.results);
}

