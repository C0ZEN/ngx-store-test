import {
  Component,
  ElementRef,
  Input,
  OnInit,
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
  public formControl: FormControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(this.minLength),
    Validators.maxLength(this.maxLength)
  ]);

  @Input('taskInputNameDefault')
  public defaultValue: string | undefined;

  @ViewChild('input', {
    read: ElementRef
  })
  public input: ElementRef | undefined;

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

  public focus(): void {
    if (!_.isNil(this.input)) {
      this.input.nativeElement.focus();
    }
  }
}
