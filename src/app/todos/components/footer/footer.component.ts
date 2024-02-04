import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoServService } from '../../services/todo-serv.service';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  todosService = inject(TodoServService);
  filterSig = this.todosService.filterSig;
  filterEnum = FilterEnum;

  activeCount = computed(() => {
    return this.todosService.todosSig().filter((todo) => !todo.isCompleted)
      .length;
  });

  noTodosClass = computed(() => this.todosService.todosSig().length === 0)

  itemsLeftText = computed(() => `item${this.activeCount() !== 1 ? 's' : ''} left`)

  changeFilter($event: MouseEvent, filterName: FilterEnum) {
    $event.preventDefault();
    this.todosService.changeFilter(filterName)
  }
}
