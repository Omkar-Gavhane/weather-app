import React from "react";

const WeatherForm = (props) => {
  return (
    <div className="flex flex-wrap px-auto w-full">
      <div className="w-full">
        <form
          className="flex justify-center gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            props.onSearchCity();
          }}
        >
          <input
            type="text"
            className="text-xl bg-white rounded shadow p-2 w-1/4 font-semibold"
            placeholder="City"
            value={props.city}
            disabled={false}
            onChange={(e) =>
              props.onCityChange && props.onCityChange(e.target.value)
            }
          />
          <button
            type="submit"
            className="bg-gray-200 text-white text-3xl font-bold px-2 rounded-lg"
          >
            🔍
          </button>
        </form>
      </div>
    </div>
  );
};

export default WeatherForm;
