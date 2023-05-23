import React from 'react'
import { useTodoContext } from '../contextAPI/contexts/todoContext';
import { TodoCard } from './'
import { ITodo } from '../interfaces'
import './components.css'

const TodoList = (): React.JSX.Element | null => {

  const { todos } = useTodoContext()

  if(!todos.length) return null

  return (
    <div className="todos">
      {todos?.map((todo: ITodo) => {
        return <TodoCard key={todo.id} todo={todo} />
      })}
    </div>
  )
}
export default TodoList
