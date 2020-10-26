import React from 'react'
import { View, Image } from 'react-native'
import Style from './SplashScreenStyle'
import { Images } from 'App/Theme'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={Style.container}>
        <Image style={Style.splash} source={Images.logo} resizeMode={'contain'} />
      </View>
    )
  }
}
