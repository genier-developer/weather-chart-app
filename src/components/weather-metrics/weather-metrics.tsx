import {FC} from "react";
import './weather-metrics.scss';

type WeatherMetricsProps = {
  data: {
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
    };
    wind: {
      speed: number;
    };
    dt_txt: string;
  };
}

export const WeatherMetrics: FC<WeatherMetricsProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="weather-metrics">
      <h3>Metrics on {data.dt_txt}</h3>
      <p>
        <span className="label">Temperature:</span>
        <span className="value">{data.main.temp}°C</span>
      </p>
      <p>
        <span className="label">Feels like:</span>
        <span className="value">{data.main.feels_like}°C</span>
      </p>
      <p>
        <span className="label">Humidity:</span>
        <span className="value">{data.main.humidity}%</span>
      </p>
      <p>
        <span className="label">Pressure:</span>
        <span className="value">{data.main.pressure} hPa</span>
      </p>
      <p>
        <span className="label">Wind speed:</span>
        <span className="value">{data.wind.speed} м/с</span>
      </p>
    </div>
  );
};
