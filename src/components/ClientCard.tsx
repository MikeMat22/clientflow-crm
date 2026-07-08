import type { Client } from "../types/client";
import { formatCurrency } from "../utils/formatCurrency";
import { StatusBadge } from "./StatusBadge";

type ClientCardProps = {
  client: Client;
  onDeleteClient: (clientId: string) => void;
  onEditClient: (client: Client) => void;
};

export function ClientCard({
  client,
  onDeleteClient,
  onEditClient,
}: ClientCardProps) {
  return (
    <article className="client-card">
      <h3>{client.companyName}</h3>

      <p>
        <strong>Contact:</strong> {client.contactName}
      </p>

      <p>
        <strong>Email:</strong> {client.email}
      </p>

      <p>
        <strong>Phone:</strong> {client.phone}
      </p>

      <p>
        <strong>Status:</strong> <StatusBadge status={client.status} />
      </p>

      <p>
        <strong>Monthly Value:</strong> {formatCurrency(client.monthlyValue)}
      </p>

      <p>
        <strong>Next Follow-up:</strong> {client.nextFollowUpDate}
      </p>

      <p>{client.notes}</p>

      <div className="card-actions">
        <button
          className="edit-button"
          type="button"
          onClick={() => onEditClient(client)}
        >
          Edit
        </button>

        <button
          className="delete-button"
          type="button"
          onClick={() => onDeleteClient(client.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}