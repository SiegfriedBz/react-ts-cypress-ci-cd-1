import React from 'react'
import { useTodoContext } from '../contextAPI/contexts/todoContext'
import { TodoCard } from './'
import { ITodo } from '../contextAPI/types/custom'
import './components.css'

const TodoList = (): React.JSX.Element | null => {

  const { todos } = useTodoContext()

  if(!todos.length) return null

  const renderTodoList = (): React.JSX.Element[] => {
    return todos.map((todo: ITodo['todo']) => {
      return <TodoCard key={todo.id} todo={todo} />
    })
  }

  return (
    <div className="todos">
      {renderTodoList()}
    </div>
  )
}

export default TodoList
