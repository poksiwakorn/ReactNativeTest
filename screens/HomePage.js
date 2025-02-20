import { View, Text, FlatList, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import TodoCard from '../components/TodoCard';
import Header from '../components/Header';

const HomePage = () => {
  const [todo, setTodo] = useState('');
  const [idGen, setIdGen] = useState(4);

  const [todoList, setTodoList] = useState([
    {id: 1, todo: 'Eating', marked: true},
    {id: 2, todo: 'Walking', marked: false},
    {id: 3, todo: 'Running', marked: false},
  ]);

  const addTodo = () => {
    setTodoList([...todoList, {id: idGen, todo: todo}]);
    setIdGen(idGen+1)
    setTodo('')
  }

  const deleteTodo = (id) => {
    console.log('Delete' + id)
    setTodoList(todoList.filter((item) => item.id != id))
  }

  const markTodo = (id) => {
    console.log('Marked' + id)
    // const newList = todoList.filter((item) => item.id != des.id)
    // newList.push({id: des.id, todo: des.todo, marked: !des.marked})
    // setTodoList(newList)
    setTodoList(prevData =>
        prevData.map(item =>
          item.id === id ? { ...item, marked: !item.marked } : item
        )
    );
  }

  return (
    <View>
      <Header></Header>
      <FlatList
        style = {styles.todoZone}
        data={todoList}
        renderItem={({item}) => (
            <TodoCard item={item} deleteTodo={deleteTodo} markTodo={markTodo}></TodoCard>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <View style={styles.inputZone}>
        <TextInput 
            style={styles.inputBox}
            value={todo}
            onChangeText={newText => setTodo(newText)}
        ></TextInput>
        <Button title='Add' onPress={addTodo}></Button>
      </View>
      <Text style={{alignSelf: 'center'}}>(Pink is marked)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    todoZone: {
        height: '70%'
    },
    inputZone: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        height: 40
    },
    inputBox: {
        backgroundColor: '#f5f5f5',
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        flex: 0.8
    },
    inputButton: {
        flex: 0.2
    },
    headerText: {
        fontSize: 40,
        color: 'white'
    }
})

export default HomePage