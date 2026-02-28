import Link from "next/link";
import { STRATEGIES } from "@/lib/strategies";

export default function RatingsPage() {
  const ranked = [...STRATEGIES].sort((a, b) => b.scorePos2 - a.scorePos2);

  return (
    <section className="section">
      <h1 className="h1">Ratings</h1>
      <p className="sub">
        A clear ranking of DeFi strategies — not hype, but proof-based signals.
      </p>

      <div className="panel table">
        <div className="table-head">
          <div>#</div>
          <div>Strategy</div>
          <div>Risk</div>
          <div>PoS²</div>
        </div>

        {ranked.map((s, idx) => (
          <div key={s.id} className="table-row">
            <div>{idx + 1}</div>
            <div>
              <div className="row-title">{s.name}</div>
              <div className="muted small">{s.id}</div>
            </div>
            <div>
              <span className={`badge badge-${s.risk.toLowerCase()}`}>{s.risk}</span>
            </div>
            <div className="row-score">
              {s.scorePos2}{" "}
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