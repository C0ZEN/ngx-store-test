import {
  Component,
  OnInit
} from '@angular/core';
import { TodosService } from '../../stores/todos/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: [ './todos.component.scss' ]
})
export class TodosComponent implements OnInit {
  public constructor(
    private todosService: TodosService
  ) {
  }

  public ngOnInit(): void {
  }

  public newTodo(): void {
    this.todosService.add();
  }
}
