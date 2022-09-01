import { Text, Card, Title, Paragraph } from 'react-native-paper';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const SiteInfo = () => {
    return (
        <View style={styles.container}>
        <Card>
            <Card.Content>
                <Title>Atlanta Office</Title>
                <Paragraph>675 Ponce De Leon Ave NE, Atlanta, GA 30308</Paragraph>
            </Card.Content>
        </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 50,
    }
});

export default SiteInfo;