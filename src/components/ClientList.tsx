import type { Client, ClientStatus } from "../types/client";
import { ClientCard } from "./ClientCard";

type FilterStatus = "all" | ClientStatus;

type ClientListProps = {
  clients: Client[];
  filterStatus: FilterStatus;
  onFilterStatusChange: (status: FilterStatus) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onDeleteClient: (clientId: string) => void;
  onEditClient: (client: Client) => void;
};

export function ClientList({
  clients,
  filterStatus,
  onFilterStatusChange,
  searchQuery,
  onSearchQueryChange,
  onDeleteClient,
  onEditClient,
}: ClientListProps) {
  return (
    <section>
      <div className="section-header">
        <div>
          <h2>Clients</h2>
          <p className="section-subtitle">{clients.length} clients shown</p>
        </div>

        <div className="client-controls">
          <input
            className="search-input"
            type="search"
            placeholder="Search clients..."
            value={searchQuery}
            onChange={(event) => onSearchQueryChange(event.target.value)}
          />

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
      </div>

      {clients.length === 0 ? (
        <p className="empty-state">No clients found.</p>
      ) : (
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
      )}
    </section>
  );
}