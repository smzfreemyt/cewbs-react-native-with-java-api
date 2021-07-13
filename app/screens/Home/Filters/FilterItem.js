import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../utils/colors';

const FilterItem = ({category}) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.item}>
      <Text style={styles.filterText}>{category}</Text>
    </TouchableOpacity>
  );
};

export default FilterItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffff00',
    minWidth: 80,
    padding: 10,
    marginRight: 15,
    elevation: 5,
    // shadowColor: colors.primary,
    // shadowOffset: {
    //   width: 100,
    //   height: 100,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 10,
  },
  filterText: {
    textAlign: 'center',
  },
});
