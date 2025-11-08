import { identity, pickBy } from 'lodash';
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
import { HttpErrorResponse } from '@angular/common/http';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ RouterModule, IftaLabelModule, InputTextModule, SelectModule , PasswordModule, InputNumberModule, ButtonModule, CardModule, KeyFilterModule, ReactiveFormsModule, NgxMaskDirective ],
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnDestroy, OnInit {

  roles = USER_ROLES;
  dailyHours = USER_DAILY_HOURS;
  regexAlphaNumAccents = /^[a-zA-Z0-9À-ÿ ]*$/;
  registerForm!: FormGroup;
  isEditUser: boolean = false;


  private sub = new SubSink();
  private user!: User;

  private formBuilder = inject(FormBuilder);
  private userService = inject(UserService);
  private messageService = inject(MessageService);
  private router= inject(Router);

  constructor(){
    this.user = this.router.getCurrentNavigation()?.extras?.state?.['user'];
  }

  ngOnInit(): void {
    this.registerForm = this.builderForm();
    if(this.user){
      this.isEditUser = true;
      this.setUserForm();
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  sendUserRegister(): void {
    if(this.registerForm.valid) {
      let formValue = {
        id: this.isEditUser ? this.user.cpf : '',
        ...this.registerForm.value
      };
      this.validateBirthday(formValue);
      this.validateHour(formValue);
      const method = this.isEditUser ? 'putUser': 'sendUsers';
      formValue = pickBy(formValue, identity) as User;
      this.sub.sink = this.userService[method](formValue).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Successo', detail:
            this.isEditUser? 'Usuário editado com sucesso!' : 'Usuário Cadastrado com Sucesso!'
           })
          this.router.navigate(['/usuarios']);
        },
        error: (err: HttpErrorResponse) => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: err.error.errors[0].message });
        }
      });
    }
  }

  private setUserForm(): void {
    this.registerForm.patchValue({
      ...this.user,
      dateBirthday: this.reverteValidateDate(this.user.dateBirthday)
    })
  }

  private reverteValidateDate(date: string): string {
    return UtilDates.unformatDateString(date)
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
