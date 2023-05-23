import React, { createContext, useContext, useReducer } from 'react'
import { todoReducer } from '../reducers/todoReducer';
import { TodoType, IState, ITodoContext } from '../types/custom'
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext<ITodoContext>({
  todos: [],
  isEditMode: false,
  addTodo: () => { /* dispatch */ },
  updateTodoContent: () => { /* dispatch */ },
  toggleTodoIsDone: () => { /* dispatch */ },
  deleteTodo: () => { /* dispatch */ },
  toggleIsEditMode: () => { /* dispatch */ }
})

export const useTodoContext = (): ITodoContext => {
  return useContext(TodoContext)
}

interface IProps {
    children: React.ReactNode
}

const initialState: IState = {
  todos: [],
  isEditMode: false
}

export const TodoContextProvider = ({ children }: IProps): React.JSX.Element => {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo: ITodoContext['addTodo'] = (content) => {
    const newTodo: TodoType = { id: uuidv4(), content, isDone: false }
    dispatch({ type: 'ADD_TODO', payload: newTodo })
  }

  const updateTodoContent: ITodoContext['updateTodoContent'] = (id, content) => {
    dispatch({ type: 'UPDATE_TODO_CONTENT', payload: { id, content } })
  }

  const deleteTodo: ITodoContext['deleteTodo'] = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } })
  }

  const toggleTodoIsDone: ITodoContext['toggleTodoIsDone'] = (id) => {
    dispatch({ type: 'TOGGLE_TODO_IS_DONE', payload: { id } })
  }

  const toggleIsEditMode: ITodoContext['toggleIsEditMode'] = () => {
    dispatch({ type: 'TOGGLE_IS_EDIT_MODE' })
  }

  return (
    <TodoContext.Provider value={{
      ...state,
      addTodo,
      updateTodoContent,
      toggleTodoIsDone,
      deleteTodo,
      toggleIsEditMode
    }}>
      {children}
    </TodoContext.Provider>
  )
}

