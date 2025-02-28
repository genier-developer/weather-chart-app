import {FC, useState} from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import './weather-chart.scss';
import {DataPoint} from "../../types/api.ts";

type WeatherChartProps = {
  data: DataPoint[];
  onDataPointClick: (data: DataPoint) => void;
}

type MetricOption = {
  key: string;
  label: string;
  color: string;
  unit: string;
}

const METRICS: MetricOption[] = [
  { key: 'main.temp', label: 'Temp', color: '#1976d2', unit: '°C' },
  { key: 'main.humidity', label: 'Humidity', color: '#2e7d32', unit: '%' },
  { key: 'main.pressure', label: 'Pressure', color: '#c62828', unit: 'hPa' },
  { key: 'wind.speed', label: 'Wind speed', color: '#ff9800', unit: 'м/с' },
  { key: 'main.feels_like', label: 'Feels like', color: '#9c27b0', unit: '°C' }
];

const normalizeTime = (tickItem: string)=>{
  const date = new Date(tickItem);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  if(hours===0 && minutes===0){
    return `${date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}`;
  }
  return `${hours.toString().padStart(2, '0')}`;
}

export const WeatherChart: FC<WeatherChartProps> = ({ data, onDataPointClick }) => {
  const [selectedMetric, setSelectedMetric] = useState<MetricOption>(METRICS[0]);

  const handleMetricChange = (metric: MetricOption) => {
    setSelectedMetric(metric);
  };

  return (
    <div className="weather-chart-container">
      <div className="metric-selector">
        {METRICS.map(metric => (
          <button 
            key={metric.key}
            className={`metric-button ${selectedMetric.key === metric.key ? 'active' : ''}`}
            onClick={() => handleMetricChange(metric)}
          >
            {metric.label}
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart 
          data={data}
          onClick={(data) => data && onDataPointClick(data.activePayload?.[0]?.payload)}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="dt_txt"
            tickFormatter={normalizeTime}
          />
          <YAxis unit={selectedMetric.unit} />
          <Tooltip 
            formatter={(value) => [`${value} ${selectedMetric.unit}`, selectedMetric.label]}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey={selectedMetric.key} 
            stroke={selectedMetric.color} 
            name={selectedMetric.label}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
