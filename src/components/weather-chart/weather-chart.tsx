import {FC} from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import './weather-chart.scss';

type WeatherChartProps = {
  data: {
    dt_txt: string;
    main: {
      temp: number;
    }
  }[];
}

const normalizeTime = (tickItem: string)=>{
  const date = new Date(tickItem);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  if(hours===0 && minutes===0){
    return `${date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}`;
  }
  return `${hours.toString().padStart(2, '0')}`;
}

export const WeatherChart: FC<WeatherChartProps> = ({ data }) => {
  return (
    <div className="weather-chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="dt_txt"
            tickFormatter={normalizeTime}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="main.temp" stroke="#1976d2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
