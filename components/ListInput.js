import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, ImageBackground } from 'react-native';

const ListInput = props => {
  const [enteredItem, setEnteredItem] = useState('');

  const image = { uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80' };
  
  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText);
  };

  const addItemHandler = () => {
    props.onAddItem(enteredItem);
    setEnteredItem('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <ImageBackground source={image} style={styles.image} imageStyle={{opacity: 0.6}}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Add item..." 
            onChangeText={itemInputHandler}
            value={enteredItem}
            autoFocus={true}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="CANCEL" 
                onPress={props.onCancel}
                color="red"
              />
            </View>
            <View style={styles.button}>
              <Button 
                title="ADD" 
                onPress={addItemHandler}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  input: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 2,
    marginVertical: 20,
    padding: 10, 
    paddingLeft: 14,
    backgroundColor: '#f2f2f2',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: 'black'
  },
})

export default ListInput;