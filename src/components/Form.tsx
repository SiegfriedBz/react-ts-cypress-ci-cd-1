import React, { useState } from 'react'
import { useTodoContext } from '../contextAPI/contexts/todoContext'
import './form.css'

const Form = (): React.JSX.Element => {
  const { addTodo } = useTodoContext()

  const [todoContent, setTodoContent] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoContent(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent): void | null  => {
    e.preventDefault()
    if(!todoContent) return null
    addTodo(todoContent)
    setTodoContent('')
  }

  return (
    <form
      className='form'
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Add a todo"
        className='form_input'
        value={todoContent}
        onChange={handleChange}

      />
      <button
        type="submit"
        className='form_btn'
      >
                Go
      </button>
    </form>
  )
}

export default Form
