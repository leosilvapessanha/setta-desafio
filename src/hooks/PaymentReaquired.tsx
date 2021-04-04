import React from 'react';

import ModalResponse from '../components/modalResponse';

interface TimeOutProps {
  timeAllowed: boolean;
}

const TimeOut = (props: TimeOutProps): React.ReactElement => {
  const { timeAllowed } = props;
  return timeAllowed ? null : <ModalResponse />;
};

export { TimeOut };
