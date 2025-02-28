import {WeatherChart} from "../components/weather-chart/weather-chart.tsx";
import {CityInput} from "../components/city-input/city-input.tsx";
import {useState} from "react";
import {getForecast} from "../services/getForecast.ts";
import {ForecastResponse, DataPoint} from '../types/api.ts'
import {WeatherMetrics} from "../components/weather-metrics/weather-metrics.tsx";
import './app.scss';

function App() {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedData, setSelectedData] = useState<DataPoint | null>(null);

const handleSearch = async (city: string) => {
  try {
    const data = await getForecast(city)
    setForecast(data)
    setSelectedData(null)
    setError(null)

  }
  catch(error){
    setError(error instanceof Error ? error.message : 'An unknown error occurred')
  }
}

const handleChartClick = (data: DataPoint) => {
  setSelectedData(data);
};

  return (
    <div className="App">
      <h1>Weather Forecast from Openweathermap</h1>
      <CityInput onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {forecast && (
        <>
          <h2>Forecast for {forecast.city.name}</h2>
          <WeatherChart data={forecast.list} onDataPointClick={handleChartClick} />
          {selectedData && <WeatherMetrics data={selectedData} />}
        </>
      )}
    </div>
  )
}

export default App
