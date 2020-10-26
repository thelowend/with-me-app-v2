import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  appHeader: {
    backgroundColor: Colors.primary,
    marginBottom: 10,
  },
  appHeaderTitle: {
    marginLeft: 10,
    textShadowColor: Colors.primaryDarker,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 1,
  },
  appHeaderhelper: {
    backgroundColor: Colors.complementDark,
    marginBottom: 10,
  },
  appHeaderuser: {
    backgroundColor: Colors.primary,
    marginBottom: 10,
  },
})
