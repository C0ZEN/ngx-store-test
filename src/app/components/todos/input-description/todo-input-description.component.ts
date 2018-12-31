import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormControl,
  Validators
} from '@angular/forms';
import { isNil } from 'lodash';

@Component({
  selector: 'app-todo-input-description',
  templateUrl: './todo-input-description.component.html',
  styleUrls: [ './todo-input-description.component.scss' ]
})
export class TodoInputDescriptionComponent implements OnInit {
  public description: FormControl | undefined;

  public minLength: number = 2;
  public maxLength: number = 200;

  @Input('todoInputDescriptionDefault')
  private defaultName: string | undefined;

  @Output('todoInputDescriptionFormControl')
  private formControl: EventEmitter<FormControl> = new EventEmitter();

  public get value(): string {
    if (!isNil(this.description) && !isNil(this.description.value)) {
      return this.description.value;
    }
    return '';
  }

  public constructor() {
  }

  public ngOnInit(): void {
    this.description = new FormControl(this.defaultName, [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength)
    ]);
    this.formControl.emit(this.description);
  }

  public clear(): void {
    if (!isNil(this.description)) {
      this.description.setValue(null);
    }
  }
}
