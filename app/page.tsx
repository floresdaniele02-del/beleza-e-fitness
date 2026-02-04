"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLB/search?q=creatina&limit=12")
      .then(res => res.json())
      .then(data => setProdutos(data.results || []));
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>🔥 Promoções de Beleza e Fitness</h1>

      {produtos.map((p: any) => (
        <div key={p.id} style={{ marginBottom: 20 }}>
          <img src={p.thumbnail} width={150} />
          <h3>{p.title}</h3>
          <p>R$ {p.price}</p>
          <a href={p.permalink} target="_blank">Ver produto</a>
        </div>
      ))}
    </main>
  );
}


