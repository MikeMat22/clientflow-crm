import type { Client } from "../types/client";
import { ClientCard } from "./ClientCard";

type ClientListProps = {
  clients: Client[];
};

export function ClientList({ clients }: ClientListProps) {
  return (
    <section>
      <h2>Clients</h2>

      <div>
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </section>
  );
}