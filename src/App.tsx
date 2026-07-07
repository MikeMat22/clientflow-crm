import { useState } from "react";
import { DashboardCards } from "./components/DashboardCards";
import { ClientList } from "./components/ClientList";
import { ClientForm } from "./components/ClientForm";
import { mockClients } from "./data/mockClients";
import type { Client } from "./types/client";

function App() {
  const [clients, setClients] = useState<Client[]>(mockClients);

  function handleAddClient(newClient: Client) {
    setClients((currentClients) => [newClient, ...currentClients]);
  }

  return (
    <main>
      <header className="app-header">
        <h1>ClientFlow CRM</h1>
        <p>Simple CRM for service businesses and monthly clients.</p>
      </header>

      <DashboardCards clients={clients} />
      <ClientForm onAddClient={handleAddClient} />
      <ClientList clients={clients} />
    </main>
  );
}

export default App;