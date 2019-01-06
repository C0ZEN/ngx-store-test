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
  selector: 'app-task-input-description',
  templateUrl: './task-input-description.component.html',
  styleUrls: [ './task-input-description.component.scss' ]
})
export class TaskInputDescriptionComponent extends TextValidatorModel implements OnInit {
  public formControl: FormControl | undefined;
  public maxLength = 200;

  @Input('taskInputDescriptionDefault')
  public defaultValue: string | undefined;

  @Output('taskInputDescriptionFormControl')
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
