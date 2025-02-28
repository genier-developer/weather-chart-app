import {FC} from "react";

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
    <div>
      <h3>Metrics on {data.dt_txt}</h3>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Feels like: {data.main.feels_like}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Pressure: {data.main.pressure} hPa</p>
      <p>Wind speed: {data.wind.speed} м/с</p>
    </div>
  );
};
