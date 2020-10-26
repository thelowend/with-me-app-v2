import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    margin: 30,
    flex: 1,
  },
  contactContainer: {
    flex: 1,
  },
  feedScrollView: {
    flex: 1,
  },
  feedItems: {
    flex: 2.75,
  },
  topText: {
    ...Fonts.style.big,
    marginBottom: 10,
  },
  bottomText: {
    marginTop: 10,
  },
  callButton: {
    backgroundColor: Colors.complementDark,
  },
  mailButton: {
    backgroundColor: Colors.primary,
  },
  closeButton: {
    backgroundColor: Colors.error,
  },
})
