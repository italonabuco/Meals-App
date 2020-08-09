import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors.js';
import {Platform, Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const commonStackNavigatorScreenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const MenuHeaderButton = (props) => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="Menu" iconName="menu-outline" onPress={props.onPress} />
  </HeaderButtons>
);

const Stack = createStackNavigator();

const MealsNavigator = (props) => (
  <Stack.Navigator
    initialRouteName="Categories"
    screenOptions={commonStackNavigatorScreenOptions}
    mode="modal">
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={(props) => ({
        title: 'Categories',
        headerLeft: () => (
          <MenuHeaderButton onPress={() => props.navigation.toggleDrawer()} />
        ),
      })}
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

const FavStack = createStackNavigator();

const FavoritesNavigator = (props) => (
  <FavStack.Navigator screenOptions={commonStackNavigatorScreenOptions}>
    <FavStack.Screen
      name="Favorites"
      component={FavoriteScreen}
      options={(props) => ({
        title: 'Your Favorites',
        headerLeft: () => (
          <MenuHeaderButton onPress={() => props.navigation.toggleDrawer()} />
        ),
      })}
    />
    <FavStack.Screen name="Meal Detail" component={MealDetailScreen} />
  </FavStack.Navigator>
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
    tabBarOptions={{
      activeTintColor: Colors.accentColor,
      labelStyle: {fontFamily: 'OpenSans-Regular'},
    }}
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
      options={{
        tabBarLabel:
          Platform.OS === 'android' ? (
            <Text style={{fontFamily: 'OpenSans-Bold'}}>Meals</Text>
          ) : (
            'Meals'
          ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesNavigator}
      options={{
        tabBarLabel:
          Platform.OS === 'android' ? (
            <Text style={{fontFamily: 'OpenSans-Bold'}}>Favorites!</Text>
          ) : (
            'Favorites!'
          ),
      }}
    />
  </Tab.Navigator>
);

const FilterStack = createStackNavigator();

const FiltersNavigator = () => (
  <FilterStack.Navigator screenOptions={commonStackNavigatorScreenOptions}>
    <FilterStack.Screen
      name="Filter"
      component={FiltersScreen}
      options={(props) => ({
        title: 'Filter Meals',
        headerLeft: () => (
          <MenuHeaderButton onPress={() => props.navigation.toggleDrawer()} />
        ),
      })}
    />
  </FilterStack.Navigator>
);

const Drawer = createDrawerNavigator();

const MainNavigator = (props) => (
  <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'OpenSans-Bold',
      },
    }}>
    <Drawer.Screen
      name="MealsFavs"
      component={MealsFavTabNavigator}
      options={{title: 'Meals'}}
    />
    <Drawer.Screen name="Filters" component={FiltersNavigator} />
  </Drawer.Navigator>
);

export default MainNavigator;
