import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = (props) => {
  const {navigation} = props;

  const renderGriditem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => navigation.navigate('MealDetail')}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGriditem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
export default CategoriesScreen;
