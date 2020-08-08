import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';

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

  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
