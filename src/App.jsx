import { useEffect } from "react";
import MonthForm from "./components/MonthForm";
import MonthList from "./components/MonthList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemForm from "./components/ItemForm";
import Laypout from "./components/Laypout";

function App() {
  return (
    <Router>
      <Laypout>
        <Routes>
          <Route path="/" element={<MonthForm />} />
          <Route path="/list" element={<MonthList />} />
          <Route path="/item-form/:monthId" element={<ItemForm />} />
        </Routes>
      </Laypout>
    </Router>
  );
}

export default App;
