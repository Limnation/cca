import { Text, Card, Title, Paragraph } from 'react-native-paper';
import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';

const SiteInfo = () => {
    return (
        <ScrollView style={styles.container}>
        <Card>
            <Card.Content>
                <Title>Atlanta Office</Title>
                <Paragraph>675 Ponce De Leon Ave NE, Atlanta, GA 30308</Paragraph>
                <Paragraph>Floor 7th, Suite 7025</Paragraph>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Title>Parking</Title>
                <Paragraph>Floor 7th</Paragraph>
                <Card.Cover source={{ uri: 'https://github.com/Limnation/cca/raw/main/assets/parking.png' }} />
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Title>Map</Title>
                <Paragraph>Coffee, Food, & Drinks</Paragraph>
                <Image style={styles.map} source={require('../../assets/map.jpg')} />
            </Card.Content>
        </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        // top: 50,
        flex: 1,
    },
    map: {
        flex: 1,
      width: '100%',
      height: 290,
      resizeMode: 'contain',
    }
});

export default SiteInfo;