import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView, Text } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import { Button } from "react-native";
import MainLayout from "../layouts/MainLayout";

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Do laundry", completed: true },
    { id: 2, text: "Go to gym", completed: false },
    { id: 3, text: "Walk dog", completed: true },
  ]);

  const addTask = (task) => {
    if (tasks.some((t) => t.text.toLowerCase() === task.toLowerCase())) {
      alert("Task already exists!");
      return;
    }
    if (tasks.length >= 12) {
      alert("You have reached the maximum number of tasks!");
      return;
    }
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: task, completed: false },
    ]);
  };

  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2e2c2c",
        }}
      >
        <View style={styles.button}>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate("About")}
          />
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "Bold",
            marginBottom: 20,
          }}
        >
          My To Do List App
        </Text>
        <View
          style={{
            backgroundColor: "#170000",
            borderColor: "red",
            borderWidth: 2,
            padding: 20,
            borderRadius: 5,
            opacity: 0.95, // Makes the container slightly transparent
            shadowColor: "#000", // Shadow color (black)
            shadowOffset: { width: 0, height: 10 }, // Shadow position
            shadowOpacity: 0.25, // Opacity of the shadow
            shadowRadius: 10, // Blurring effect
            elevation: 10, // For Android shadow
            width: "33%", // Make the container wider
            maxHeight: "100%", // Set a maximum height
          }}
        >
          <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.center}>
              <View style={styles.todoItem}>
                <ToDoList tasks={tasks} />
              </View>
              <View style={styles.todoItem}>
                <ToDoForm addTask={addTask} />
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  todoItem: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    borderWidth: "2px",
    borderColor: "red",
  },
});

export default HomeScreen;
