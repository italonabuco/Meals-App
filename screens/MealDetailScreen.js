import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector, useDispatch} from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import {toggleFavoriteAction} from '../store/actions/meals';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const {route, navigation} = props;
  const {mealId} = route.params || {};

  const availableMeals = useSelector((state) => state.meals.meals);
  
  const dispatch = useDispatch();

  const executeToggleFavoriteAction = useCallback(
    (id) => dispatch(toggleFavoriteAction(id)),
    [dispatch],
  );

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favortie"
            iconName="star"
            onPress={() => executeToggleFavoriteAction(selectedMeal.id)}
          />
        </HeaderButtons>
      ),
    });
  }, [selectedMeal, executeToggleFavoriteAction]);

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration} m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient, index) => (
        <ListItem key={index}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, index) => (
        <ListItem key={index}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
export default MealDetailScreen;
