import React from 'react';
import { Box } from './PaymentStyle';

interface TimeOutProps {
  timeAllowed: boolean;
}

const TimeOut = (props: TimeOutProps): React.ReactElement => {
  const { timeAllowed } = props;
  return timeAllowed ? null : <Box>Test</Box>;
};

export { TimeOut };
