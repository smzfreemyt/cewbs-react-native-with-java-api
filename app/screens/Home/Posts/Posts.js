import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PostItem from './PostItem';

const Posts = () => {
  return (
    <View style={styles.postContainer}>
      <PostItem title="Mind Nation">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
        consequuntur praesentium quidem numquam, adipisci itaque, veritatis
        corporis in odio quas id et, voluptas repellendus. Impedit suscipit non
        accusamus id at.
      </PostItem>
      <PostItem title="Maxicare">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo error
        dicta veritatis vitae laudantium? Mollitia quis natus eaque in adipisci
        minima molestiae unde atque! Deserunt consequuntur dicta unde. Voluptas,
        quis?
      </PostItem>
      <PostItem title="Game event">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos laborum
        error velit. Sequi omnis rem esse nisi inventore, labore quis sed culpa
        libero eveniet praesentium officiis illo a, laborum consectetur.
      </PostItem>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  postContainer: {
    padding: 15,
  },
});
