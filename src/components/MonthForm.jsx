import { useState, useEffect } from "react";

function MonthForm() {
  const [monthName, setMonthName] = useState("");
  const [date, setDate] = useState("");
  const [months, setMonths] = useState([]); 
  useEffect(() => {
    const storedMonths = JSON.parse(localStorage.getItem("months")) || [];
    setMonths(storedMonths);
  }, []);

  const handleAddMonth = () => {
    if (monthName && date) {
      const newMonth = {
        monthName: monthName,
        date: date,
        id: Date.now(), 
      };

      const updatedMonths = [...months, newMonth];
      setMonths(updatedMonths);

      localStorage.setItem("months", JSON.stringify(updatedMonths));

      setMonthName("");
      setDate("");
    }
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Create a new Month
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Month name
          </label>
          <input
            type="text"
            name="month"
            id="month"
            value={monthName}
            onChange={(e) => setMonthName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Month Name"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <button
          type="button"
          onClick={handleAddMonth}
          className="w-full text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
        >
          Add month
        </button>
      </form>
    </div>
  );
}

export default MonthForm;
