import type { Client } from "../types/client";

type ClientCardProps = {
  client: Client;
  onDeleteClient: (clientId: string) => void;
};

export function ClientCard({ client, onDeleteClient }: ClientCardProps) {
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
        <strong>Status:</strong>{" "}
        <span className="status">{client.status}</span>
      </p>

      <p>
        <strong>Monthly Value:</strong> £{client.monthlyValue}
      </p>

      <p>
        <strong>Next Follow-up:</strong> {client.nextFollowUpDate}
      </p>

      <p>{client.notes}</p>

      <button
        className="delete-button"
        type="button"
        onClick={() => onDeleteClient(client.id)}
      >
        Delete
      </button>
    </article>
  );
}