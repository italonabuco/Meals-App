import React, {useEffect} from 'react';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const {navigation, route} = props;
  const {categoryId} = route.params || {};

  const selectedGategory = CATEGORIES.find((cat) => cat.id === categoryId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  useEffect(() => {
    navigation.setOptions({title: selectedGategory.title});
  }, [selectedGategory]);

  return (
    <MealList
      listData={displayedMeals}
      onSelectMeal={(id) =>
        props.navigation.navigate('MealDetail', {mealId: id})
      }
    />
  );
};

export default CategoryMealsScreen;
