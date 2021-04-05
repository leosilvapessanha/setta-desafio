/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Container, ListItem, Detail, Item } from './styles';
import api from '../../services/api';

import ListCharactersProps from '../../@types/interfaces/ListCharactersProps';
import CharacterProps from '../../@types/interfaces/CharacterProps';
import { TimeOut } from '../../hooks/PaymentReaquired';

const Home = () => {
  const [nextPage, setNextPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [timeAllowed, setTimeAllowed] = useState<boolean>(true);

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => setTimeAllowed(false), 45000);
  }, []);

  const fechData = async () => {
    try {
      setLoading(true);
      const response = await api.get<ListCharactersProps>(`?page= ${nextPage}`);
      setLoading(false);
      if (response.status === 200 && response.data.next) {
        setNextPage(nextPage + 1);
        setCharacters([...characters, ...response.data.results]);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fechData();
  }, []);

  const CharactersDetails = (character: CharacterProps) => {
    navigation.navigate('Detail', { character });
  };

  const renderItem = ({ item }: { item: CharacterProps }) => (
    <ListItem>
      <Detail>
        <Item weight="bold">Nome - {item.name}</Item>
        <Item>Altura - {item.height} cm</Item>
        <Item>Peso - {item.mass} Kg</Item>
      </Detail>
    </ListItem>
  );

  return (
    <>
      <Container testID="homePageReturn">
        <Image
          // eslint-disable-next-line global-require
          source={require('../../assets/logo.png')}
          resizeMode="cover"
          style={{ width: '100%', height: 200 }}
        />
        <FlatList
          testID="characters"
          data={characters}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onRefresh={fechData}
          refreshing={loading}
          onEndReached={fechData}
          onEndReachedThreshold={0.1}
          keyExtractor={item => item.name}
        />
      </Container>
      <TimeOut timeAllowed={timeAllowed} />
    </>
  );
};

export default Home;
