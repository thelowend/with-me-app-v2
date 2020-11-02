import { StyleSheet } from 'react-native';
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
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
    width: '10%',
  },
  warningCardText: {
    width: '90%',
  },
  errorCard: {
    alignItems: 'center',
    backgroundColor: Colors.error,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  errorCardIcon: {
    paddingLeft: 5,
    paddingRight: 10,
    width: '10%',
  },
  errorCardText: {
    width: '90%',
  },
})