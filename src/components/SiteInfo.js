import { Text, Card, Title, Paragraph } from 'react-native-paper';
import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const SiteInfo = () => {
    return (
        <View style={styles.container}>
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
                <Image style={styles.map} source={require('../../assets/map.jpg')} />
            </Card.Content>
        </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 50,
    },
    map: {
      width: '100%'
    }
});

export default SiteInfo;