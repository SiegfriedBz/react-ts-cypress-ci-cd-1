import React, { useState } from 'react'
import { useTodoContext } from '../contextAPI/contexts/todoContext';
import './form.css'

const Form = ( ) => {
  const { addTodo } = useTodoContext()

  const [todoContent, setTodoContent] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!todoContent) return
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
