import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MealDetailScreen = (props) => {
  const {text, route} = props;
  const {id, description} = route.params || {};
  return (
    <View style={styles.screen}>
      <Text>{text}</Text>
      {id && <Text>{id}</Text>}
      {description && <Text>{description}</Text>}
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
export default MealDetailScreen;
