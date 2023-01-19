import React, {useState, useEffect} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Text from '../components/Text';
import colors from '../theme/colors';
import imageUrl from '../utils/imageUrl';
import fonts from '../theme/fonts';
import {GameInfoObj} from '../interface/GameInfo';
import dayjs from 'dayjs';
import SectionTitle from '../components/SectionTitle';
import {LiveData} from '../interface/LiveData';
import StatItem from '../components/StatItem';

interface Props extends NativeStackScreenProps<any> {}

const Match = (props: Props) => {
  const info: GameInfoObj = props.route.params?.info;
  const [liveData, setLiveData] = useState<LiveData | null>(null);

  useEffect(() => {
    fetchLiveScores();
    const inter = setInterval(() => {
      if (info.MatchStatus === 3) {
        fetchLiveScores();
      }
    }, 60000);

    return () => {
      clearInterval(inter);
    };
  }, []);

  const fetchLiveScores = async () => {
    console.log('fetchLiveScores called');
    try {
      const res = await fetch(
        `https://api.fifa.com/api/v3/live/football/17/255711/${info.IdStage}/${info.IdMatch}?language=en`,
      );
      const json = await res.json();
      setLiveData(json);
    } catch (error) {
      console.log(error);
    }
  };

  const matchStatus = (status: number) => {
    if (status === 0) {
      return (
        <Text style={styles.score}>
          {liveData?.HomeTeam.Score} - {liveData?.AwayTeam.Score}{' '}
        </Text>
      );
    } else if (status === 3) {
      return (
        <>
          <Text style={styles.score}>
            {liveData?.HomeTeam.Score} - {liveData?.AwayTeam.Score}
          </Text>
        </>
      );
    } else {
      return <Text style={{fontSize: 18}}>vs</Text>;
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <SectionTitle
          text="Overview"
          style={{marginTop: 20, marginBottom: 10}}
        />
        <View style={styles.card}>
          <Text style={styles.date}>
            {dayjs(info.Date).format('MMM DD, YYYY  hh:mm A')}
          </Text>
          {info.MatchStatus === 3 && (
            <View style={styles.live}>
              <View style={styles.dot} />
              <Text style={{color: 'red'}}>Live</Text>
            </View>
          )}
          <Text style={styles.matchTime}>{liveData?.MatchTime}</Text>
          <View style={styles.teamWrap}>
            <View style={styles.teamContainer}>
              <Image
                style={styles.flag}
                source={{uri: imageUrl(info?.Home?.Abbreviation)}}
              />
              <Text style={styles.teamName}>{info?.Home?.ShortClubName}</Text>
              {liveData?.Winner === liveData?.HomeTeam.IdTeam && (
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
              {liveData?.Winner === liveData?.AwayTeam.IdTeam && (
                <Image
                  style={styles.trophy}
                  source={require('../assets/trophy.png')}
                />
              )}
            </View>
          </View>
          <Text style={styles.stadium}>
            {info.Stadium.Name[0].Description},{' '}
            {info.Stadium.CityName[0].Description}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>{info.GroupName[0]?.Description}</Text>
          <Text>{info.StageName[0]?.Description}</Text>
        </View>

        <SectionTitle text="Stats" style={{marginTop: 20, marginBottom: 10}} />
        <View style={styles.card}>
          <StatItem
            home={`${parseInt(liveData?.BallPossession.OverallHome || 0, 10)}%`}
            away={`${parseInt(liveData?.BallPossession.OverallAway || 0, 10)}%`}
            label="Ball Possession"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Match;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgDark,
  },
  card: {
    backgroundColor: colors.bgDark2,
    margin: 20,
    borderRadius: 20,
    padding: 10,
    paddingVertical: 20,
  },
  flag: {
    height: 50,
    width: 50,
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
  score: {
    fontSize: 30,
    fontFamily: fonts.bold,
  },
  teamName: {
    fontSize: 18,
    textAlign: 'center',
  },
  date: {
    textAlign: 'center',
    fontSize: 17,
    marginBottom: 20,
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
    marginBottom: 10,
    marginTop: -10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 0,
    marginBottom: 20,
  },
  stadium: {
    textAlign: 'center',
    color: colors.text2,
    marginTop: 20,
  },
  matchTime: {
    color: 'yellow',
    fontFamily: fonts.bold,
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
  },
  trophy: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
