/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  display:flex;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;
  width:100%;
  background-color: #000;
`
export const Content = styled.View`

display:flex;
height:35%;
width: 75%;
border: 2px #f9e916;
margin-bottom: 36px;
border-radius: 4px;
`

export const Title = styled.Text`
  color: #dedde5;
  width: 100%;
  text-align:center;
  align-items: center;
  background-color: #000;
  font-weight: 600;
  font-size: 36px;
  padding: 0 16px;
  margin-bottom: 24px;

 `;
export const Text = styled.Text`
  display:flex;
  flex-direction: column;
  color: #dedde5;
  width: 100%;
  text-align:center;
  align-items: center;
  background-color: #000;
  font-weight: 400;
  padding: 0 16px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 180px;
  height: 48px;
  padding: 12px;
  border-radius: 24px;
  background-color: #4074AD;
  `;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color:#D6DFE8;

`;
