export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavoriteAction = (id) => {
  return {type: TOGGLE_FAVORITE, mealId: id};
};
