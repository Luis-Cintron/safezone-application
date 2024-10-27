import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Reports: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reports Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    backgroundColor: '#00008B', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',          
    color: 'white',                
    marginBottom: 20,   
  },
}); 

export default Reports;
