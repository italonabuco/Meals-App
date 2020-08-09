import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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

const Tab = createBottomTabNavigator();

const MealsFavTabNavigator = (props) => (
  <Tab.Navigator
    tabBarOptions={{activeTintColor: Colors.accentColor}}
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
        return <Icon name={iconName} color={color} size={size} />;
      },
    })}>
    <Tab.Screen name="Meals" component={MealsNavigator} options={{tabBarLabel: 'Meals'}}/>
    <Tab.Screen name="Favorites" component={FavoriteScreen} options={{tabBarLabel: 'Favorites!'}}/>
  </Tab.Navigator>
);

export default MealsFavTabNavigator;
