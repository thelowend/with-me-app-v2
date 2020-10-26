import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  cardButton: {
    justifyContent: 'center',
    marginBottom: 5,
  },
  cardHeader: {
    backgroundColor: Colors.complement,
  },
  cardText: {
    ...Fonts.style.aboveAverage,
    textAlign: 'center',
  },
  cardTitle: {
    ...Fonts.style.big,
    color: Colors.white,
    textAlign: 'center',
  },
  completeProfileButton: {
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    justifyContent: 'center',
  },
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
})
