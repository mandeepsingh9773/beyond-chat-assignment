import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
