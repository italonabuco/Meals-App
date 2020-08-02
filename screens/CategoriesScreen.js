import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const renderGriditem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = (props) => {
  const {navigation} = props;
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
    height: 150
  },
});
export default CategoriesScreen;
