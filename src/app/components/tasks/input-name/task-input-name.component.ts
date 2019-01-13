import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  FormControl,
  Validators
} from '@angular/forms';
import * as _ from 'lodash';
import { TextValidatorModel } from '../../../models/validators/text/text-validator.model';

@Component({
  selector: 'app-task-input-name',
  templateUrl: './task-input-name.component.html',
  styleUrls: [ './task-input-name.component.scss' ]
})
export class TaskInputNameComponent extends TextValidatorModel implements OnInit {
  public formControl: FormControl | undefined;

  @Input('taskInputNameDefault')
  public defaultValue: string | undefined;

  @Output('taskInputNameFormControl')
  public formControlChange = new EventEmitter<FormControl>();

  @ViewChild('input', {
    read: ElementRef
  })
  public input: ElementRef | undefined;

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
      Validators.required,
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

  public focus(): void {
    if (!_.isNil(this.input)) {
      this.input.nativeElement.focus();
    }
  }
}
