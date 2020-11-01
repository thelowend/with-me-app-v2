import { StyleSheet } from 'react-native';
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
})