import {
  Component,
  Input,
  OnInit
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
  public maxLength: number = 200;
  public formControl: FormControl = new FormControl(null, [
    Validators.minLength(this.minLength),
    Validators.maxLength(this.maxLength)
  ]);

  @Input('taskInputDescriptionDefault')
  public defaultValue: string | undefined;

  public get value(): string {
    if (!_.isNil(this.formControl.value)) {
      return this.formControl.value;
    }
    return '';
  }

  public constructor() {
    super();
  }

  public ngOnInit(): void {
    this.formControl.setValue(this.defaultValue);
  }

  public clear(): void {
    this.formControl.setValue(null);
  }
}
