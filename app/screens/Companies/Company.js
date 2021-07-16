import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import TopBar from '../../components/TopBar';
import firestore from '@react-native-firebase/firestore';

const Company = ({navigation}) => {
  const renderItem = ({item}, navigate) => {
    const navigateToServicesHandler = () => {
      navigation.navigate('Services', {
        data: item,
      });
    };
    return (
      <TouchableOpacity
        style={styles.yellowBox}
        onPress={navigateToServicesHandler}>
        <View style={styles.companyItem}>
          <Image source={{uri: item.data.image}}
          style={styles.partnerImage}/>
          <Text style={styles.companyName}>{item.data.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
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
    alignContent: 'center',
    padding: 5
  },
  companyItem: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  partnerImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  },
  companyName: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default Company;
