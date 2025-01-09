import { useState } from "react";
import "./App.css";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherForm from "./components/WeatherForm";
import config from "./config";
import useWeather from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState(config.DEFAULT_CITY);
  const [changedCity, setChangedCity] = useState(config.DEFAULT_CITY);
  const weatherInfo = useWeather(city);

  const searchCity = () => {
    setCity(changedCity);
  };

  return (
    <div className="App bg-gray-900">
      <div className="md:container mx-auto py-7">
        <div className="w-full">
          <WeatherForm
            city={changedCity}
            onCityChange={(city) => {
              setChangedCity(city);
            }}
            onSearchCity={searchCity}
          />
        </div>
        <div>
          <WeatherDisplay weatherInfo={weatherInfo} />
        </div>
      </div>
    </div>
  );
}

export default App;
