import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';
import {Container, Text} from 'native-base';

import AppHeader from 'TodoNative/App/Components/AppHeader';
import TodoInput from 'TodoNative/App/Components/TodoInput';
import Todos from 'TodoNative/App/Components/Todos';
import getTodos from 'TodoNative/App/Thunks/TodosThunk';
import TodoService from 'TodoNative/App/Services/TodoService';

class TodosScreen extends Component {
  constructor(props) {
    super(props);

    this.todoService = TodoService.create();
    this.state = {isLoading: true, todos: []};
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    const {dispatch} = this.props;
    dispatch(getTodos());
  }

  deleteTodo(id) {
    return this.todoService
      .deleteTodo(id)
      .then(res => {
        return this.getTodos();
      })
      .catch(error => {
        console.error(error);
      });
  }

  addTodo(name) {
    return this.todoService
      .createTodo(name)
      .then(res => {
        return this.getTodos();
      })
      .catch(error => {
        console.error(error);
      });
  }

  updateTodo(todo) {
    return this.todoService
      .updateTodo({
        id: todo.id,
        name: todo.name,
        completed: !todo.completed,
        created: todo.created,
      })
      .then(res => {
        return this.getTodos();
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <Container>
        <AppHeader
          title="Todos"
          icon="menu"
          onPress={this.props.navigation.openDrawer}
        />

        <SafeAreaView style={styles.safeArea}>
          <Todos
            isLoading={this.props.todos.isLoading}
            todos={this.props.todos.data}
            update={this.updateTodo.bind(this)}
            delete={this.deleteTodo.bind(this)}
          />

          <TodoInput add={this.addTodo.bind(this)} />
        </SafeAreaView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

TodosScreen.navigationOptions = ({navigation}) => {
  return {
    header: null,
  };
};

const mapStateToProps = state => {
  return {...state};
};

export default connect(mapStateToProps)(TodosScreen);
