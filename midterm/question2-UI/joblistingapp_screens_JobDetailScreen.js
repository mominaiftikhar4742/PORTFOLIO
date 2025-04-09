import React from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';

export default function JobDetailScreen({ route }) {
  const { job } = route.params;

  if (!job) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.desc}>{job.description}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(job.url)}>
        Apply Now
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
  company: { fontSize: 18, marginBottom: 10 },
  desc: { fontSize: 16, marginBottom: 20 },
  link: { color: 'blue', textDecorationLine: 'underline' }
});
