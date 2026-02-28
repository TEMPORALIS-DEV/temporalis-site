// app/strategies/[id]/page.tsx

type SearchParams = Record<string, string | string[] | undefined>;

export default async function StrategiesPage(props: {
  params: { id: string };
  searchParams?: SearchParams | Promise<SearchParams>;
}) {
  const { params } = props;

  // Next.js 16: searchParams can be a Promise
  const sp = props.searchParams ? await props.searchParams : {};
  const q = (sp.q as string) || "";
  const category = (sp.category as string) || "All";
  const risk = (sp.risk as string) || "All";
  const chain = (sp.chain as string) || "All";

  // TODO: replace with your real UI content
  return (
    <main style={{ padding: 24 }}>
      <h1>Strategy: {params.id}</h1>
      <p>q: {q}</p>
      <p>category: {category}</p>
      <p>risk: {risk}</p>
      <p>chain: {chain}</p>
    </main>
  );
}
