import Config from 'react-native-config';
import apisauce from 'apisauce';

// our "constructor"
const create = (baseURL = Config.API_URL) => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
  });

  const getTodos = () => api.get('v1/todos');
  const getTodo = id => api.get(`v1/todos/${id}`);
  const createTodo = name => api.post('v1/todos', {name: name});
  const updateTodo = todo => api.put(`v1/todos/${todo.id}`, todo);
  const deleteTodo = id => api.delete(`v1/todos/${id}`);

  return {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
  };
};

export default {
  create,
};
