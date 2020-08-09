import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';

const MenuHeaderButton = (props) => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title={props.title}
      iconName={props.iconName}
      onPress={props.onPress}
    />
  </HeaderButtons>
);

export default MenuHeaderButton;
