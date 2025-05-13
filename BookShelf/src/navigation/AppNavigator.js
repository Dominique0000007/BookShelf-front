import { RectButton} from "react-native-svg";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createMaterialTopTabNavigator } from "react-navigation-material-top-tabs";
import React from "react";

const AppNavigator = createStackNavigator({});

export default createAppContainer(AppNavigator);