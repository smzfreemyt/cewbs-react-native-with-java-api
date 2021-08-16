import React, {useCallback, useEffect} from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import HomeWrapper from './screens/Home/HomeWrapper';
import colors from './utils/colors';
import AuthWrapper from './screens/Auth/AuthWrapper';
import jwtDecode from 'jwt-decode';
import {logout} from './stores/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const validateToken = useCallback(async () => {
    const token = await AsyncStorage.getItem('loginToken');
    const tokena = await AsyncStorage.getAllKeys();
    console.log(tokena);
    if (token) {
      const {exp} = jwtDecode(token);
      if (Date.now() >= exp * 1000) {
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  useEffect(() => {
    validateToken();
  }, [dispatch, validateToken]);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {!isAuthenticated ? <AuthWrapper /> : <HomeWrapper />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
