import React, {useState, useEffect} from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import Text from '../components/Text';
import colors from '../theme/colors';
import todayDate from '../utils/todayDate';
import GameCard from '../components/GameCard';
import SectionTitle from '../components/SectionTitle';
import {GameInfoObj} from '../interface/GameInfo';

const Schedule = ({route, navigation}: any) => {
  const [todaysMatches, setTodaysMatches] = useState<GameInfoObj[]>([]);

  useEffect(() => {
    fetchTodaysMatches();
  }, []);

  const fetchTodaysMatches = async () => {
    console.log('fetchTodaysMatches called');
    try {
      const res = await fetch(
        `https://api.fifa.com/api/v3/calendar/matches?from=${todayDate()}T00:00:00Z&to=${todayDate()}T23:59:59Z&language=en&count=500&idSeason=255711`,
        {
          method: 'GET',
        },
      );
      const json = await res.json();
      setTodaysMatches(json.Results);
    } catch (error) {
      console.log(error);
    }
  };

  const _renderItem = ({item}: {item: GameInfoObj}) => {
    return <GameCard info={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FIFA World Cup Qatar 2022</Text>
      <SectionTitle text="Today's Events" />
      <FlatList
        data={todaysMatches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        onRefresh={fetchTodaysMatches}
        refreshing={false}
        ListFooterComponent={() => {
          return (
            <Pressable
              onPress={() => navigation.navigate('FullSchedule')}
              style={{alignItems: 'center', marginBottom: 40, marginTop: 20}}>
              <Text style={{fontSize: 20}}>See Full Schedule {' >'}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgDark,
    flex: 1,
  },
  heading: {
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    lineHeight: 25,
  },
});
