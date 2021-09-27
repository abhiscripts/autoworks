import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

let width = Dimensions.get('window').width;
const increase = () => ({type: 'AddTodo'});

const Todo = () => {
  let [todos, setTodos] = useState(['sleep']);
  const [todoValue, setTodoValue] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  console.log(data);

  const AddTodo = () => {
    if (!todos.includes(todoValue)) {
      setTodos([...todos, todoValue]);
    } else {
      alert(`${todoValue} already added in Todo List`);
    }
  };

  const removeTodo = item => {
    let newTodos = todos;
    const todoIndex = newTodos.indexOf(item);
    if (todoIndex > -1) {
      newTodos.splice(todoIndex, 1);
      setTodos(JSON.parse(JSON.stringify(newTodos)));
    } else {
      alert(`${todoValue} is not in the Todo List`);
    }
  };

  return (
    <View style={styles.main}>
      <Button title="test redux" onPress={() => dispatch(increase())} />
      <TextInput
        style={styles.mainInput}
        onChangeText={setTodoValue}
        placeholder={'Add your todo here'}
      />
      <Button name="increase" title="Add Todo" onPress={AddTodo} />
      <Text style={{alignSelf: 'stretch', paddingLeft: 40}}>
        List of Todos :{' '}
      </Text>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <View style={styles.todoView}>
            <View style={styles.todoList}>
              <Text>{item}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => removeTodo(item)}>
              <Text> X </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  mainInput: {
    borderWidth: 1,
    height: 55,
    width: width * 0.9,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 9,
  },
  todoList: {
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.8,
    height: 40,
  },
  todoView: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 5,
  },
  removeTodo: {
    backgroundColor: 'cyan',
    borderRadius: 4,
    alignItems: 'center',
    margin: 4,
  },
});
