import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';
import {
  ButtonText,
  Text,
  Title,
  ButtonContainer,
  Content,
  Container,
} from './styles';

const ModalResponse = () => {
  return (
    <>
      <Container>
        <Image
          source={logo}
          resizeMode="cover"
          style={{ width: '100%', height: 200 }}
        />
        <Content>
          <Title>O que achou deste app?!</Title>
          <Text>
            Infelizmente só consegui te dar 45 segundos para que você visse ela,
            afinal, a negociação é com o Darth Vader. O plano dele é vender essa
            lista de personagens para comprar uma nova Death Star! E aí, tá
            esperando o que para assinar esse aplicativo?
          </Text>
        </Content>
        <ButtonContainer>
          <ButtonText>Assine aqui!!!</ButtonText>
        </ButtonContainer>
      </Container>
    </>
  );
};
export default ModalResponse;
