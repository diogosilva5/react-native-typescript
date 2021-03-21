export interface Todo {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface TodosState {
    todos: Array<Todo>;
}
