import { transform } from "@babel/core";
import React from "react";
import { useState } from "react";
import { Button, View, StyleSheet, TextInput } from "react-native";
import List from './List'

export default function Players({ items, navigation }) {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
     // display alert 
    }
    else if (name && isEditing) {
      // deal with edit
    }
    else {
      // show alert
      const newItem = {id: new Date().getTime().toString(),title:name}
      setList([...list, newItem])
      setName('')
    }
  }
    return (
    <View style={styles.container}>
      <View style={styles.groceryForm}>
        <h3>Add players</h3>
        <TextInput style={styles.grocery}
          underlineColorAndroid = "transparent"
          placeholder = " Joaquin"
          value={name} onChange={(e) => setName(e.target.value)} 
          />
          <View style={styles.groceryContainer}>
            <List items={list} />
          </View>
      </View>
        <View style={styles.button}>
            <Button 
                title= "Add Player"
                onPress={handleSubmit}
                />
        </View>
            <Button 
                title="Empezar Juego"
                onPress={ () => navigation.navigate('Questions', {
                  
                  title: 'Test'
                })}
                />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 65,
  },
  button: {
    padding: 12,
    marginTop: -10,
    borderRadius: 5
  },
  grocery: {
    padding: 8,
    paddingLeft: 10,
    backgroundColor: '#f1f5f8',
    borderRadius: 5,
    borderColor: 'transparent',
    fontSize: 12,
    flex: 1,
    color: '#617d98'

   },
   groceryContainer: {
    marginTop: 2
   },
   groceryForm: {
    color: '#063251',
    marginBottom: 150,
    textAlign: 'center',
    
   }
});
