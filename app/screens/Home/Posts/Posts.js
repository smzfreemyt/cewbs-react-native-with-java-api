import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import PostItem from './PostItem';
import {useDispatch, useSelector} from 'react-redux';
import getRNDraftJSBlocks from 'react-native-draftjs-render';
import {uid} from 'uid';
import {setPost, filterPost} from '../../../stores/slices/postSlice';
import axios from '../../../axios';
import {setRefresh} from '../../../stores/slices/appSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.post.category);
  const filterPosts = useSelector(state => state.post.filterPosts);
  const refresh = useSelector(state => state.app.refresh);

  useEffect(() => {
    axios
      .get('/posts')
      .then(response => {
        let postData = response.data.content.map(data => {
          return {...data};
        });
        dispatch(setPost(postData));
        dispatch(filterPost(category));
        dispatch(setRefresh(false));
      })
      .catch(error => {
        if (error.response) {
          ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
        }
      });
    // console.log(filterPosts);
  }, [category, dispatch, refresh]);

  return (
    <ScrollView style={styles.postContainer}>
      {filterPosts.map(post => (
        <PostItem
          key={uid()}
          title={post.title}
          date={new Date(post.date_created)}
          category={post.category.name}>
          {getRNDraftJSBlocks({
            contentState: JSON.parse(post.body),
            customStyles: renderStyles,
            atomicHandler,
          })}
        </PostItem>
      ))}
    </ScrollView>
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
