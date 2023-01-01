import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

import {ToastModule} from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { FormInvalidDirective } from './directives/form-invalid.directive';


@NgModule({
  declarations: [
    FormInvalidDirective
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    PasswordModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    StyleClassModule,
    ToastModule,
    TableModule,
    InputNumberModule,
    CalendarModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    ButtonModule,
    CheckboxModule,
    PasswordModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    StyleClassModule,
    ToastModule,
    TableModule,
    InputNumberModule,
    CalendarModule,
    ReactiveFormsModule,
    FormInvalidDirective

  ]
})
export class SharedModule { }
