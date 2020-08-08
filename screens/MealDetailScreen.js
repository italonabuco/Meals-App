import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MEALS} from '../data/dummy-data';

const MealDetailScreen = (props) => {
  const {text, route, navigation} = props;
  const {mealId} = route.params || {};

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [selectedMeal]);

  return <View style={styles.screen}>{mealId && <Text>{mealId}</Text>}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MealDetailScreen;
