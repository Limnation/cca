
import { StyleSheet, View} from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                CCA
            </Text>
            <Text style={styles.welcome}>Welcome to Atlanta</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // top: 50,
        flex: 1,
        backgroundColor: '#023047',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#023047',
    },
    header: {
        fontSize: 50,
        color: 'white',

    },
    welcome: {
        color: 'white',
        fontSize: 20,
    }
});

export default HomePage;