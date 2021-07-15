import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../../../stores/slices/postSlice';

const FilterItem = ({category}) => {
  const dispatch = useDispatch();
  const categoryState = useSelector(state => state.post.category);

  const onClickCategoryHandler = () => {
    dispatch(setCategory(category));
  };

  const selectedBackground =
    category === categoryState
      ? {backgroundColor: colors.primary}
      : {backgroundColor: colors.secondary};
  const selectedColor =
    category === categoryState
      ? {color: colors.secondary}
      : {color: colors.primary};

  return (
    <TouchableOpacity
      onPress={onClickCategoryHandler}
      style={[styles.item, selectedBackground]}>
      <Text style={[styles.filterText, selectedColor]}>{category}</Text>
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
  },
  filterText: {
    textAlign: 'center',
  },
});
