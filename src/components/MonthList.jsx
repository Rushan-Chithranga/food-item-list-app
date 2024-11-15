import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MonthList() {
  const [months, setMonths] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedMonths = JSON.parse(localStorage.getItem("months")) || [];
    setMonths(storedMonths);
  }, []);

  const handleAddClick = (monthId) => {
    navigate(`/item-form/${monthId}`);
  };

  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 " >
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Lists
        </h5>
      </div>

      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {months.length === 0 ? (
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    No data available
                  </p>
                </div>
              </div>
            </li>
          ) : (
            months.map((month) => (
              <li
                key={month.id}
                className="py-3 sm:py-4 cursor-pointer"
                onClick={() => handleMonthClick(month.id)}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://icons.veryicon.com/png/o/food--drinks/yoga-flat-icon/healthy-food.png"
                      alt="Month image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {month.monthName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {month.date}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddClick(month.id);
                    }}
                    className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
                  >
                    Add Item
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default MonthList;
