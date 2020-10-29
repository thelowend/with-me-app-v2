import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  takeTestButton: {
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    marginTop: 20,
  },
})
