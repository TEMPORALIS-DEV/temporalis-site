import Link from "next/link";
import { STRATEGIES } from "@/lib/strategies";

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export default function StrategiesPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const q = (searchParams.q as string) || "";
  const category = (searchParams.category as string) || "All";
  const risk = (searchParams.risk as string) || "All";
  const chain = (searchParams.chain as string) || "All";
  const sort = (searchParams.sort as string) || "new";

  const categories = ["All", ...uniq(STRATEGIES.map((s) => s.category))];
  const risks = ["All", "Low", "Medium", "High"];
  const chains = ["All", ...uniq(STRATEGIES.flatMap((s) => s.chains || []))];

  const filtered = STRATEGIES.filter((s) => {
    const text = `${s.name} ${s.summary} ${s.tags.join(" ")} ${s.id}`.toLowerCase();

    const okQ = !q || text.includes(q.toLowerCase());
    const okC = category === "All" || s.category === category;
    const okR = risk === "All" || s.risk === risk;
    const okChain = chain === "All" || (s.chains || []).includes(chain as any);

    return okQ && okC && okR && okChain;
  }).sort((a, b) => {
    if (sort === "score") return b.scorePos2 - a.scorePos2;
    return b.lastUpdated.localeCompare(a.lastUpdated);
  });

  return (
    <section className="section">
      <div className="panel hero-panel">
        <h1 className="h1">Strategies & Ratings</h1>
        <p className="sub">
          Proof-of-Strategy (PoS²): structured transparency for strategy logic, risk profile,
          and performance signals.
        </p>
      </div>

      <div className="panel filters">
        <form className="filters-grid">
          <div className="field">
            <label>Search</label>
            <input name="q" defaultValue={q} placeholder="Search strategies..." />
          </div>

          <div className="field">
            <label>Category</label>
            <select name="category" defaultValue={category}>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Risk</label>
            <select name="risk" defaultValue={risk}>
              {risks.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Chain</label>
            <select name="chain" defaultValue={chain}>
              {chains.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Sort</label>
            <select name="sort" defaultValue={sort}>
              <option value="new">New</option>
              <option value="score">PoS² Score</option>
            </select>
          </div>

          <div className="field actions">
            <button className="btn btn-primary">Apply</button>
            <Link className="btn btn-ghost" href="/strategies">
              Reset
            </Link>
          </div>
        </form>
      </div>

      <div className="grid-cards">
        {filtered.map((s) => (
          <div key={s.id} className="card">
            <div className="card-top">
              <div>
                <div className="card-title">{s.name}</div>
                <div className="card-sub">{s.summary}</div>
              </div>
            </div>

            <div className="tagrow">
              <span className="tag">{s.category}</span>
              {(s.chains || []).map((c) => (
                <span key={c} className="tag tag-2">
                  {c}
                </span>
              ))}
              <span className="tag tag-3">Est. {s.estRangeApr}</span>
              <span className="tag tag-4">PoS² {s.scorePos2}</span>
            </div>

            <div className="chips">
              {s.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="card-bottom">
              <div className="muted small">Last updated: {s.lastUpdated}</div>
              <Link className="link" href={`/strategies/${s.id}`}>
                View →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
