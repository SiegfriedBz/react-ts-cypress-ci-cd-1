import React, { createContext, useContext, useReducer } from 'react'
import { todoReducer } from '../reducers/todoReducer';
import { v4 as uuidv4 } from 'uuid';

interface IState {
  todos: {
    id: string;
    content: string;
    isDone: boolean;
  }[];
  isEditMode: boolean;
}

interface TodoContextType extends IState {
  addTodo: (content: string) => void;
  updateTodoContent: (id: string, content: string) => void;
  toggleTodoIsDone: (id: string) => void;
  deleteTodo: (id: string) => void;
  toggleIsEditMode: () => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  isEditMode: false,
  addTodo: () => { /* dispatch */ },
  updateTodoContent: () => { /* dispatch */ },
  toggleTodoIsDone: () => { /* dispatch */ },
  deleteTodo: () => { /* dispatch */ },
  toggleIsEditMode: () => { /* dispatch */ }
})

export const useTodoContext = (): TodoContextType => {
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

  const addTodo: TodoContextType['addTodo'] = (content) => {
    const newTodo = { id: uuidv4(), content, isDone: false }
    dispatch({ type: 'ADD_TODO', payload: newTodo })
  }

  const updateTodoContent: TodoContextType['updateTodoContent'] = (id, content) => {
    dispatch({ type: 'UPDATE_TODO_CONTENT', payload: { id, content } })
  }

  const deleteTodo: TodoContextType['deleteTodo'] = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } })
  }

  const toggleTodoIsDone: TodoContextType['toggleTodoIsDone'] = (id) => {
    dispatch({ type: 'TOGGLE_TODO_IS_DONE', payload: { id } })
  }

  const toggleIsEditMode: TodoContextType['toggleIsEditMode'] = () => {
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

