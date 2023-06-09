import { IState, ActionType } from '../types/custom'

export const todoReducer = (state: IState, action: ActionType): IState => {
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
