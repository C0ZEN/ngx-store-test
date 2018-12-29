import {
  Component,
  OnInit
} from '@angular/core';
import { TodosService } from '../../stores/todos/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.scss' ]
})
export class TodoComponent implements OnInit {
  public constructor(
    private todosService: TodosService
  ) {
  }

  public ngOnInit(): void {
  }

  public newTodoList(): void {
    this.todosService.add();
  }
}
