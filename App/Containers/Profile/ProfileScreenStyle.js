import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    padding: 10,
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    ...Fonts.style.h3,
    textAlign: 'center',
    marginBottom: 5,
    color: Colors.white,
    textShadowColor: Colors.primary,
    textShadowRadius: 2,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
  profileCard: {
    backgroundColor: Colors.white,
    padding: 10,
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
