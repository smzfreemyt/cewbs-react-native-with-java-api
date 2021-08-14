import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import TopBar from '../../components/TopBar';
import colors from '../../utils/colors';
import axios from '../../axios';
import Loading from '../../components/Loading';
import NoData from '../../components/NoData';
import {useDispatch, useSelector} from 'react-redux';
import {setRefresh} from '../../stores/slices/appSlice';

const Company = ({navigation}) => {
  const dispatch = useDispatch();
  const refresh = useSelector(state => state.app.refresh);

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const renderItem = ({item}) => {
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
          <Image source={{uri: item.data.logo}} style={styles.partnerImage} />
          <Text style={styles.companyName}>{item.data.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    axios
      .get('/companies')
      .then(response => {
        console.log(JSON.stringify(response.data, undefined, 4));
        let companyData = response.data.content.map(data => {
          return {data: {...data}};
        });
        setCompanies(companyData);
      })
      .catch(error => {
        if (error.response) {
          ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
        }
      })
      .finally(() => {
        setLoading(false);
        refresh && dispatch(setRefresh(false));
      });
  }, [dispatch, refresh]);

  return (
    <SafeAreaView>
      <TopBar />
      <Text style={styles.heading}>Company Partners</Text>
      <View style={styles.container}>
        {companies.length > 0 ? (
          <FlatList
            data={companies}
            renderItem={({item}) => renderItem({item})}
            numColumns={2}
            keyExtractor={item => item.data.id}
          />
        ) : loading ? (
          <Loading />
        ) : (
          <NoData />
        )}
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
  },
  partnerImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  companyName: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Company;
