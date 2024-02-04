import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root',
})
export class TodoServService {
  todosSig = signal<TodoInterface[]>([]);
  filterSig = signal<FilterEnum>(FilterEnum.all);

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(17),
    };

    this.todosSig.update((todos) => [...todos, newTodo]);
  }

  changeFilter(filterName: FilterEnum) {
    this.filterSig.set(filterName);
  }

  toggleAll(checked: boolean) {
    this.todosSig.update((todos) =>
      todos.map((todo) => ({ ...todo, checked }))
    );
  }

  changeTodo(id: string, text: string) {
    let todo = this.todosSig().filter((todo) => todo.id === id)[0];
    todo.text = text;

    this.todosSig.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }

  toggleTodo(id: string): void {
    this.todosSig.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  removeTodo(id: string): void {
    this.todosSig.update((todos) => todos.filter((todo) => todo.id !== id));
  }
}
