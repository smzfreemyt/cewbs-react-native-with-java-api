import React, {useState} from 'react';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

const AuthWrapper = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthHandler = () => {
    setIsLogin(prev => !prev);
  };

  return isLogin ? (
    <Login toggleSignup={toggleAuthHandler} />
  ) : (
    <SignUp toggleLogin={toggleAuthHandler} />
  );
};

export default AuthWrapper;
