import React from 'react';
import { Container, CustomButton, Title } from './PaymentStyle';

interface TimeOutProps {
  timeAllowed: boolean;
}

const TimeOut = (props: TimeOutProps): React.ReactElement => {
  const { timeAllowed } = props;
  return timeAllowed ? null : (
    <>
      <Container>
        <Title>O que achou deste app?!</Title>
        <CustomButton title="Cadastre-se aqui" type="button" />
      </Container>
    </>
  );
};

export { TimeOut };
