import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FilterItem from './FilterItem';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';

const Filters = () => {
  const dispatch = useDispatch();

  const [cats, setCats] = useState(['all']);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = firestore().collection('categories');
        const data = await response.get();
        data.docs.forEach(item => {
          const catValue = item.data().category_name;
          setCats(oldCats => [...oldCats, catValue]);
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchCategories();
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
