import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const {navigation, route} = props;
  const {categoryId} = route.params || {};

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const selectedGategory = CATEGORIES.find((cat) => cat.id === categoryId);
  
  const displayedMeals = availableMeals.filter(
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
