import StrategyDrilldown from "../../../../components/sections/dashboard/StrategyDrilldown";

export default function StrategyPage({
  params,
}: {
  params: { id: string };
}) {
  return <StrategyDrilldown id={params.id} />;
}