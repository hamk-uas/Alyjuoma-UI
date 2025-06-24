import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  const [chartType, setChartType] = useState("bar");
  const [stationFilter, setStationFilter] = useState("all");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [aggregated, setAggregated] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          setChartType={setChartType}
          setStationFilter={setStationFilter}
          startTime={startTime}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          aggregated={aggregated}
          setAggregated={setAggregated}
        />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  chartType={chartType}
                  stationFilter={stationFilter}
                  startTime={startTime}
                  endTime={endTime}
                  aggregated={aggregated}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
