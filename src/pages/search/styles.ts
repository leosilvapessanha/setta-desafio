import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding: 10px;
`;

export const ListItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  background-color: #000;
  margin-top: 20px;
  padding: 30px;
  border-radius: 20px;
  border-color: #f9e916;
  border-width: 1.5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Detail = styled.View``;

export const Item = styled.Text`
  color: #dedde5;
  font-size: 16px;
  font-weight: ${props => props.weight || 'normal'};
`;
