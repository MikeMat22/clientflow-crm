import { useEffect, useState } from "react";
import { DashboardCards } from "./components/DashboardCards";
import { ClientList } from "./components/ClientList";
import { ClientForm } from "./components/ClientForm";
import { mockClients } from "./data/mockClients";
import type { Client, ClientStatus } from "./types/client";

const STORAGE_KEY = "clientflow-clients";

type FilterStatus = "all" | ClientStatus;

function App() {
  const [clients, setClients] = useState<Client[]>(() => {
    const savedClients = localStorage.getItem(STORAGE_KEY);

    if (savedClients) {
      return JSON.parse(savedClients);
    }

    return mockClients;
  });

  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingClient, setEditingClient] = useState<Client | null>(null);

  const filteredClients = clients.filter((client) => {
    const matchesStatus =
      filterStatus === "all" || client.status === filterStatus;

    const searchText = searchQuery.toLowerCase();

    const matchesSearch =
      client.companyName.toLowerCase().includes(searchText) ||
      client.contactName.toLowerCase().includes(searchText) ||
      client.email.toLowerCase().includes(searchText);

    return matchesStatus && matchesSearch;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
  }, [clients]);

  function handleAddClient(newClient: Client) {
    setClients((currentClients) => [newClient, ...currentClients]);
  }

  function handleDeleteClient(clientId: string) {
    setClients((currentClients) =>
      currentClients.filter((client) => client.id !== clientId)
    );

    if (editingClient?.id === clientId) {
      setEditingClient(null);
    }
  }

  function handleStartEdit(client: Client) {
    setEditingClient(client);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleUpdateClient(updatedClient: Client) {
    setClients((currentClients) =>
      currentClients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );

    setEditingClient(null);
  }

  function handleCancelEdit() {
    setEditingClient(null);
  }

  return (
    <main>
      <header className="app-header">
        <h1>ClientFlow CRM</h1>
        <p>Simple CRM for service businesses and monthly clients.</p>
      </header>

      <DashboardCards clients={clients} />

      <ClientForm
        onAddClient={handleAddClient}
        editingClient={editingClient}
        onUpdateClient={handleUpdateClient}
        onCancelEdit={handleCancelEdit}
      />

      <ClientList
        clients={filteredClients}
        filterStatus={filterStatus}
        onFilterStatusChange={setFilterStatus}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onDeleteClient={handleDeleteClient}
        onEditClient={handleStartEdit}
      />
    </main>
  );
}

export default App;