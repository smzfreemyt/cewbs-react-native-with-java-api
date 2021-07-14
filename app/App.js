import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import HomeWrapper from './screens/Home/HomeWrapper';
import Login from './screens/Auth/Login/Login';
import colors from './utils/colors';
import AuthWrapper from './screens/Auth/AuthWrapper';

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
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {!isAuthenticated ? <AuthWrapper /> : <HomeWrapper />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
