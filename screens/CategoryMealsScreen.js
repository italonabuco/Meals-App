import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoryMealsScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Button title="Go to Meal Details" onPress={() => navigation.navigate('MealDetail', { id: '1', description: 'This is a description for this meal.'})}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoryMealsScreen;
