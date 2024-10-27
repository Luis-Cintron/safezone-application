import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';

const Dashboard: React.FC = () => {
  const handleLogout = () => {
    Alert.alert("Logged out!"); 
  };

  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutButton}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.toText}>To</Text>
        <Text style={styles.welcomeText}>SafeZone</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/report" style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Reports</Text>
        </Link>
        <Link href="/notification" style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Notifications</Text>
        </Link>
        <Link href="/calendar" style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Calendar</Text>
        </Link>
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#00008B',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  logoutButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  toText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonWrapper: {
    width: '60%',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Dashboard;
