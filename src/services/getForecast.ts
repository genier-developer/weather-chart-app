import axios from "axios";
import { ForecastResponse } from "../types/api";


const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY
const FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5/forecast'

export const getForecast = async(city: string): Promise<ForecastResponse> => {
  try{
    const forecastResponse = await axios.get<ForecastResponse>(FORECAST_API_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        cnt: 40
      }
    })
    return forecastResponse.data
  }
  catch(error){
    if(axios.isAxiosError(error)){
      if (error.response?.status === 404) {
        throw new Error('City is not found');
      }
    }
    throw new Error('Failed to fetch forecast data...');
  }
}