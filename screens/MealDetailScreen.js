import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MealDetailScreen = (props) => {
  const {text} = props;
  return (
    <View style={styles.screen}>
      <Text>{text}</Text>
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
