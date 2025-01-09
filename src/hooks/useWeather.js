import { useState, useEffect } from "react";
import config from "../config";

const useWeather = (city) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `${config.API_BASE_URL}?q=${city}&appid=${config.API_KEY}&units=${config.UNITS}`;
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error("Error while fetching data: " + err);
        setData({ err: "Failed to fetch data" });
      }
    };
    fetchWeather();
  }, [city]);

  return data;
};

export default useWeather;
