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
  public description: FormControl | undefined;
  public maxLength = 200;

  @Input('taskInputDescriptionDefault')
  public defaultName: string | undefined;

  @Output('taskInputDescriptionFormControl')
  public formControl: EventEmitter<FormControl> = new EventEmitter();

  public get value(): string {
    if (!_.isNil(this.description) && !_.isNil(this.description.value)) {
      return this.description.value;
    }
    return '';
  }

  public constructor() {
    super();
  }

  public ngOnInit(): void {
    this.description = new FormControl(this.defaultName, [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength)
    ]);
    this.formControl.emit(this.description);
  }

  public clear(): void {
    if (!_.isNil(this.description)) {
      this.description.setValue(null);
    }
  }
}
