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
  selector: 'app-task-input-description',
  templateUrl: './task-input-description.component.html',
  styleUrls: [ './task-input-description.component.scss' ]
})
export class TaskInputDescriptionComponent implements OnInit {
  public description: FormControl | undefined;

  public minLength: number = 2;
  public maxLength: number = 200;

  @Input('taskInputDescriptionDefault')
  private defaultName: string | undefined;

  @Output('taskInputDescriptionFormControl')
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
