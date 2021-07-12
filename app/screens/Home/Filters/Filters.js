import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FilterItem from './FilterItem';

const Filters = () => {
  const data = [
    {key: '1', data: 'All'},
    {key: '2', data: 'Events'},
    {key: '3', data: 'MindNation'},
    {key: '4', data: 'Maxicare'},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({item}) => {
          return <FilterItem category={item.data} />;
        }}
        keyExtractor={(item, index) => index}
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
