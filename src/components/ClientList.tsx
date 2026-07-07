import type { Client, ClientStatus } from "../types/client";
import { ClientCard } from "./ClientCard";

type FilterStatus = "all" | ClientStatus;

type ClientListProps = {
  clients: Client[];
  filterStatus: FilterStatus;
  onFilterStatusChange: (status: FilterStatus) => void;
  onDeleteClient: (clientId: string) => void;
  onEditClient: (client: Client) => void;
};

export function ClientList({
  clients,
  filterStatus,
  onFilterStatusChange,
  onDeleteClient,
  onEditClient,
}: ClientListProps) {
  return (
    <section>
      <div className="section-header">
        <h2>Clients</h2>

        <select
          className="status-filter"
          value={filterStatus}
          onChange={(event) =>
            onFilterStatusChange(event.target.value as FilterStatus)
          }
        >
          <option value="all">All</option>
          <option value="lead">Lead</option>
          <option value="contacted">Contacted</option>
          <option value="active">Active</option>
          <option value="lost">Lost</option>
        </select>
      </div>

      <div className="client-grid">
        {clients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onDeleteClient={onDeleteClient}
            onEditClient={onEditClient}
          />
        ))}
      </div>
    </section>
  );
}