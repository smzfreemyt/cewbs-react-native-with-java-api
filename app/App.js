import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import HomeWrapper from './screens/Home/HomeWrapper';
import colors from './utils/colors';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.primary,
    background: colors.white,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <HomeWrapper />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
