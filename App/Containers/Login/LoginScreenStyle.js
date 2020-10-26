import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.complement,
  },
  logo: {
    flex: 0.75,
    alignSelf: 'center',
  },
  loginTop: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
  },
  loginBottom: {
    flex: 1,
  },
  loginButton: {
    backgroundColor: Colors.primary,
  },
})
