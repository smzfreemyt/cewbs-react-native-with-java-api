import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import TopBar from '../../components/TopBar';
import firestore from '@react-native-firebase/firestore';
import {Avatar} from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item daw',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fourth Item',
  },
];

const renderItem = ({item}, navigate) => {
  const navigateToServicesHandler = () => {
    navigate('Services', {
      uid: item.uid,
    });
  };
  return (
    <TouchableOpacity
      style={styles.yellowBox}
      onPress={navigateToServicesHandler}>
      <View style={{flex: 1}}>
        <Avatar.Image
          size={80}
          source={{uri: item.data.image}}
          style={styles.partnerImage}
        />
        <Text>{item.data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Company = ({navigation}) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('companies')
      .onSnapshot(documentSnapshot => {
        let companyData = documentSnapshot.docs.map(data => {
          return {uid: data.id, data: data.data()};
        });
        setCompanies(companyData);
      });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView>
      <TopBar />
      <Text style={styles.heading}>Company Partners</Text>
      <View style={styles.container}>
        <FlatList
          data={companies}
          renderItem={({item}) => renderItem({item}, navigation.navigate)}
          numColumns={2}
          keyExtractor={item => item.uid}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 20,
  },
  yellowBox: {
    backgroundColor: '#FFFF00',
    flexWrap: 'wrap',
    marginBottom: 20,
    width: '50%',
    marginRight: 20,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  partnerImage: {},
});

export default Company;
