import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
    halfday: "AM",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const updateTime = () => {
    const date = new Date();
    let hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    let halfday = "AM";

    halfday = hour >= 12 ? "PM" : "AM";
    hour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;

    setTime({
      hour: formatTime(hour),
      minute: formatTime(minute),
      second: formatTime(second),
      halfday: halfday,
    });
  };

  const formatTime = (time) => {
    return time < 10 ? "0" + time : time;
  };

  return (
    <div className="clock text-4xl text-black ">
      <div className="flex items-center justify-center">
        <div className="bg flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full shadow-md">
          <h2 id="h" className="font-bold">
            {time.hour}
          </h2>
        </div>
        <h2 className="font-bold">:</h2>
        <div className="bg flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full shadow-md">
          <h2 id="m" className="font-bold">
            {time.minute}
          </h2>
        </div>
        <h2 className="font-bold">:</h2>
        <div className="bg flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full shadow-md">
          <h2 id="s" className="font-bold">
            {time.second}
          </h2>
        </div>
        <div className="bg flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full shadow-md ml-4">
          <h2 id="ap" className="font-bold">
            {time.halfday}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Clock;
