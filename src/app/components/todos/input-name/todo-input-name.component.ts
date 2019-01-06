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
  selector: 'app-todo-input-name',
  templateUrl: './todo-input-name.component.html',
  styleUrls: [ './todo-input-name.component.scss' ]
})
export class TodoInputNameComponent extends TextValidatorModel implements OnInit {
  public name: FormControl | undefined;

  @ViewChild('input', {
    read: ElementRef
  })
  public input: ElementRef | undefined;

  @Input('todoInputNameDefault')
  private defaultName: string | undefined;

  @Output('todoInputNameFormControl')
  private formControl: EventEmitter<FormControl> = new EventEmitter();

  public get value(): string {
    if (!_.isNil(this.name) && !_.isNil(this.name.value)) {
      return this.name.value;
    }
    return '';
  }

  public constructor() {
    super();
  }

  public ngOnInit(): void {
    this.name = new FormControl(this.defaultName, [
      Validators.required,
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength)
    ]);
    this.formControl.emit(this.name);
  }

  public clear(): void {
    if (!_.isNil(this.name)) {
      this.name.setValue(null);
    }
  }

  public focus(): void {
    if (!_.isNil(this.input)) {
      this.input.nativeElement.focus();
    }
  }
}
