
import { StyleSheet, View, Image, ImageBackground, Text, Dimensions } from 'react-native';

const image = require('../../assets/backgroundPonce.jpg')
const {width, height} = Dimensions.get("window")

const HomePage = () => {
return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <Image style={styles.header} source={require('../../assets/ccaLogo.png')} />
        </ImageBackground>
    </View>
)
};

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
    alignItems: 'center',
    maxHeight: height,
    maxWidth: width,
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain',
},
header: {
    width: 325,
    height: 195,
    marginTop: '10%',
},
});

export default HomePage;