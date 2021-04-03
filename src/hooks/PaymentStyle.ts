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
  /* opacity: 0.5; */
`

export const Title = styled.Text`
  display:flex;
  flex-direction: row;
  /* height: 50%; */
  width: 100%;
  text-align:center;
  align-items: center;
  background-color: #fff;
  font-weight: bold;
  border: 1px blue;
  border-radius: 8px;
  margin-bottom: 16px;
 `;

export const ButtonContainer = styled.TouchableOpacity`
  width: 180px;
  height: 48px;
  padding: 12px;
  border-radius: 24px;
  background-color: #f4f4f4;
  color:#000
  `
export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
