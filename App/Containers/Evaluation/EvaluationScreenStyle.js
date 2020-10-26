import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  buttonNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commonButton: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    width: '40%',
  },
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
  },
  evaluationTestBottom: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  evaluationTestContainer: {
    flex: 1,
  },
  evaluationTestItems: {
    flex: 1,
  },
  evaluationTestTop: {
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  goBackButton: {
    backgroundColor: Colors.error,
    justifyContent: 'center',
    width: '40%',
  },
  slider: {
    flex: 3,
  },
  sliderContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  sliderLabel: {
    flex: 3,
  },
  sliderValue: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  testOpening: {
    ...Fonts.style.aboveAverage,
    color: Colors.primary,
  },
  testScrollView: {
    borderBottomWidth: 1,
    borderRadius: 10,
    borderTopWidth: 1,
    flex: 1,
    marginBottom: 20,
    padding: 10,
  },
})
