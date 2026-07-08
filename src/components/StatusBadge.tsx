import type { ClientStatus } from "../types/client";

type StatusBadgeProps = {
  status: ClientStatus;
};

const statusLabels: Record<ClientStatus, string> = {
  lead: "Lead",
  contacted: "Contacted",
  active: "Active",
  lost: "Lost",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-badge--${status}`}>
      {statusLabels[status]}
    </span>
  );
}