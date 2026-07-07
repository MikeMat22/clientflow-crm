import type { Client } from "../types/client";

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