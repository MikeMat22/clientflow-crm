import { DashboardCards } from "./components/DashboardCards";
import { ClientList } from "./components/ClientList";
import { mockClients } from "./data/mockClients";

function App() {
  return (
    <main>
      <header className="app-header">
        <h1>ClientFlow CRM</h1>
        <p>Simple CRM for service businesses and monthly clients.</p>
      </header>

      <DashboardCards clients={mockClients} />
      <ClientList clients={mockClients} />
    </main>
  );
}

export default App;