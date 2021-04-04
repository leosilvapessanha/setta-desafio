/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
// import InfiniteScroll from 'react-infinite-scroll-component';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
// import InfiniteScroll from 'react-infinite-scroller';
import { Container, ListItem, Detail, Item } from './styles';
import api from '../../services/api';

import ListCharactersProps from '../../@types/interfaces/ListCharactersProps';
import CharacterProps from '../../@types/interfaces/CharacterProps';
import logo from '../../assets/logo.png';
import { TimeOut } from '../../hooks/PaymentReaquired';

const Characters = () => {
  const [nextPage, setNextPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [timeAllowed, setTimeAllowed] = useState<boolean>(true);

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => setTimeAllowed(false), 45000);
  }, []);

  useEffect(() => {
    fechData();
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

  const CharactersDetails = (character: CharacterProps) => {
    navigation.navigate('Detail', { character });
  };

  const renderItem = ({ item }: { item: CharacterProps }) => (
    <ListItem onPress={() => CharactersDetails(item)}>
      <Detail>
        <Item weight="bold">Name - {item.name}</Item>
        <Item>Height - {item.height} cm</Item>
        <Item>Weight - {item.mass} Kg</Item>
      </Detail>
    </ListItem>
  );

  return (
    <>
      <Container>
        <Image
          source={logo}
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

export default Characters;
