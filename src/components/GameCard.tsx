import React from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import colors from '../theme/colors';
import Text from './Text';
import imageUrl from '../utils/imageUrl';
import fonts from '../theme/fonts';
import {GameInfoObj} from '../interface/GameInfo';

interface GameCardProps {
  info: GameInfoObj;
}

//MatchStatus 3 = Live, 1 = Upcoming, 0 = Over, 12 = about to begin

const GameCard = ({info}: GameCardProps) => {
  const navigation: any = useNavigation();
  const matchStatus = (status: number) => {
    if (status === 0) {
      return (
        <Text style={styles.score}>
          {info?.Home?.Score} - {info?.Away?.Score}{' '}
        </Text>
      );
    } else if (status === 3) {
      return (
        <>
          <Text style={styles.score}>
            {info?.Home?.Score} - {info?.Away?.Score}{' '}
          </Text>
        </>
      );
    } else {
      return <Text style={{fontSize: 18}}>vs</Text>;
    }
  };

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Match', {
          info: info,
        })
      }
      style={styles.container}>
      <Text style={styles.date}>
        {dayjs(info.Date).format('MMM DD, YYYY  hh:mm A')}
      </Text>
      {info.MatchStatus === 3 && (
        <View style={styles.live}>
          <View style={styles.dot} />
          <Text style={{color: 'red'}}>Live</Text>
        </View>
      )}
      <View style={styles.teamWrap}>
        <View style={styles.teamContainer}>
          <Image
            style={styles.flag}
            source={{uri: imageUrl(info?.Home?.Abbreviation)}}
          />
          <Text style={styles.teamName}>{info?.Home?.ShortClubName}</Text>
          {info.Winner === info?.Home?.IdTeam && (
            <Image
              style={styles.trophy}
              source={require('../assets/trophy.png')}
            />
          )}
        </View>
        <View style={styles.teamContainer}>
          {matchStatus(info.MatchStatus)}
        </View>
        <View style={styles.teamContainer}>
          <Image
            style={styles.flag}
            source={{uri: imageUrl(info?.Away?.Abbreviation)}}
          />
          <Text style={styles.teamName}>{info?.Away?.ShortClubName}</Text>
          {info.Winner === info?.Away?.IdTeam && (
            <Image
              style={styles.trophy2}
              source={require('../assets/trophy.png')}
            />
          )}
        </View>
      </View>
      <Text style={styles.stadium}>
        {info.Stadium.Name[0].Description},{' '}
        {info.Stadium.CityName[0].Description}
      </Text>
    </Pressable>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 20,
    backgroundColor: colors.bgDark2,
    marginTop: 0,
  },
  flag: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  teamWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamContainer: {
    alignItems: 'center',
    flex: 1,
  },
  date: {
    textAlign: 'center',
    fontSize: 17,
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
    fontFamily: fonts.bold,
  },
  teamName: {
    fontSize: 17,
    textAlign: 'center',
  },
  stadium: {
    textAlign: 'center',
    color: colors.text2,
    marginTop: 20,
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 10,
    backgroundColor: 'red',
    marginRight: 5,
    marginTop: 3,
  },
  live: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -15,
    marginBottom: 10,
  },
  trophy: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  trophy2: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
