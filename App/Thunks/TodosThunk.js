import CreateTodoCreators from 'TodoNative/App/Redux/CreateTodoRedux';
import ReadTodosCreators from 'TodoNative/App/Redux/ReadTodosRedux';
import UpdateTodoCreators from 'TodoNative/App/Redux/UpdateTodoRedux';
import DeleteTodoCreators from 'TodoNative/App/Redux/DeleteTodoRedux';

import TodoApiService from 'TodoNative/App/Services/TodoApiService';

const readAllTodos = () => {
  return dispatch => {
    dispatch(ReadTodosCreators.readTodosRequest());

    TodoApiService.getTodos()
      .then(res => {
        dispatch(ReadTodosCreators.readTodosSuccess(res.data));
      })
      .catch(error => {
        dispatch(ReadTodosCreators.readTodosFailure(error.message));
      });
  };
};

const createTodo = name => {
  return dispatch => {
    dispatch(CreateTodoCreators.createTodoRequest());

    TodoApiService.createTodo(name)
      .then(res => {
        dispatch(CreateTodoCreators.createTodoSuccess(res.data));
      })
      .then(error => {
        dispatch(CreateTodoCreators.createTodoFailure());
      });
  };
};

const updateTodo = todo => {
  return dispatch => {
    dispatch(UpdateTodoCreators.updateTodoRequest());

    TodoApiService.updateTodo(todo)
      .then(res => {
        dispatch(UpdateTodoCreators.updateTodoSuccess());
      })
      .then(error => {
        dispatch(UpdateTodoCreators.updateTodoFailure());
      });
  };
};

const deleteTodo = id => {
  return dispatch => {
    dispatch(DeleteTodoCreators.deleteTodoRequest());

    TodoApiService.deleteTodo(id)
      .then(res => {
        dispatch(DeleteTodoCreators.deleteTodoSuccess());
      })
      .then(error => {
        dispatch(DeleteTodoCreators.deleteTodoFailure());
      });
  };
};

export default {
  readAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
