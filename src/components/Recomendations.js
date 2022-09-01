import { Text, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Recomendations = () => {
    return (
        <View style={styles.container}>
        <Card>
            <Card.Content>
                <Title>Eat</Title>
                <Paragraph>Bar Vegan</Paragraph>
                
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Title>Drink</Title>
                <Paragraph>Bar Vegan</Paragraph>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Title>Play</Title>
                <Paragraph>Bar Vegan</Paragraph>
            </Card.Content>
        </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        top: 50,
    }
});

export default Recomendations;