import React from "react";
import WeatherDisplayComponent from "./WeatherDisplayComponent";

const WeatherDisplay = ({ weatherInfo }) => {
  const getTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Fallback values for missing data
  const {
    name = "City Name",
    weather = [{ icon: "" }],
    main = {},
    wind = {},
    visibility = "N/A",
    sys = {},
  } = weatherInfo;

  const { icon } = weather[0];
  const temp = main.temp || "N/A";
  const humid = main.humidity || "N/A";
  const windSpeed = wind.speed || "N/A";
  const minTemp = main.temp_min || "N/A";
  const maxTemp = main.temp_max || "N/A";
  const pressure = main.pressure || "N/A";
  const sunrise = sys.sunrise ? getTime(sys.sunrise) : "N/A";
  const sunset = sys.sunset ? getTime(sys.sunset) : "N/A";

  return (
    <div className="flex flex-wrap justify-center w-full h-full">
      <div className="bg-gray-600/80 w-10/12 rounded-lg shadow-white/30 shadow-md p-4 px-11 flex flex-col items-start">
        <div className="first-row flex items-center justify-between w-2/6 mx-9 my-5">
          <div className="text-3xl font-extrabold text-white">{name}</div>
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Weather Icon" className="bg-white/80"
            />
          )}
        </div>
        <div className="w-5/6 text-start mx-9 text-3xl text-white font-semibold">
          {temp}°C
        </div>
        <div className="w-5/6 mx-9 my-9 flex flex-wrap gap-6">
          <WeatherDisplayComponent title="Min Temp" value={`${minTemp}°C`} />
          <WeatherDisplayComponent title="Max Temp" value={`${maxTemp}°C`} />
          <WeatherDisplayComponent title="Humidity" value={`${humid}%`} />
          <WeatherDisplayComponent
            title="Wind Speed"
            value={`${windSpeed} m/s`}
          />
          <WeatherDisplayComponent title="Pressure" value={`${pressure} hPa`} />
          <WeatherDisplayComponent
            title="Visibility"
            value={`${visibility} m`}
          />
          <WeatherDisplayComponent title="Sunrise" value={sunrise} />
          <WeatherDisplayComponent title="Sunset" value={sunset} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
