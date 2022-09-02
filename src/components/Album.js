import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';
import GridImageView from 'react-native-grid-image-viewer';

const Album = () => {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  return (
    <View style={styles.background}>
      <Text style={styles.headline_text}>Photo Album</Text>
      <Text style={styles.explore_text}>
        Click on an image to view in full screen mode
      </Text>
      <GridImageView
        data={[
          'https://github.com/Limnation/cca/raw/main/assets/photos/img1.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img2.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img4.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img5.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img6.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img7.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img8.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img9.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img10.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img11.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img12.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img13.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img14.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img15.png',
          'https://github.com/Limnation/cca/raw/main/assets/photos/img16.png',
        ]}
      />
      <FAB
    icon="plus"
    style={styles.fab}
    color='#fff'
    size={'medium'}
    onPress={() => console.log('Pressed')}
  />
      {/* <FAB.Group
          open={open}
          mode={'flat'}
          color='#FB8500'
          style={styles.fab}
          size={'large'}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', label: 'Star', onPress: () => console.log('Pressed add') }
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  headline_text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFB703'
  },
});

export default Album;
