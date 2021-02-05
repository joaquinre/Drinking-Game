import React from "react";
import { Button, View, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.button}>
            <Button 
             title="Jugar"
             onPress={ () => navigation.navigate('Questions')}
            />
        </View>
          <Button 
           title="Continue"
           onPress={ () => navigation.navigate('Players')}
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
    margin: 20,
  },
  button: {
    padding: 12,
    marginTop: -10
  }
});