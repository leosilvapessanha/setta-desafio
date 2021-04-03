import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface TimeOutProps {
  timeAllowed: boolean;
  setTimeallowed: boolean;
}

function TimeOut({ children }: TimeOutProps): any {
  const [timeAllowed, setTimeAllowed] = useState(true);

  useEffect(() => {
    setTimeout(() => setTimeAllowed(false), 45000);
  }, []);

  // eslint-disable-next-line no-lone-blocks
  {
    // eslint-disable-next-line no-unused-expressions
    timeAllowed ? <div /> : <div />;
  }
}

export { TimeOut };
