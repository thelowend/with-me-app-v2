import 'react-native-gesture-handler';
import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import createStore from 'App/Stores';
import RootScreen from './Containers/Root/RootScreen';
import SplashScreen from './Containers/SplashScreen/SplashScreen';
import NavigationService from './Services/NavigationService';

const { store, persistor } = createStore();

export default class App extends Component {
  constructor(properties) {
    super(properties);
    // OneSignal.setLogLevel(OneSignal.LOG_LEVEL.DEBUG, OneSignal.LOG_LEVEL.DEBUG)
    OneSignal.init('f9adf46b-d1d5-463f-8858-b934ef8d908c');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log('Notification received: ', notification);
    // TODO: Link to contact user
  }

  onOpened(openResult) {
    //console.log('Message: ', openResult.notification.payload.body)
    //console.log('Data: ', openResult.notification.payload.additionalData)
    //console.log('isActive: ', openResult.notification.isAppInFocus)
    //console.log('openResult: ', openResult)
    const data = openResult.notification.payload.additionalData;
    NavigationService.navigate('ContactScreen', { contact: data });
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    );
  }
}
