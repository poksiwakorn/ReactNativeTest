import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const TodoCard = ({item, deleteTodo, markTodo}) => {
  return (
    <View style={item.marked ? styles.cardMarked : styles.card}>
      <Text style={styles.todoText}>{item.todo}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 50}}>
        <TouchableOpacity onPress={() => markTodo(item.id)}>
            <Text style={styles.markText}>O</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
            <Text style={styles.deleteText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'orange',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardMarked: {
        backgroundColor: 'pink',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    todoText: {
        fontSize: 30,
        color: 'white'
    },
    deleteText: {
        fontSize: 30,
        color: 'red'
    },
    markText: {
        fontSize: 30,
        color: 'green'
    },
})

export default TodoCard