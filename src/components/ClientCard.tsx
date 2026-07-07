import type { Client } from "../types/client";

type ClientCardProps = {
  client: Client;
};

export function ClientCard({ client }: ClientCardProps) {
  return (
    <article>
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
        <strong>Status:</strong> {client.status}
      </p>

      <p>
        <strong>Monthly Value:</strong> £{client.monthlyValue}
      </p>

      <p>
        <strong>Next Follow-up:</strong> {client.nextFollowUpDate}
      </p>

      <p>{client.notes}</p>
    </article>
  );
}