import {FC} from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

type WeatherChartProps = {
  data: {
    dt_txt: string;
    main: {
      temp: number;
    }
  }
}
export const WeatherChart: FC<WeatherChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dt_txt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};
