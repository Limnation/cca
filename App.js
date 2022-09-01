import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Album from './src/components/Album';
import BackgroundVideo from './src/components/BackgroundVideo';
import SiteInfo from './src/components/SiteInfo';
import Recomendations from './src/components/Recomendations';
import HomePage from './src/components/HomePage';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;


export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Photos', focusedIcon: 'album' },
    { key: 'recents', title: 'Site Info', focusedIcon: 'history' },
    { key: 'notifications', title: 'Recomendations', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: HomePage,
    albums: Album,
    recents: SiteInfo,
    notifications: Recomendations,
  });

  return (
    <BottomNavigation 
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
