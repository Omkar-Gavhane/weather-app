import React from 'react'

const WeatherDisplayComponent = (props) => {
  return (
    <div className="w-5/12 mx-2 p-3 pl-9 text-white bg-gray-900 flex flex-col items-start">
      <div className='text-lg'>{props.title}</div>
      <div className="text-xl ">{props.value}</div>
    </div>
  );
}

export default WeatherDisplayComponent
