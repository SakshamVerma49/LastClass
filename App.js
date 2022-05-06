import React from "react";
import HomeScreen from "./screens/Home";

import ContentFiltering from "./screens/contentFiltering";
import DemographicFiltering from "./screens/demographicFiltering";

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'raect-navigation-stack';
import {createAppContainer} from 'react-navigation';

export default function App() {
  return <HomeScreen />;
}

const BottomTabNavigator = createBottomTabNavigator({
  ContentFiltering: ContentFiltering,
  DemographicFiltering: DemographicFiltering
});

const StackNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  BottomTabNavigator: BottomTabNavigator,
});

const AppContainer = createAppContainer(StackNavigator);