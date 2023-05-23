import React, { createContext, useContext, useReducer } from 'react'
import { ITodo, IState } from '../../interfaces';
import { todoReducer } from '../reducers/todoReducer';
import {v4 as uuidv4} from 'uuid';

type ACTIONTYPE =
    | { type: 'ADD_TODO', payload: ITodo }
    | { type: 'UPDATE_TODO_CONTENT', payload: { id: string, content: string } }
    | { type: 'TOGGLE_TODO_IS_DONE', payload: { id: string } }
    | { type: 'DELETE_TODO', payload: { id: string } }
    | { type: 'TOGGLE_IS_EDIT_MODE' }

type TodoContextType = {
    todos: ITodo[];
    isEditMode: boolean;
    addTodo: (content: string) => void;
    updateTodoContent: (id: string, content: string) => void;
    toggleTodoIsDone: (id: string) => void;
    deleteTodo: (id: string) => void;
    toggleIsEditMode: () => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  isEditMode: false,
  addTodo: () => {},
  updateTodoContent: () => {},
  toggleTodoIsDone: () => {},
  deleteTodo: () => {},
  toggleIsEditMode: () => {}
})

export const useTodoContext = () => {
  return useContext(TodoContext)
}

interface IProps {
    children: React.ReactNode
}

const initialState = {
  todos: [],
  isEditMode: false
}

export const TodoContextProvider = ({ children }: IProps) => {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = (content: string): any => {
    const newTodo: ITodo = { id: uuidv4(), content, isDone: false }
    dispatch({ type: 'ADD_TODO', payload: newTodo })
  }

  const updateTodoContent = (id: string, content: string) => {
    dispatch({ type: 'UPDATE_TODO_CONTENT', payload: { id, content } })
  }

  const deleteTodo = (id: string): any => {
    dispatch({ type: 'DELETE_TODO', payload: { id } })
  }

  const toggleTodoIsDone = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO_IS_DONE', payload: { id } })
  }

  const toggleIsEditMode = () => {
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

