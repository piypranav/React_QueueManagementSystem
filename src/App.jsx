import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

function App() {
  const [queue, setQueue] = useState([1, 2, 3]);

  const addCustomer = (customerName) => {
    setQueue([...queue, {...customerName, id: Date.now(), status: "waiting"}]);
  }
  const updateCustomer = (id, newState) => {
    setQueue(queue.map(customerName => customerName.id === id ? {...customerName, status: newState} : customerName));
  }
  const removeCustomer = (id) => {
    setQueue(queue.filter(customerName => customerName.id !== id));
  }

  return(
    <div className="app">
      <header>
        <h1>Queue Management System</h1>
        <p>Customer Requests</p>
      </header>
      <main>
        <QueueForm onAdd={addCustomer} />
        <QueueDisplay
          queue={queue}
          onUpdate={updateCustomer}
          onRemove={removeCustomer}
        />
      </main>
    </div>
  );
}

export default App