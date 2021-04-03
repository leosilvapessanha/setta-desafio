import React from 'react';
import { ButtonText, Container, ButtonContainer, Title } from './PaymentStyle';

interface TimeOutProps {
  timeAllowed: boolean;
}

const TimeOut = (props: TimeOutProps): React.ReactElement => {
  const { timeAllowed } = props;
  return timeAllowed ? null : (
    <>
      <Container>
        <Title>O que achou deste app?!</Title>
        <ButtonContainer>
          <ButtonText>Compre aqui!!!</ButtonText>
        </ButtonContainer>
      </Container>
    </>
  );
};

export { TimeOut };
