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
  selector: 'app-todo-input-description',
  templateUrl: './todo-input-description.component.html',
  styleUrls: [
    './todo-input-description.component.scss'
  ]
})
export class TodoInputDescriptionComponent extends TextValidatorModel implements OnInit {
  public maxLength: number = 200;
  public formControl: FormControl = new FormControl(null, [
    Validators.minLength(this.minLength),
    Validators.maxLength(this.maxLength)
  ]);

  @Input('todoInputDescriptionDefault')
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
