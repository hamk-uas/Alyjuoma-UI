import { useState } from "react";

export default function Navbar({
  setChartType,
  setStationFilter,
  startTime,
  endTime,
  setStartTime,
  setEndTime,
  aggregated,
  setAggregated,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 relative">
      {/* Logo */}
      <div className="text-xl font-bold hidden lg:block">Älyjuoma</div>

      {/* Top: Chart and Aggregate Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
          onClick={() => setChartType("bar")}
        >
          Bar
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
          onClick={() => setChartType("line")}
        >
          Line
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
          onClick={() => setAggregated((prev) => !prev)}
        >
          {aggregated ? "Show Raw Data" : "Aggregate Daily"}
        </button>
      </div>

      {/* Middle: Date Pickers */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
        <input
          type="datetime-local"
          className="text-black px-2 py-1 rounded"
          value={startTime || ""}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <span>to</span>
        <input
          type="datetime-local"
          className="text-black px-2 py-1 rounded"
          value={endTime || ""}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>

      {/* Right: Hamburger and Station Filter */}
      <div className="flex justify-end w-full lg:w-auto relative">
        <div className="text-xl font-bold lg:hidden">Älyjuoma</div>
        <button
          className="ml-auto text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="absolute top-12 right-0 bg-white text-black shadow-md rounded-lg p-4 z-50 w-40 flex flex-col space-y-2">
            <button
              className="text-left hover:bg-gray-200 px-2 py-1 rounded"
              /*onClick={() => setStationFilter("all")}*/
            >
              All Stations
            </button>
            <button
              className="text-left hover:bg-gray-200 px-2 py-1 rounded"
              /*onClick={() => setStationFilter("Omistaja 1")}*/
            >
              Station A1
            </button>
            <button
              className="text-left hover:bg-gray-200 px-2 py-1 rounded"
              /*onClick={() => setStationFilter("Omistaja 2")}*/
            >
              Station A2
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
