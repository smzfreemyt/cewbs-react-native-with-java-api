import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
  ToastAndroid,
} from 'react-native';
import TopBar from '../../components/TopBar';
import {Button} from 'react-native-paper';
import axios from '../../axios';
import colors from '../../utils/colors';
import NoData from '../../components/NoData';
import Loading from '../../components/Loading';

const Services = ({navigation, route}) => {
  const company = route.params.data;
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/companies/${company.data.id}/services`)
      .then(response => {
        console.log('ax', loading);
        console.log(JSON.stringify(response.data, undefined, 4));
        let servicesData = response.data.content.map(data => {
          return {data: {...data}};
        });
        setServices(servicesData);
        setLoading(false);
      })
      .catch(error => {
        if (error.response) {
          ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
        }
        setLoading(false);
      });
  }, [company.data.id, loading]);

  const renderServices = ({item}) => {
    console.log(item);
    return (
      <TouchableOpacity
        style={styles.yellowBox}
        onPress={() => {
          Linking.openURL(item.data.accessLink).catch(err => {
            Promise.reject(err);
            ToastAndroid.show('Could not open URL!', ToastAndroid.LONG);
          });
        }}>
        <View style={styles.companyItem}>
          <Image source={{uri: item.data.logo}} style={styles.serviceImage} />
          <Text style={styles.serviceName}>{item.data.name}</Text>
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
        {services.length > 0 ? (
          <FlatList
            data={services}
            renderItem={({item}) => renderServices({item}, navigation.navigate)}
            numColumns={2}
            keyExtractor={item => item.id}
          />
        ) : loading ? (
          <Loading />
        ) : (
          <NoData />
        )}
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
    backgroundColor: colors.secondary,
    flexWrap: 'wrap',
    marginBottom: 20,
    width: '50%',
    marginRight: 20,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 5,
  },
  companyItem: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  serviceImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  serviceName: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
