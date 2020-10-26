import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  FBButton: {
    alignItems: 'center',
    backgroundColor: Colors.facebook,
    justifyContent: 'flex-start',
    marginBottom: 5,
    marginTop: 5,
  },
  FBSection: {
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    marginTop: 10,
    padding: 10,
    width: '75%',
  },
  SectionHeader: {
    backgroundColor: Colors.white,
    padding: 0,
  },
  SectionHeaderText: {
    color: Colors.white,
    textShadowColor: Colors.primaryDarker,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 1,
  },
  TWButton: {
    alignItems: 'center',
    backgroundColor: Colors.twitter,
    justifyContent: 'flex-start',
    marginBottom: 5,
    marginTop: 5,
  },
  TWSection: {
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    padding: 10,
    width: '75%',
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
  warningCard: {
    alignItems: 'center',
    backgroundColor: Colors.complementDark,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  warningCardIcon: {
    paddingLeft: 5,
    paddingRight: 10,
    width: '10%',
  },
  warningCardText: {
    width: '90%',
  },
})
