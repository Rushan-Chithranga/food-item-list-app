import { useEffect } from "react";
import MonthForm from "./components/MonthForm";
import MonthList from "./components/MonthList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemForm from "./components/ItemForm";

function App() {
  return (
    <Router>
      <div className=" min-h-screen bg-gray-100">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-2xl font-bold">Foot Item List</h1>
          <Routes>
            <Route path="/" element={<MonthForm />} />
            <Route path="/list" element={<MonthList />} />
            <Route path="/item-form/:monthId" element={<ItemForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
