import { useEffect } from "react";
import { useStore } from "./store";
import MonthForm from "./components/MonthForm";
import MonthList from "./components/MonthList";

function App() {
  const loadFromStorage = useStore((state) => state.loadFromStorage);

  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Foot Item List</h1>
        <MonthForm />
        <MonthList />
      </div>
    </div>
  );
}

export default App;
