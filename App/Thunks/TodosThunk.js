import GetTodosCreators from 'TodoNative/App/Redux/GetTodosRedux';
import CreateTodoCreators from 'TodoNative/App/Redux/CreateTodoRedux';
import UpdateTodoCreators from 'TodoNative/App/Redux/UpdateTodoRedux';
import DeleteTodoCreators from 'TodoNative/App/Redux/DeleteTodoRedux';

import TodoApiService from 'TodoNative/App/Services/TodoApiService';

const getTodos = () => {
  return dispatch => {
    dispatch(GetTodosCreators.getTodosRequest());

    TodoApiService.getTodos()
      .then(res => {
        dispatch(GetTodosCreators.getTodosSuccess(res.data));
      })
      .catch(error => {
        dispatch(GetTodosCreators.getTodosFailure(error.message));
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
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
