import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  profileCard: {
    flex: 1,
    flexDirection: 'column',
  },
  form: {
    width: '100%',
  },
  commonButton: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    width: '45%',
  },
  goBackButton: {
    backgroundColor: Colors.error,
    justifyContent: 'center',
    width: '45%',
  },
  buttonNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
