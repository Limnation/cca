import { Text, Card, Title, Paragraph, List } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Recomendations = () => {
    return (
        <View style={styles.container}>
    {/* <List.AccordionGroup>
        <List.Accordion title="Eat" id="1">
            <List.Item title="Two Urban Licks" />
            <List.Item title="Two Urban Licks" />
            <List.Item title="Two Urban Licks" />
        </List.Accordion>
        <List.Accordion title="Drink" id="2">
            <List.Item title="Item 2" />
            <List.Item title="Two Urban Licks" />
            <List.Item title="Two Urban Licks" />
            <List.Item title="Two Urban Licks" />
        </List.Accordion>
        <List.Accordion title="Fun" id="3">
            <List.Item title="Item 3" />
        </List.Accordion>

  </List.AccordionGroup> */}

        <Card>
            <Card.Content>
                <List.Accordion title='Eat' titleStyle={{fontSize: 24, color: '#023047'}}>
                    <List.Item title='Two Urban Licks'/>
                    <List.Item title='Bar Vegan' description='Delicious vegan food for everyone.'/>
                    <List.Item title='Two Urban Licks'/>
                </List.Accordion>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <List.Accordion title='Drink' titleStyle={{fontSize: 24, color: '#023047'}}>
                    <List.Item title='King of Pops Bar'/>
                    <List.Item title='Two Urban Licks'/>
                    <List.Item title='Two Urban Licks'/>
                </List.Accordion>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <List.Accordion title='Fun' titleStyle={{fontSize: 24, color: '#023047'}}>
                    <List.Item title='Skyline Park' description='Ponce City Market, 675 Ponce De Leon Ave NE, Atlanta, GA 30308'/>
                    <List.Item title='Illuminarium Atlanta'/>
                    <List.Item title='Peidmont Park'description='You can walk, run, or scooter down the beltine to Peidmont Park.'/>
                </List.Accordion>
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