import React from 'react'
import { useTodoContext } from '../contextAPI/contexts/todoContext'
import { ITodo } from '../interfaces'
import './todo_card.css'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface IProps {
    todo: ITodo;
}

const TodoCard = ({ todo }: IProps) => {

  const {
    isEditMode,
    updateTodoContent,
    toggleTodoIsDone,
    deleteTodo,
    toggleIsEditMode
  } = useTodoContext()

  return (
    <form className='form_todo'>
      {isEditMode ? (
        <input type='text'
          className=""
          value={todo.content}
          onChange={(e) => updateTodoContent(todo.id, e.target.value)}
        />
      )
        : (
          <span className="form_todo_text">{todo.content}</span>
        )
      }
      <div>
        <span
          className="icon"
          onClick={toggleIsEditMode}
        >
          <AiFillEdit />
        </span>
        <span
          className="icon"
          onClick={() => toggleTodoIsDone(todo.id)}
        >
          <MdDone />
        </span>
        <span
          className="icon"
          onClick={() => deleteTodo(todo.id)}
        >
          <AiFillDelete />
        </span>
      </div>
    </form>
  )
}
export default TodoCard
