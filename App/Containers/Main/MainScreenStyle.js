import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    margin: 0,
  },
  commonButtonComp: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.complementDark,
    marginTop: 20,
  },
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
  },
  // eslint-disable-next-line react-native/no-color-literals
  error: {
    ...Fonts.style.normal,
    color: 'red',
    marginBottom: 5,
    textAlign: 'center',
  },
  tabHeader: {
    backgroundColor: Colors.complement,
  },
  tabContent: {
    flex: 1,
    padding: 10,
  },
  roundIcon: {
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 6,
    paddingTop: 6,
  },
  iconSync: {
    backgroundColor: Colors.error,
    borderRadius: 15,
    fontSize: 14,
    lineHeight: 14,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
  },
  iconUnSync: {
    backgroundColor: Colors.success,
    borderRadius: 15,
    fontSize: 14,
    lineHeight: 14,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
  },
  instructions: {
    ...Fonts.style.normal,
    fontStyle: 'italic',
    marginBottom: 5,
    textAlign: 'center',
  },
  loader: {
    ...ApplicationStyles.loader,
    color: Colors.primary,
  },
  loading: {
    ...Fonts.style.normal,
    marginBottom: 5,
    textAlign: 'center',
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  logoContainer: {
    height: 300,
    marginBottom: 25,
    width: '100%',
  },
  result: {
    ...Fonts.style.normal,
    marginBottom: 5,
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
  },
  submitModal: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    margin: 15,
  },
  submitModalTextArea: {
    margin: 5,
  },
  submitModalTitle: {
    ...Fonts.style.h3,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonCloseSubmitModal: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.complement,
    marginBottom: 15,
    marginTop: 10,
  },
  commonButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    marginTop: 10,
  },
  actionButton: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.complement,
    marginVertical: 10,
    width: '75%',
  },
  refreshButton: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    marginBottom: 10,
    width: '75%',
  },
  warningButton: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.error,
    width: '75%',
  },
  text: {
    ...Fonts.style.normal,
    marginBottom: 5,
    textAlign: 'center',
  },
  title: {
    ...Fonts.style.h2,
    marginBottom: 10,
    textAlign: 'center',
  },
  userScreenContainer: {
    flex: 1,
  },
})
