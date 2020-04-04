export default function todos(state = [], action) {
  // action = retorno da action todos.js

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { 
        id: Math.random(), 
        text: action.text 
      }];
    default:
      return state;
  }
}