import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  contactContainer: {
    marginTop: 50,
    marginHorizontal: 20,
    flex: 1,
    marginBottom: 50,
  },
  feedScrollView: {
    flex: 1,
  },
  feedItems: {
    flex: 2.75,
  },
  topText: {
    ...Fonts.style.medium,
    marginBottom: 10,
  },
  bottomText: {
    marginTop: 10,
  },
  callButton: {
    backgroundColor: Colors.complementDark,
    width: '80%',
    alignSelf: 'flex-end',
  },
  mailButton: {
    backgroundColor: Colors.primary,
    width: '80%',
    alignSelf: 'flex-end',
  },
  addButton: {
    backgroundColor: Colors.complement,
    width: '80%',
    alignSelf: 'flex-end',
  },
  closeButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: Colors.error,
    height: 35,
  },
})
