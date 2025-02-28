import {WeatherChart} from "../components/weather-chart/weather-chart.tsx";
import {WeatherInput} from "../components/weather-input/weather-input.tsx";

function App() {

  return (
    <>
      <h1>Weather-app</h1>
      <div>
        <WeatherInput/>
        <WeatherChart/>
      </div>
    </>
  )
}

export default App
