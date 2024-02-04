import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoServService } from '../../services/todo-serv.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  text: string = '';
  todosService = inject(TodoServService);

  changeText($event: KeyboardEvent) {
    const target = $event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo() {
    console.log('ashgdjhasgdjhghj');
    
    this.todosService.addTodo(this.text);
    this.text = ''
  }
}
