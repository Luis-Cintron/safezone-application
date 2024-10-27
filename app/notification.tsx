import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notifications: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'flex-start', 
    backgroundColor: '#00008B', // Consistent dark blue background
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',           // Make title bold
    color: 'white',               // White text for contrast
    marginBottom: 20,  // White text for contrast
  },
});

export default Notifications;
 