import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTile = (props) => {
  const {title, onSelect, color} = props;
  let TouchableCmp = TouchableOpacity;

  // if android and if it is a version that supports touchable native feedback
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{flex: 1}} onPress={onSelect}>
        <View style={{...styles.container, ...{backgroundColor: color}}}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10, // avoid that rippler effect goes off the component
    overflow: 'hidden' // avoid that rippler effect goes off the component
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black', // only effects ios
    shadowOpacity: 0.26, // only effects ios
    shadowOffset: {width: 0, height: 2}, // only effects ios
    shadowRadius: 10, // only effects ios
    elevation: 3, // for android
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    textAlign: 'right',
  },
});

export default CategoryGridTile;
