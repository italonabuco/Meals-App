import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createStackNavigator();

const MealsNavigator = (props) => (
  <Stack.Navigator initialRouteName="Categories">
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
      options={{title: props.mealTitle}}
    >
        {screenProps => <MealDetailScreen {...screenProps} {...props.mealScreen} extraProp="someInfo"/>}
    </Stack.Screen>
  </Stack.Navigator>
);

export default MealsNavigator;
