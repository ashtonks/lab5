import React from "react";
import { StyleSheet, Pressable, View, Text, ScrollView } from "react-native";

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={task.id}>
          <View
            style={[
              styles.task,
              styles.borderOutline,
              { backgroundColor: index % 2 === 0 ? "#e0e0e0" : "#fff" },
            ]}
          >
            <Text style={styles.taskText}>{task.text}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#2e2c2c",
  },
  taskText: {
    fontSize: 16,
  },
  borderOutline: {
    borderWidth: 1,
    borderColor: "black",
  },
});
