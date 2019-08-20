import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ComponentsScreen = ({ navigation }) => {
  const name = 'Stephen';

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
      <Button title="Go to List Demo" onPress={() => navigation.navigate('List')} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
