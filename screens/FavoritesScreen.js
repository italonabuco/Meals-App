import React from 'react';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import {useSelector} from 'react-redux';

const FavoritesScreen = (props) => {
  const favMeals = useSelector(state => state.meals.favoritedMeals);
  return (
    <MealList
      listData={favMeals}
      onSelectMeal={(id) =>
        props.navigation.navigate('MealDetail', {mealId: id})
      }
    />
  );
};

export default FavoritesScreen;
