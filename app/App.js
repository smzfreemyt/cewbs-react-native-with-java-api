import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import HomeWrapper from './screens/Home/HomeWrapper';
import Login from './screens/Login/Login';
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
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  console.log(isAuthenticated);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {!isAuthenticated ? <Login /> : <HomeWrapper />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
