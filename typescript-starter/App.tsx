import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import { FontAwesome } from '@expo/vector-icons';
import { ThemeProvider } from 'react-native-elements';
import { setNavigator } from './src/navigationRef';

const trackListFlow = createStackNavigator({
  Image: ImageScreen,
  Counter: CounterScreen,
});

trackListFlow.navigationOptions = {
  title: 'Image',
  tabBarIcon: <FontAwesome name="th-list" size={20} />,
};

const colorSquareFlow = createStackNavigator({
  Color: ColorScreen,
  Square: SquareScreen,
});

colorSquareFlow.navigationOptions = {
  title: 'ColorSquare',
  tabBarIcon: <FontAwesome name="th-list" size={20} />,
};

const switchNavigator = createSwitchNavigator({
  Home: HomeScreen,
  loginFlow: createStackNavigator({
    Components: ComponentsScreen,
    List: ListScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    Text: TextScreen,
    Box: BoxScreen,
    colorSquareFlow,
    Home: HomeScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <ThemeProvider>
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </ThemeProvider>
  );
};
