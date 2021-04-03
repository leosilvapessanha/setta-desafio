import React, { useEffect, useState } from 'react';

const TimeOut = () => {
  const [timeAllowed, setTimeAllowed] = useState(true);

  useEffect(() => {
    setTimeout(() => setTimeAllowed(false), 45000);
  }, []);
  return <>{timeAllowed ? null : null}</>;
};

export { TimeOut };
