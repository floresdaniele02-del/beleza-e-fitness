export default async function Home() {
  const res = await fetch(
    "https://api.mercadolibre.com/sites/MLB/search?q=suplemento&limit=12",
    { cache: "no-store" }
  );

  const produtos = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <h1>🔥 Promoções de Beleza e Fitness</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 20,
        marginTop: 20
      }}>
        {produtos.results.map((p: any) => (
          <div key={p.id} style={{
            border: "1px solid #ddd",
            borderRadius: 10,
            padding: 10
          }}>
            <img src={p.thumbnail} width="100%" />
            <h3>{p.title}</h3>
            <p>R$ {p.price}</p>
            <a href={p.permalink} target="_blank">Ver produto</a>
          </div>
        ))}
      </div>
    </main>
  );
}
