import React, { useState } from "react";
import { Link } from "react-router-dom";

function Laypout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex flex-col  min-h-screen">
      <header>
        <nav className="bg-gray-900 text-white p-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold flex items-center space-x-2">
              <img
                src="https://icons.veryicon.com/png/o/food--drinks/yoga-flat-icon/healthy-food.png"
                alt="Tournament Logo"
                className="w-10 h-10 rounded-full"
              />
              <Link to="/">Food Items </Link>
            </div>

            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex space-x-6">
              <Link to="/list" className="text-lg">
                Months
              </Link>
              {/* <Link to="/add-team" className="text-lg">
                Team
              </Link>
               */}
            </div>
          </div>

          <div
            className={`lg:hidden ${
              isMenuOpen ? "block" : "hidden"
            } bg-gray-800 text-white p-4 space-y-4`}
          >
            <Link to="/list" className="text-lg block">
              Months
            </Link>
            {/* <Link to="/add-team" className="text-lg block">
              Team
            </Link> */}
            
          </div>
        </nav>
      </header>

      <main className="flex-1 bg-gray-200 p-8 ">
        {/* <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"> */}
          {children}
        {/* </div> */}
      </main>
    </div>
  );
}

export default Laypout;
