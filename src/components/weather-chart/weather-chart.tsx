import {FC} from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

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
    return "date+1"
  }
  return `${hours.toString().padStart(2, '0')}`;
}

export const WeatherChart: FC<WeatherChartProps> = ({ data }) => {
  return (
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
        <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};
