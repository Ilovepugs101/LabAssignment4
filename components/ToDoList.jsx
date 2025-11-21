import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'

const ToDoList = ({ tasks = []}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {tasks.map((tasks, index) => (
          <View key={index.toString()} style={styles.task}>
            <Text style={styles.taskText}>{tasks}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default ToDoList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
    task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  completed: {
    backgroundColor: '#e0e0e0'
  },
  taskText: {
    fontSize: 16
  }
})
