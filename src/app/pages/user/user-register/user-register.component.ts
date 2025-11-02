import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';


@Component({
  selector: 'app-user-register',
  imports: [ RouterModule, InputTextModule, InputMaskModule, SelectModule , PasswordModule, InputNumberModule, ButtonModule, CardModule, KeyFilterModule ],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss',
})
export class UserRegisterComponent {

}
