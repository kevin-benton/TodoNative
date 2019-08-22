import api from 'TodoNative/App/Services/ApiService';

const getTodos = () => api.get('v1/todos');
const getTodo = id => api.get(`v1/todos/${id}`);
const createTodo = name => api.post('v1/todos', {name: name});
const updateTodo = todo => api.put(`v1/todos/${todo.id}`, todo);
const deleteTodo = id => api.delete(`v1/todos/${id}`);

export default {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
