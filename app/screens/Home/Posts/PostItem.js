import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import colors from '../../../utils/colors';

const PostItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Avatar.Icon size={30} icon="account" />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <Text>{props.children}</Text>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    padding: 10,
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
  },
});
