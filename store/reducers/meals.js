import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoritedMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoritedMeals.findIndex(
        (meal) => meal.id === action.mealId,
      );
      if (existingIndex >= 0) {
        //if meal is already inside favoritedMeals array, remove it from this array.
        const updatedFavMeals = [...state.favoritedMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoritedMeals: updatedFavMeals};
      } else {
        // if meals is not inside favoritedMeals array, add it to this array.
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return {...state, favoritedMeals: state.favoritedMeals.concat(meal)};
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.isVegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.isVegetarian && !meal.isVegeterian) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals};
    default:
      return state;
  }
};

export default mealsReducer;
