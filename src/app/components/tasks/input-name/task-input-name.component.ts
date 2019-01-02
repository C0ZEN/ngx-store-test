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
import { isNil } from 'lodash';

@Component({
  selector: 'app-task-input-name',
  templateUrl: './task-input-name.component.html',
  styleUrls: [ './task-input-name.component.scss' ]
})
export class TaskInputNameComponent implements OnInit {
  public name: FormControl | undefined;

  public minLength: number = 2;
  public maxLength: number = 60;

  @ViewChild('input', {
    read: ElementRef
  })
  public input: ElementRef | undefined;

  @Input('taskInputNameDefault')
  private defaultName: string | undefined;

  @Output('taskInputNameFormControl')
  private formControl: EventEmitter<FormControl> = new EventEmitter();

  public get value(): string {
    if (!isNil(this.name) && !isNil(this.name.value)) {
      return this.name.value;
    }
    return '';
  }

  public constructor() {
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
    if (!isNil(this.name)) {
      this.name.setValue(null);
    }
  }

  public focus(): void {
    if (!isNil(this.input)) {
      this.input.nativeElement.focus();
    }
  }
}