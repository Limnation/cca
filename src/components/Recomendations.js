import { Text, Card, Title, Paragraph, List } from 'react-native-paper';
import { StyleSheet, ScrollView } from 'react-native';

const Recomendations = () => {
    return (
        <ScrollView style={styles.container}>
        <Card>
            <Card.Content>
                <List.Accordion title='Eat' titleStyle={{fontSize: 24, color: '#023047'}}>
                    <List.Item title='Two Urban Licks'/>
                    <List.Item title='Bar Vegan' description='Delicious vegan food for everyone.'/>
                    <List.Item title='Krog Street Market' description='Exceptional dining and retail options in one of the citys hottest historic neighborhoods.'/>
                </List.Accordion>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <List.Accordion title='Drink' titleStyle={{fontSize: 24, color: '#023047'}}>
                    <List.Item title='King of Pops Bar' description='Popsicle + cocktail = refreshing summer treat'/>
                    <List.Item title='Bantam Pub' description='737 Ralph McGill Blvd NE, Atlanta, GA 30312'/>
                    <List.Item title='New Realm Brewing' description='550 Somerset Terrace NE Unit 101, Atlanta, GA 30306'/>
                </List.Accordion>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <List.Accordion title='Fun' titleStyle={{fontSize: 24, color: '#023047'}}>
                    <List.Item title='Skyline Park' description='Ponce City Market, 675 Ponce De Leon Ave NE, Atlanta, GA 30308'/>
                    <List.Item title='Illuminarium Atlanta'/>
                    <List.Item title='Peidmont Park'description='You can walk, run, or scooter down the beltine to Peidmont Park.'/>
                    <List.Item title='Shopping at Ponce'description='Allbirds, J.Crew, Lululemon, Anthropologie, Posman Books...the list goes on. '/>
                </List.Accordion>
            </Card.Content>
        </Card>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        top: 50,
    }
});

export default Recomendations;