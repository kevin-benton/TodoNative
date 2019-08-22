import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Container} from 'native-base';

import AppHeader from 'TodoNative/App/Components/AppHeader';
import TodoInput from 'TodoNative/App/Components/TodoInput';
import Todos from 'TodoNative/App/Components/Todos';
import Actions from 'TodoNative/App/Thunks/TodosThunk';

class TodosScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.getTodos();
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
            update={this.props.updateTodo}
            delete={this.props.deleteTodo}
          />

          <TodoInput add={this.props.createTodo} />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...Actions,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosScreen);
