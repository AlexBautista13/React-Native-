import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('alex');
  const [person, setPerson] = useState({ name: 'coko', age: 36 });

  const clickHandler = () => {
    setName('chun-li');
    setPerson({ name: 'Alex', age: 29 });
  }


  return (
    <View style={styles.container}>
      <Text>My name is {name} </Text>
      <Text>His name is {person.name} and his age is {person.age} </Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop:20,
  },
});
