import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = props => {
  const yellow = 'rgba(255,255,0,0.95)';
  const green = 'rgba(0,255,0,0.95)';
  const [background, setBackground]  = useState(yellow);

  const changeBackgroundColor = (background) => {
    background = yellow ? setBackground(green) : setBackground(yellow);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: background, marginBottom: 5, marginHorizontal: 20, borderRadius: 4}} onPress={changeBackgroundColor}>
      <View style={styles.listItem}>
        <Text>{props.text}</Text>
        <View style={styles.removeButton}>
          <Button
            color="#ff3300"
            title="X"
            onPress={props.onDelete.bind(this, props.id)} 
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    padding: 10,
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 1
  },
  removeButton: {
    width: "10%"
  }
})

export default ListItem;