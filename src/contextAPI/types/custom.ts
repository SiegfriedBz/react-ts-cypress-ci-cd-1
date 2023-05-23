export type TodoType = {
    id: string;
    content: string;
    isDone: boolean;
}

export interface IState {
    todos: TodoType[];
    isEditMode: boolean;
}

export interface ITodoContext extends IState {
    addTodo: (content: string) => void;
    updateTodoContent: (id: string, content: string) => void;
    toggleTodoIsDone: (id: string) => void;
    deleteTodo: (id: string) => void;
    toggleIsEditMode: () => void;
}

export type ActionType =
  | { type: 'ADD_TODO', payload: TodoType }
  | { type: 'UPDATE_TODO_CONTENT', payload: { id: string, content: string } }
  | { type: 'TOGGLE_TODO_IS_DONE', payload: { id: string } }
  | { type: 'DELETE_TODO', payload: { id: string } }
  | { type: 'TOGGLE_IS_EDIT_MODE' }
