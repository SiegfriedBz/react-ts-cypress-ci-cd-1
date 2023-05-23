interface ITodo {
    id: string;
    content: string;
    isDone: boolean;
}

interface IState {
    todos: ITodo[];
    isEditMode: boolean;
}

type ActionType =
    | { type: 'ADD_TODO', payload: ITodo }
    | { type: 'UPDATE_TODO_CONTENT', payload: { id: string, content: string } }
    | { type: 'TOGGLE_TODO_IS_DONE', payload: { id: string } }
    | { type: 'DELETE_TODO', payload: { id: string } }
    | { type: 'TOGGLE_IS_EDIT_MODE' }

const initialState: IState = {
  todos: [],
  isEditMode: false
}

export const todoReducer = (state: IState, action: ActionType) => {
  switch (action.type) {
  case 'ADD_TODO':
    return { ...state, todos: [ ...state.todos, action.payload ] }
  case 'UPDATE_TODO_CONTENT':
    return { ...state, todos: state.todos.map(todo => {
      const {id, content} = action.payload
      return todo.id !== id ? todo : {...todo, content}
    })
    }
  case 'TOGGLE_TODO_IS_DONE':
    return { ...state, todos: state.todos.map(todo => {
      return todo.id !== action.payload.id ?
        todo
        : {...todo, isDone: !todo.isDone}
    })
    }
  case 'DELETE_TODO':
    return { ...state, todos: state.todos.filter(todo => {
      return todo.id !== action.payload.id
    })}
  case 'TOGGLE_IS_EDIT_MODE':
    return { ...state, isEditMode: !state.isEditMode }
  default:
    return state
  }
}
