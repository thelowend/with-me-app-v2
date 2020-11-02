import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import MainScreen from 'App/Containers/Main/MainScreen'
import ProfileTab from 'App/Containers/Main/ProfileTab/ProfileTab'
import EvaluationScreen from 'App/Containers/Evaluation/EvaluationScreen'
import ContactScreen from 'App/Containers/Contact/ContactScreen'
import ContactHelperScreen from 'App/Containers/Contact/ContactHelperScreen'
import HelpRequestScreen from 'App/Containers/Contact/HelpRequestScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    LoginScreen: LoginScreen,
    MainScreen: MainScreen,
    ProfileTab: ProfileTab,
    EvaluationScreen: EvaluationScreen,
    ContactScreen: ContactScreen,
    ContactHelperScreen: ContactHelperScreen,
    HelpRequestScreen: HelpRequestScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
