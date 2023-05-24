import React from 'react'
import { useTodoContext } from '../contextAPI/contexts/todoContext'
import { ITodo as IProps } from '../contextAPI/types/custom'
import './todo_card.css'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

const TodoCard = ({ todo }: IProps): React.JSX.Element => {
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => updateTodoContent(todo.id, e.target.value)}
        />
      )
        : (
          <span className="form_todo_text">{todo.content}</span>
        )
      }
      <div>
        <span
          className="icon"
          onClick={(): void => toggleIsEditMode()}
        >
          <AiFillEdit />
        </span>
        <span
          className="icon"
          onClick={(): void => toggleTodoIsDone(todo.id)}
        >
          <MdDone />
        </span>
        <span
          className="icon"
          onClick={(): void => deleteTodo(todo.id)}
        >
          <AiFillDelete />
        </span>
      </div>
    </form>
  )
}

export default TodoCard
