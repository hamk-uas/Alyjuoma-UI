import ChartComponent from "../components/Graph";

const Home = ({ chartType, stationFilter, startTime, endTime, aggregated }) => {
  return (
    <div className="home">
      <ChartComponent
        chartType={chartType}
        stationFilter={stationFilter}
        startTime={startTime}
        endTime={endTime}
        aggregated={aggregated}
      />
    </div>
  );
};

export default Home;
