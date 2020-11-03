import 'react-native-gesture-handler';
import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal';
import { Config } from 'App/Config';
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
    OneSignal.init(Config.ONESIGNAL_KEY);

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
  }

  onOpened(openResult) {
    const contact = {
      user_id: openResult.notification.payload.additionalData.user_id,
      feed: JSON.parse(openResult.notification.payload.additionalData.feed)
    };
    NavigationService.navigate('HelpRequestScreen', { contact: contact });
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
