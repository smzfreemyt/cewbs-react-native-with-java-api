import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, ToastAndroid, View} from 'react-native';
import FilterItem from './FilterItem';
import axios from '../../../axios';

const Filters = () => {
  const [cats, setCats] = useState(['all']);

  useEffect(() => {
    // const fetchCategories = async () => {
    //   try {
    //     const response = firestore().collection('categories');
    //     const data = await response.get();
    //     data.docs.forEach(item => {
    //       const catValue = item.data().category_name;
    //       setCats(oldCats => [...oldCats, catValue]);
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    // fetchCategories();
    axios
      .get('/categories')
      .then(response => {
        const categoriesData = response.data.content.map(data => {
          return {...data};
        });
        setCats(oldCats => [...oldCats, ...categoriesData]);
      })
      .catch(error => {
        if (error.response) {
          ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={cats}
        renderItem={({item}) => {
          return <FilterItem category={item} />;
        }}
        keyExtractor={(_, index) => index}
      />
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
});
