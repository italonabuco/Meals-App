import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';

import Color from '../constants/Colors';
import MenuHeaderButton from '../components/MenuHeaderButton';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{true: Color.primaryColor, false: ''}}
        thumbColor={Platform.OS === 'android' ? Color.primaryColor : ''}
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const {navigation} = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilter = {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVegetarian,
    };
    console.log(appliedFilter);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MenuHeaderButton
          title="Save"
          iconName="save-outline"
          onPress={saveFilters}
        />
      ),
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        value={isGlutenFree}
        onChange={(value) => setIsGlutenFree(value)}
      />
      <FilterSwitch
        label="Lactose-Free"
        value={isLactoseFree}
        onChange={(value) => setIsLactoseFree(value)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={(value) => setIsVegan(value)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={(value) => setIsVegetarian(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
});
export default FiltersScreen;
