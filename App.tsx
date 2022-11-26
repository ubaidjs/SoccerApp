import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import colors from './src/theme/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Schedule from './src/screens/Schedule';
import Match from './src/screens/Match';
import FullSchedule from './src/screens/FullSchedule';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgDark} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="Match" component={Match} />
          <Stack.Screen name="FullSchedule" component={FullSchedule} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgDark,
  },
});
