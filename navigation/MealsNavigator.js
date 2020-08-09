import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors.js';
import {Platform} from 'react-native';

const Stack = createStackNavigator();

const MealsNavigator = (props) => (
  <Stack.Navigator
    initialRouteName="Categories"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }}
    mode="modal">
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{title: 'Categories'}}
    />
    <Stack.Screen
      name="CategoryMeal"
      component={CategoryMealsScreen}
      options={{title: 'Category Meal'}}
    />
    <Stack.Screen
      name="MealDetail"
      options={({route}) => ({title: route.params?.name})}>
      {(screenProps) => (
        <MealDetailScreen
          {...screenProps}
          {...props.mealScreen}
          extraProp="someInfo"
        />
      )}
    </Stack.Screen>
  </Stack.Navigator>
);

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const materialBottomTabConfig = {
  activeColor: 'white',
  barStyle: {backgroundColor: Colors.primaryColor, fontSize: 40},
  shifting: true,
};

const MealsFavTabNavigator = (props) => (
  <Tab.Navigator
    tabBarOptions={{activeTintColor: Colors.accentColor}}
    {...(Platform.OS === 'android' ? materialBottomTabConfig : {})}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        switch (route.name) {
          case 'Meals':
            iconName = focused ? 'restaurant' : 'restaurant-outline';
            break;
          case 'Favorites':
            iconName = focused ? 'star' : 'star-outline';
            break;
          default:
            iconName = 'home';
            break;
        }
        return (
          <Icon
            name={iconName}
            color={color}
            size={Platform.OS === 'android' ? 22 : size}
          />
        );
      },
      tabBarColor: (function () {
        switch (route.name) {
          case 'Meals':
            return Colors.primaryColor;
          case 'Favorites':
            return Colors.accentColor;
          default:
            return Colors.primaryColor;
        }
      })(),
    })}>
    <Tab.Screen
      name="Meals"
      component={MealsNavigator}
      options={{tabBarLabel: 'Meals'}}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoriteScreen}
      options={{tabBarLabel: 'Favorites!'}}
    />
  </Tab.Navigator>
);

export default MealsFavTabNavigator;
