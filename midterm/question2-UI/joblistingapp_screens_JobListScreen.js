import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function JobListScreen() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://jsonfakery.com/job-posts');
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          console.log('✅ Jobs fetched:', data);
          setJobs(data);
        } else {
          console.log('⚠️ API returned empty or unexpected format. Using fallback data.');
          setJobs([
            { id: 1, title: 'React Developer', company: 'Tech Corp' },
            { id: 2, title: 'Fullstack Engineer', company: 'CodeHouse' },
            { id: 3, title: 'Product Manager', company: 'PM Labs' },
          ]);
        }
      } catch (error) {
        console.error('❌ Error fetching jobs:', error);
        // Use fallback data on error
        setJobs([
          { id: 1, title: 'React Developer', company: 'Tech Corp' },
          { id: 2, title: 'Fullstack Engineer', company: 'CodeHouse' },
          { id: 3, title: 'Product Manager', company: 'PM Labs' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details', { job: item })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.company}>{item.company}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Jobs</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={<Text>No jobs found.</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  company: { fontSize: 14, color: '#666' },
});
