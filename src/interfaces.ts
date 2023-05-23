export interface ITodo {
    id: string;
    content: string;
    isDone: boolean;
}

export interface IState {
    todos: ITodo[];
    isEditMode: boolean;
}
