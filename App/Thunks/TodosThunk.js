import Creators from 'TodoNative/App/Redux/TodosRedux';
import TodoService from 'TodoNative/App/Services/TodoService';

export default (getTodos = () => {
  return dispatch => {
    const todoService = TodoService.create();

    dispatch(Creators.getTodosRequest());

    todoService
      .getTodos()
      .then(res => {
        dispatch(Creators.getTodosSuccess(res.data));
      })
      .catch(error => {
        dispatch(Creators.getTodosFailure(error.message));
      });
  };
});

const createTodo = name => {
  return dispatch => {
    const todoService = TodoService.create();

    dispatch(Creators.createTodoRequest());

    todoService
      .createTodo(name)
      .then(res => {
        dispatch(Creators.createTodoSuccess());
      })
      .then(error => {
        dispatch(Creators.createTodoFailure());
      });
  };
};

const updateTodo = todo => {
  return dispatch => {
    const todoService = TodoService.create();

    dispatch(Creators.updateTodoRequest());

    todoService
      .updateTodo(todo)
      .then(res => {
        dispatch(Creators.updateTodoSuccess());
      })
      .then(error => {
        dispatch(Creators.updateTodoFailure());
      });
  };
};

const deleteTodo = id => {
  return dispatch => {
    const todoService = TodoService.create();

    dispatch(Creators.deleteTodoRequest());

    todoService
      .deleteTodo(id)
      .then(res => {
        dispatch(Creators.deleteTodoSuccess());
      })
      .then(error => {
        dispatch(Creators.deleteTodoFailure());
      });
  };
};
