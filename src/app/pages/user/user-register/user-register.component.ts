import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../shared/services/http/user.service';
import { SubSink } from 'subsink';
import { NgxMaskDirective } from 'ngx-mask';
import { UtilDates } from '../../../shared/utils/util-dates';
import { USER_ROLES } from '../../../shared/consts/user-roles';
import { USER_DAILY_HOURS } from '../../../shared/consts/user-daily-hours';
import { User } from '../../../shared/interfaces';
import { MessageService } from 'primeng/api';
import { Toast, ToastModule } from 'primeng/toast';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ RouterModule, InputTextModule, SelectModule , PasswordModule, InputNumberModule, ButtonModule, CardModule, KeyFilterModule, ReactiveFormsModule, NgxMaskDirective, ToastModule, Toast],
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
  providers: [MessageService]
})
export class UserRegisterComponent implements OnDestroy, OnInit {

  roles = USER_ROLES;
  dailyHours = USER_DAILY_HOURS;
  regexAlphaNumAccents = /^[a-zA-Z0-9À-ÿ ]*$/;
  registerForm!: FormGroup;

  private sub = new SubSink();

  private formBuilder = inject(FormBuilder);
  private userService = inject(UserService);
  private messageService = inject(MessageService);
  private router= inject(Router);

  ngOnInit(): void {
    this.registerForm = this.builderForm()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  sendUserRegister(): void {
    if(this.registerForm.valid) {
      const formValeu = { ...this.registerForm.value };
      this.validateBirthday(formValeu);
      this.validateHour(formValeu);
      this.sub.sink = this.userService.sendUsers(formValeu).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Usuário Cadastrado com Sucesso!' });
          this.router.navigate(['/usuarios']);
        },
        error: (err: HttpErrorResponse) => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: err.error.errors[0].message });
        }
      });
    }
  }

  private validateBirthday(dateString: User): void {
    if(dateString.dateBirthday){
       dateString.dateBirthday = UtilDates.formatDateString(dateString.dateBirthday);
    }
  }

  private validateHour(hourString: User): void {
    if(hourString.startTime || hourString.endTime) {
      hourString.startTime = UtilDates.formatHourString(hourString.startTime);
      hourString.endTime = UtilDates.formatHourString(hourString.endTime);
    }
  }

  private builderForm(): FormGroup {
    return this.formBuilder.group({
      fullName: [null],
      cpf: [null],
      email: [null],
      phone: [null],
      dateBirthday: [null],
      password: [null],
      role: [null],
      dailyHours: [null],
      avatar: [null],
      startTime: [null],
      endTime: [null],
    });
  }

}
