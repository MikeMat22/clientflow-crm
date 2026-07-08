import type { Client } from "../types/client";
import { calculateClientStats } from "../utils/calculateClientStats";

type DashboardCardsProps = {
  clients: Client[];
};

export function DashboardCards({ clients }: DashboardCardsProps) {
  const { totalClients, activeClients, monthlyRevenue, goalProgress } =
    calculateClientStats(clients);

  return (
    <section>
      <h2>Dashboard</h2>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <p>Total Clients</p>
          <strong>{totalClients}</strong>
        </div>

        <div className="dashboard-card">
          <p>Active Clients</p>
          <strong>{activeClients}</strong>
        </div>

        <div className="dashboard-card">
          <p>Monthly Revenue</p>
          <strong>£{monthlyRevenue}</strong>
        </div>

        <div className="dashboard-card">
          <p>Goal Progress</p>
          <strong>{goalProgress} / 100</strong>
        </div>
      </div>
    </section>
  );
}