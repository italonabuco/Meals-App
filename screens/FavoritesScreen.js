import React from 'react';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
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
