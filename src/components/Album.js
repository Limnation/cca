import { View, StyleSheet, Text } from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';

const Album = () => {
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
        ]}
      />
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
});

export default Album;
