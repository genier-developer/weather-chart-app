import {FC, FormEvent, useState} from 'react';

type CityInputProps = {
  onSearch: (city: string) => void;
};

export const CityInput: FC<CityInputProps> = ({onSearch}) => {
  const [city, setCity]=useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
      />
      <button type="submit">Get Forecast</button>
    </form>
  );
};
