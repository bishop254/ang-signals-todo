import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoServService } from '../../services/todo-serv.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  todosService = inject(TodoServService);
  editingId: string | null = null;


  noTodosClass = computed(() => this.todosService.todosSig().length === 0);

  isAllTodosSelected = computed(
    () =>
      this.todosService.todosSig().filter((todo) => !todo.isCompleted)
        .length === 0
  );

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todosService.toggleAll(target.checked);
  }

  visibleTodos = computed(() => {
    const todos = this.todosService.todosSig();
    const filter = this.todosService.filterSig();

    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    }

    return todos;
  });

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }
}
