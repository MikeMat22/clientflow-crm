import { useEffect, useState } from "react";
import type { Client, ClientStatus } from "../types/client";

type ClientFormProps = {
  onAddClient: (client: Client) => void;
  editingClient: Client | null;
  onUpdateClient: (client: Client) => void;
  onCancelEdit: () => void;
};

const initialFormData = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  status: "lead" as ClientStatus,
  monthlyValue: "200",
  nextFollowUpDate: "",
  notes: "",
};

export function ClientForm({
  onAddClient,
  editingClient,
  onUpdateClient,
  onCancelEdit,
}: ClientFormProps) {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (editingClient) {
      setFormData({
        companyName: editingClient.companyName,
        contactName: editingClient.contactName,
        email: editingClient.email,
        phone: editingClient.phone,
        status: editingClient.status,
        monthlyValue: String(editingClient.monthlyValue),
        nextFollowUpDate: editingClient.nextFollowUpDate,
        notes: editingClient.notes,
      });
    }
  }, [editingClient]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (editingClient) {
      const updatedClient: Client = {
        ...editingClient,
        companyName: formData.companyName,
        contactName: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        status: formData.status,
        monthlyValue: Number(formData.monthlyValue),
        nextFollowUpDate: formData.nextFollowUpDate,
        notes: formData.notes,
      };

      onUpdateClient(updatedClient);
      setFormData(initialFormData);
      return;
    }

    const newClient: Client = {
      id: crypto.randomUUID(),
      companyName: formData.companyName,
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      status: formData.status,
      monthlyValue: Number(formData.monthlyValue),
      nextFollowUpDate: formData.nextFollowUpDate,
      notes: formData.notes,
      createdAt: new Date().toISOString(),
    };

    onAddClient(newClient);
    setFormData(initialFormData);
  }

  function handleCancelEdit() {
    onCancelEdit();
    setFormData(initialFormData);
  }

  return (
    <section className="form-section">
      <h2>{editingClient ? "Edit Client" : "Add New Client"}</h2>

      <form className="client-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company name"
          value={formData.companyName}
          onChange={(event) =>
            setFormData({ ...formData, companyName: event.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Contact name"
          value={formData.contactName}
          onChange={(event) =>
            setFormData({ ...formData, contactName: event.target.value })
          }
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />

        <select
          value={formData.status}
          onChange={(event) =>
            setFormData({
              ...formData,
              status: event.target.value as ClientStatus,
            })
          }
        >
          <option value="lead">Lead</option>
          <option value="contacted">Contacted</option>
          <option value="active">Active</option>
          <option value="lost">Lost</option>
        </select>

        <input
          type="number"
          placeholder="Monthly value"
          value={formData.monthlyValue}
          onChange={(event) =>
            setFormData({ ...formData, monthlyValue: event.target.value })
          }
          required
        />

        <input
          type="date"
          value={formData.nextFollowUpDate}
          onChange={(event) =>
            setFormData({ ...formData, nextFollowUpDate: event.target.value })
          }
        />

        <textarea
          placeholder="Notes"
          value={formData.notes}
          onChange={(event) =>
            setFormData({ ...formData, notes: event.target.value })
          }
        />

        <button type="submit">
          {editingClient ? "Save Changes" : "Add Client"}
        </button>

        {editingClient && (
          <button
            className="cancel-button"
            type="button"
            onClick={handleCancelEdit}
          >
            Cancel Edit
          </button>
        )}
      </form>
    </section>
  );
}