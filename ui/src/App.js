import { Routes, Route } from "react-router-dom";
import "./App.css";
import CustomerCreate from "./components/CustomerCreate";
import CustomerList from "./components/CustomerList";

function App() {
  return (
    <div className="App">
      <h3>Customers</h3>
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/create" element={<CustomerCreate />} />
        <Route path="/update/:id" element={<CustomerCreate />} />
      </Routes>
    </div>
  );
}

export default App;
