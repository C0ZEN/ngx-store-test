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
import * as _ from 'lodash';
import { TextValidatorModel } from '../../../models/validators/text/text-validator.model';

@Component({
  selector: 'app-todo-input-description',
  templateUrl: './todo-input-description.component.html',
  styleUrls: [ './todo-input-description.component.scss' ]
})
export class TodoInputDescriptionComponent extends TextValidatorModel implements OnInit {
  public formControl: FormControl | undefined;
  public maxLength = 200;

  @Input('todoInputDescriptionDefault')
  public defaultValue: string | undefined;

  @Output('todoInputDescriptionFormControl')
  public formControlChange: EventEmitter<FormControl> = new EventEmitter();

  public get value(): string {
    if (!_.isNil(this.formControl) && !_.isNil(this.formControl.value)) {
      return this.formControl.value;
    }
    return '';
  }

  public constructor() {
    super();
  }

  public ngOnInit(): void {
    this.formControl = new FormControl(this.defaultValue, [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength)
    ]);
    this.formControlChange.emit(this.formControl);
  }

  public clear(): void {
    if (!_.isNil(this.formControl)) {
      this.formControl.setValue(null);
    }
  }
}
