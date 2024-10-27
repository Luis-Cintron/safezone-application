// app/calendar.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Calendar as RNCalendar } from 'react-native-calendars';
import * as Calendar from 'expo-calendar';
import { useRouter } from 'expo-router';

const CalendarPage: React.FC = () => {
  const router = useRouter();
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);

  // Function to fetch events directly without setEvents
  const fetchEvents = async () => {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    console.log("Calendar Permission Status:", status);
    if (status === 'granted') {
      const calendars = await Calendar.getCalendarsAsync();
      console.log("Calendars:", calendars);
      if (calendars.length > 0) {
        const startDate = new Date(); // Current date
        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, startDate.getDate()); // One month from now

        const fetchedEvents = await Calendar.getEventsAsync(
          calendars.map(calendar => calendar.id), 
          startDate,
          endDate 
        );

        console.log("Fetched Events:", fetchedEvents); // Debugging log

        // Filter and sort upcoming events directly
        const filteredEvents = fetchedEvents
          .filter(event => new Date(event.startDate) >= new Date()) // Show only upcoming events
          .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()); // Sort by start date

        setUpcomingEvents(filteredEvents); // Set the filtered events
      } else {
        Alert.alert('No calendars found', 'Please add a calendar to view events.');
      }
    } else {
      Alert.alert('Permission denied', 'Unable to access calendar events.');
    }
  };

  useEffect(() => {
    fetchEvents(); // Fetch events when the component mounts
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>

      {/* Non-Interactive Calendar Component */}
      <RNCalendar
        markingType={'multi-dot'} // Marking multiple events
        markedDates={{
          ...upcomingEvents.reduce((acc, event) => {
            const dateKey = new Date(event.startDate).toISOString().split('T')[0];
            acc[dateKey] = { dots: [{ key: 'event', color: 'blue' }] };
            return acc;
          }, {} as Record<string, any>)
        }}
        style={styles.calendar}
        enableSwipeMonths={false} // Disable swiping between months
        onDayPress={() => {}} // Disable day press action
        theme={{
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          monthTextColor: 'black',
          textDisabledColor: '#d9e1e8',
          arrowColor: 'orange',
        }}
      />

      {/* List of Upcoming Events */}
      {upcomingEvents.length > 0 ? (
        <FlatList
          data={upcomingEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.event}>
              <Text style={styles.eventTitle}>{item.title || 'No Title'}</Text>
              <Text>{item.startDate ? new Date(item.startDate).toLocaleString() : 'No Start Date'}</Text>
              <Text>{item.endDate ? new Date(item.endDate).toLocaleString() : 'No End Date'}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noEventsText}>No upcoming events.</Text>
      )}

      {/* Custom Go Back Button */}
      <TouchableOpacity style={styles.goBackButton} onPress={() => router.push('/')}>
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  calendar: {
    marginBottom: 20,
    width: '100%', // Ensure it takes the full width
  },
  event: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    width: '100%',
  },
  eventTitle: {
    fontWeight: 'bold',
  },
  noEventsText: {
    fontStyle: 'italic',
    color: '#777',
  },
  goBackButton: {
    backgroundColor: '#4CAF50', // Green background
    borderRadius: 25,           // Rounded corners
    padding: 10,                // Padding for the button
    marginTop: 20,              // Space above the button
  },
  goBackButtonText: {
    color: 'white',             // White text color
    fontSize: 18,               // Button text size
    textAlign: 'center',        // Center text
  },
});

export default CalendarPage;
