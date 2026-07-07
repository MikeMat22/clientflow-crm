import { DashboardCards } from "./components/DashboardCards";
import { mockClients } from "./data/mockClients";

function App() {
  return (
    <main>
      <h1>ClientFlow CRM</h1>
      <p>Simple CRM for service businesses and monthly clients.</p>

      <DashboardCards clients={mockClients} />
    </main>
  );
}

export default App;