import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'

export default StyleSheet.create({
  FBButton: {
    alignItems: 'center',
    backgroundColor: Colors.facebook,
    justifyContent: 'flex-start',
    marginBottom: 5,
    marginTop: 5,
  },
  TWButton: {
    alignItems: 'center',
    backgroundColor: Colors.twitter,
    justifyContent: 'flex-start',
    marginBottom: 5,
    marginTop: 5,
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
});