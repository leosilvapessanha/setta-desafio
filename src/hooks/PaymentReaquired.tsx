import React, { useEffect, useState } from 'react';

const TimeOut = () => {
  const [timeAllowed, setTimeAllowed] = useState(true);

  useEffect(() => {
    setTimeout(() => setTimeAllowed(false), 45000);
  }, []);
  return <>{timeAllowed ? <h1>teste</h1> : <h1>teste2</h1>}</>;
};

export { TimeOut };
