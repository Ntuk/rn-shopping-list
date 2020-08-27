import React, { useState } from 'react';
import { StyleSheet, Button, View, FlatList, ImageBackground, Image } from 'react-native';

import ListItem from './components/ListItem';
import ListInput from './components/ListInput';

export default function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addItemHandler = itemTitle => {
    setShoppingList(currentItem => [
      ...currentItem, 
      { id: Math.random().toString(), value: itemTitle }
    ]);
    setIsAddMode(false);
  };

  const removeItemHandler = itemId => {
    setShoppingList(shoppingList => {
      return shoppingList.filter((item) => item.id !== itemId);
    });
  };

  const cancelItemAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <ImageBackground source={require('./assets/bg.jpg')} style={styles.image}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('./assets/ezgs.png')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Add new item" onPress={() => setIsAddMode(true)} />
        </View>
        <View style={styles.listContainer}>
          <ListInput visible={isAddMode} onAddItem={addItemHandler} onCancel={cancelItemAdditionHandler} />
          <FlatList 
            keyExtractor={(item, index) => item.id}
            data={shoppingList} 
            renderItem={itemData => 
              <ListItem
                id={itemData.item.id} 
                onDelete={removeItemHandler} 
                text={itemData.item.value}
              />
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  logo: {
    borderRadius: 100,
    width: 250,
    height: 250,
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 30,
    width: '100%'
  },
  listContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }
});
