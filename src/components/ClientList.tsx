import type { Client } from "../types/client";
import { ClientCard } from "./ClientCard";

type ClientListProps = {
  clients: Client[];
  onDeleteClient: (clientId: string) => void;
};

export function ClientList({ clients, onDeleteClient }: ClientListProps) {
  return (
    <section>
      <h2>Clients</h2>

      <div className="client-grid">
        {clients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onDeleteClient={onDeleteClient}
          />
        ))}
      </div>
    </section>
  );
}