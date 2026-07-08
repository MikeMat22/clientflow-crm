import type { Client } from "../types/client";

export function calculateClientStats(clients: Client[]) {
  const totalClients = clients.length;

  const activeClients = clients.filter(
    (client) => client.status === "active"
  ).length;

  const monthlyRevenue = clients.reduce(
    (total, client) => total + client.monthlyValue,
    0
  );

  const goalProgress = activeClients;

  return {
    totalClients,
    activeClients,
    monthlyRevenue,
    goalProgress,
  };
}