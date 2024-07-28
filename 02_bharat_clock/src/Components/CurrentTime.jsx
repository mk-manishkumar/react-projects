import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p className="lead">
        This is the current time : <span className="fw-bold">{time.toLocaleDateString()}</span> - <span className="fw-bold">{time.toLocaleTimeString()}</span>
      </p>
    </>
  );
};

export default CurrentTime;
