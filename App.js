import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { BottomNavigation, Text, Provider as PaperProvider, MD3LightTheme as DefaultTheme, } from 'react-native-paper';
import Album from './src/components/Album';
// import BackgroundVideo from './src/components/BackgroundVideo';
import SiteInfo from './src/components/SiteInfo';
import Recomendations from './src/components/Recomendations';
import HomePage from './src/components/HomePage';

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Home', focusedIcon: 'home'},
    { key: 'albums', title: 'Photos', focusedIcon: 'image' },
    { key: 'recents', title: 'Site Info', focusedIcon: 'newspaper' },
    { key: 'notifications', title: 'Favorites', focusedIcon: 'heart'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: HomePage,
    albums: Album,
    recents: SiteInfo,
    notifications: Recomendations,
  });

  return (
    <PaperProvider theme={theme}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#8ECAE6'}}
        activeColor={theme.colors.primary}
        inactiveColor={theme.colors.tertiary}
        style={{color: '#fff'}}
      />
    </PaperProvider>
  );
}

// messing with setting this up
const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    primary: '#023047',
    secondary: '#8ECAE6',
    tertiary: '#fff',
  }
};
