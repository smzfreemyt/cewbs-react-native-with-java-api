import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import PostItem from './PostItem';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import getRNDraftJSBlocks from 'react-native-draftjs-render';
import {uid} from 'uid';
import {setPost, filterPost} from '../../../stores/slices/postSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.post.category);
  const filterPosts = useSelector(state => state.post.filterPosts);
  useEffect(() => {
    const subscriber = firestore()
      .collection('posts')
      .onSnapshot(documentSnapshot => {
        let postData = documentSnapshot.docs.map(data => data.data());
        dispatch(setPost(postData));
        dispatch(filterPost(category));
      });
    return subscriber;
  }, [category, dispatch]);

  return (
    <View style={styles.postContainer}>
      {filterPosts.map(post => (
        <PostItem
          key={uid()}
          title={post.title}
          date={new Date(post.created_at)}
          category={post.category}>
          {getRNDraftJSBlocks({
            contentState: post.body,
            customStyles: renderStyles,
            atomicHandler,
          })}
        </PostItem>
      ))}
    </View>
  );
};

export default Posts;
const renderStyles = StyleSheet.flatten({
  unstyled: {
    textAlign: 'left',
  },
});

const atomicHandler = (item, entityMap) => {
  switch (entityMap[item.entityRanges[0].key.toString()].type) {
    case 'IMAGE':
      return (
        <View key={item.key} style={{flex: 1}}>
          <Image
            style={{width: Dimensions.get('window').width - 50, height: 161}}
            source={{
              uri: entityMap[item.entityRanges[0].key.toString()].data.src,
            }}
          />
        </View>
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 15,
  },
});
