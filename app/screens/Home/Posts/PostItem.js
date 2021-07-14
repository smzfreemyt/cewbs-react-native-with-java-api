import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar, Colors} from 'react-native-paper';
import colors from '../../../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

const PostItem = props => {
  console.log('tex', props.children);
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Icon size={30} icon="account" />
          <Text style={styles.user}>Admin</Text>
        </View>
        <View sryle={styles.date}>
          <Text>{moment(props.date).format('MMM DD, YYYY')}</Text>
        </View>
      </View>
      <View style={styles.titleHeader}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.category}>
          <MaterialCommunityIcons name="tag" color={colors.black} size={26} />
          <Text>{props.category}</Text>
        </View>
      </View>
      <ScrollView style={styles.contentContainer}>{props.children}</ScrollView>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey300,
    padding: 10,
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    paddingBottom: 5,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  user: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    width: 100,
  },
  content: {
    flexShrink: 1,
  },
});
