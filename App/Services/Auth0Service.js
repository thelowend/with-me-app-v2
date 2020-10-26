import { Config } from 'App/Config';
import Auth0 from 'react-native-auth0';
import jwt from 'jwt-decode';

const auth0 = new Auth0(Config.Auth0);

function login() {
  return new Promise((resolve, reject) => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile email',
        audience: 'https://' + Config.Auth0.domain + '/userinfo',
      })
      .then((credentials) => {
        const user = jwt(credentials.idToken);
        resolve({ credentials: credentials, user: user });
      })
      .catch((error) => {
        console.log('Log in error: ', error);
        resolve(null);
      })
  });
}

function logout() {
  return new Promise((resolve, reject) => {
    auth0.webAuth
      .clearSession({})
      .then((callBackURL) => {
        console.log('Log out successful: ', callBackURL);
        resolve(null);
      })
      .catch((error) => {
        console.log('Log out cancelled: ', error);
        resolve(error);
      });
  });
}

export const auth0Service = {
  login,
  logout,
};
