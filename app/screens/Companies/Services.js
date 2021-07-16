import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Linking} from 'react-native';
import TopBar from '../../components/TopBar';
import { Button } from 'react-native-paper';

const Services = ({navigation, route}) => {
  const [company, setCompany] = useState(route.params.data);
  console.log(company.data.services)
  const renderServices = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.yellowBox}
        onPress={ ()=>{ Linking.openURL(item.description)}}
        >
        <View style={styles.companyItem}>
          <Image source={{uri: item.logo}}
          style={styles.serviceImage}/>
          <Text style={styles.serviceName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <TopBar />
      <View style={styles.back}>
        <Button onPress={() => navigation.goBack()}>{'<< '}Back</Button>
      </View>
      <Text style={styles.screenTitle}>{company.data.name}'s Services</Text>
      <View style={styles.container}>
        <FlatList
          data={company.data.services}
          renderItem={({item}) => renderServices({item}, navigation.navigate)}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  back: {
    textAlign: 'left',
    width: '25%',
  },
  screenTitle: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 20,
  },
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
    alignContent: 'center',
    alignItems: 'center'
  },
  serviceImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  },
  serviceName: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold'
  }
});
