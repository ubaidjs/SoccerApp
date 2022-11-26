import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Text from '../components/Text';
import colors from '../theme/colors';
import GameCard from '../components/GameCard';
import SectionTitle from '../components/SectionTitle';
import {GameInfoObj} from '../interface/GameInfo';

const FullSchedule = () => {
  const [matches, setMatches] = useState<GameInfoObj[]>([]);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    console.log('fetchMatches called');
    try {
      const res = await fetch(
        'https://api.fifa.com/api/v3/calendar/matches?language=en&count=500&idSeason=255711',
        {
          method: 'GET',
        },
      );
      const json = await res.json();
      setMatches(json.Results);
    } catch (error) {
      console.log(error);
    }
  };

  const _renderItem = ({item}: {item: GameInfoObj}) => {
    return <GameCard info={item} />;
  };

  return (
    <View style={styles.container}>
      <SectionTitle text="All Events" />
      <FlatList
        data={matches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        onRefresh={fetchMatches}
        refreshing={false}
      />
    </View>
  );
};

export default FullSchedule;

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
