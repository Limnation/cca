
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

const image = require('../../assets/pcm.jpg')

const HomePage = () => {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Image style={styles.header} source={require('../../assets/ccaLogo.png')} />
          <Image style={styles.welcome} source={require('../../assets/cultureClubAppImage.png')} />
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#023047',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#023047',
    },
      image: {
      flex: 1,
      justifyContent: "center"
    },
    header: {
      width: 325,
      height: 195,
    },
    welcome: {
      width: 315,
      height: 50,
    }
});

export default HomePage;