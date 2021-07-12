import React from 'react';
import {Appbar} from 'react-native-paper';
import Logo from './Logo';

const TopBar = () => {
  return (
    <Appbar.Header>
      <Logo />
    </Appbar.Header>
  );
};

export default TopBar;
