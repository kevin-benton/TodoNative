import TodosActions from 'TodoNative/App/Redux/Todos';

import TodoApiService from 'TodoNative/App/Services/TodoApiService';

const getAllTodos = () => {
  return dispatch => {
    // Only show loading screen on initial get.
    dispatch(TodosActions.todosRequest());

    TodoApiService.getTodos()
      .then(res => {
        dispatch(TodosActions.setTodos(res.data));
      })
      .catch(error => {
        dispatch(TodosActions.setTodosError(error.message));
      });
  };
};

const createTodo = name => {
  return (dispatch, getState) => {
    TodoApiService.createTodo(name)
      .then(res => {
        // Set to current list plus new one.
        const {todos} = getState();
        dispatch(TodosActions.setTodos(todos.data.concat([res.data])));
      })
      .catch(error => {
        dispatch(TodosActions.setTodosError(error.message));
      });
  };
};

const updateTodo = todo => {
  return (dispatch, getState) => {
    TodoApiService.updateTodo(todo)
      .then(res => {
        // Replace the changed todo with the new state.
        const {todos} = getState();
        dispatch(
          TodosActions.setTodos(
            todos.data.map(x => [todo].find(y => y.id === x.id) || x),
          ),
        );
      })
      .catch(error => {
        dispatch(TodosActions.setTodosError(error.message));
      });
  };
};

const deleteTodo = id => {
  return (dispatch, getState) => {
    TodoApiService.deleteTodo(id)
      .then(res => {
        // Remove the deleted todo from the todo list.
        const {todos} = getState();
        dispatch(TodosActions.setTodos(todos.data.filter(x => x.id !== id)));
      })
      .catch(error => {
        dispatch(TodosActions.setTodosError(error.message));
      });
  };
};

export default {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
