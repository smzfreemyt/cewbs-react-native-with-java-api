import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import TopBar from '../../components/TopBar';

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item daw",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Fourth Item",
    },
  ];

const renderItem = ({ item }) => {
    return (
        <View style={styles.yellowBox}>
            <Text>{ item.title }</Text>
        </View>
    );
};

const Company = () => {
    return (
        <SafeAreaView>
            <TopBar />
            <Text style={styles.heading}>Companies</Text>
            <View  style={styles.container}>
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    numColumns={2}
                    key={'#'}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 20,
    },
    yellowBox: {
        backgroundColor: '#FFFF00',
        flexWrap: 'wrap',
        marginBottom: 20,
        width: '50%',
        marginRight: 20
    },
});

export default Company
