import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'Course 1: Cloud Computing',
    'Course 2: Programming for Computing',
    'Course 3: Machine Learning and Deep Learning',
    'Course 4: Software Engineering',
    'Course 5: Web Development',
    'Course 6: Mobile App Development',
    'Course 7: Ai for Data Science',
    'Course 8: Computer Architecture',
    'Course 9: Dicrete Math and Algorithms For Computing'
  ];

  const depthCourses = [
    'Depth Course 1: Secure Systems and Programs',
    'Depth Course 2: Cybersecurity',
  ];

  const capstoneCourse = 'Capstone Course: MSCS Capstone Project';

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/images/icon.png')} />
      <Text style={styles.title}>MSCS Courses</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your favorite course"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />
      
      <Text style={styles.subtitle}>Core Courses:</Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}
      
      <Text style={styles.subtitle}>Depth of Study Courses:</Text>
      {depthCourses.map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}
      
      <Text style={styles.subtitle}>Capstone Course:</Text>
      <Text style={styles.course}>{capstoneCourse}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'White',
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  course: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default CoreComponents;