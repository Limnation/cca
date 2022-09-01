
import { StyleSheet, View, Image } from 'react-native';

const HomePage = () => {
    return (
      <View style={styles.container}>
        <Image style={styles.header} source={require('../../assets/ccaLogo.png')} />
        <Image style={styles.welcome} source={require('../../assets/cultureClubAppImage.png')} />
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