import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const {navigation, route} = props;
  const {categoryId} = route.params || {};

  const selectedGategory = CATEGORIES.find((cat) => cat.id === categoryId);

  useEffect(() => {
    navigation.setOptions({title: selectedGategory.title});
  }, [selectedGategory]);

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Text>{selectedGategory.title || 'N/A'}</Text>
      <Button
        title="Go to Meal Details"
        onPress={() =>
          navigation.navigate('MealDetail', {
            id: '1',
            description: 'This is a description for this meal.',
          })
        }
      />
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
