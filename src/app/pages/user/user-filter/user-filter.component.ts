import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { UserFilter } from '../../../shared/interfaces';

@Component({
  selector: 'app-user-filter',
  imports: [ CardModule, InputTextModule, ButtonModule, InputMaskModule, KeyFilterModule, ReactiveFormsModule],
  templateUrl: './user-filter.component.html',
  styleUrl: './user-filter.component.scss',
})
export class UserFilterComponent implements OnInit {

  @Output() filterEvent: EventEmitter<UserFilter> = new EventEmitter();

  regexAlphaNumAccents = /^[a-zA-Z0-9À-ÿ ]*$/;

  filterForm!: FormGroup;

  private formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.filterForm = this.builderForm()
  }

  doFilter(): void {
    if(this.filterForm.valid) {
      this.filterEvent.emit(this.filterForm.value);
    }
  }

  clearFilter(): void {
    this.filterForm.reset();
    this.filterEvent.emit(this.filterForm.value);
  }

  private builderForm(): FormGroup {
    return this.formBuilder.group({
      name: [null],
      cpf: [null],
    });
  }
}
