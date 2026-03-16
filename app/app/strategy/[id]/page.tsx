import StrategyDrilldown from "../../../../components/sections/dashboard/StrategyDrilldown";

export default async function StrategyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <StrategyDrilldown id={id} />;
}