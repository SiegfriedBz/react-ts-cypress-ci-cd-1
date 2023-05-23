import React from 'react'
import { useTodoContext } from '../contextAPI/contexts/todoContext'
import { TodoCard } from './'
import { TodoType } from '../contextAPI/types/custom'
import './components.css'

const TodoList = (): React.JSX.Element | null => {

  const { todos } = useTodoContext()

  if(!todos.length) return null

  return (
    <div className="todos">
      {todos?.map((todo: TodoType) => {
        return <TodoCard key={todo.id} todo={todo} />
      })}
    </div>
  )
}
export default TodoList
