// app/strategies/[id]/page.tsx

type SearchParams = Record<string, string | string[] | undefined>;

export default async function StrategiesPage(props: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<SearchParams>;
}) {
  const { id } = await props.params;
  const sp = props.searchParams ? await props.searchParams : {};

  const q = (sp.q as string) || "";
  const category = (sp.category as string) || "All";
  const risk = (sp.risk as string) || "All";
  const chain = (sp.chain as string) || "All";

  return (
    <main style={{ padding: 24 }}>
      <h1>Strategy: {id}</h1>
      <p>q: {q}</p>
      <p>category: {category}</p>
      <p>risk: {risk}</p>
      <p>chain: {chain}</p>
    </main>
  );
}