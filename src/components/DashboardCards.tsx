import type { Client } from "../types/client";

type DashboardCardsProps = {
  clients: Client[];
};

export function DashboardCards({ clients }: DashboardCardsProps) {
  const totalClients = clients.length;
  const activeClients = clients.filter((client) => client.status === "active").length;
  const monthlyRevenue = clients.reduce(
    (total, client) => total + client.monthlyValue,
    0
  );

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
          <strong>{activeClients} / 100</strong>
        </div>
      </div>
    </section>
  );
}