import { useEffect, useState } from "react";
import { DashboardCards } from "./components/DashboardCards";
import { ClientList } from "./components/ClientList";
import { ClientForm } from "./components/ClientForm";
import { mockClients } from "./data/mockClients";
import type { Client } from "./types/client";

const STORAGE_KEY = "clientflow-clients";

function App() {
  const [clients, setClients] = useState<Client[]>(() => {
    const savedClients = localStorage.getItem(STORAGE_KEY);

    if (savedClients) {
      return JSON.parse(savedClients);
    }

    return mockClients;
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
  }

  return (
    <main>
      <header className="app-header">
        <h1>ClientFlow CRM</h1>
        <p>Simple CRM for service businesses and monthly clients.</p>
      </header>

      <DashboardCards clients={clients} />
      <ClientForm onAddClient={handleAddClient} />
      <ClientList clients={clients} onDeleteClient={handleDeleteClient} />
    </main>
  );
}

export default App;