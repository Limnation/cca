
import { StyleSheet, View, Image, ImageBackground, Text, Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';

const image = require('../../assets/backgroundPonce.jpg')
const {width, height} = Dimensions.get("window")

const HomePage = () => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
          <Image style={styles.header} source={require('../../assets/ccaLogo.png')} />
          {/* <Text style={styles.text}>Culture Club App</Text> */}
          {/* <Image style={styles.welcome} source={require('../../assets/cultureClubAppImage.png')} /> */}
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#023047',
      alignItems: 'center',
      justifyContent: 'top',
      backgroundColor: '#023047',
    },
    image: {
      flex: 1,
      justifyContent: 'top',
      maxHeight: height,
      maxWidth: width,
      width: '100%', 
      height: '100%', 
      resizeMode: 'contain',
    },
    text: {
      flex: 1,
      color: '#FFB703',
      fontFamily: 'Modak_400Regular',
      fontSize: 35,
      textAlign: 'center',
    },
    header: {
      width: 325,
      height: 195,
    },
    // welcome: {
    //   width: 315,
    //   height: 50,
    // }
});

export default HomePage;