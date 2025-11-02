import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';

@Component({
  selector: 'app-user-filter',
  imports: [ CardModule, InputTextModule, ButtonModule, InputMaskModule, KeyFilterModule ],
  templateUrl: './user-filter.component.html',
  styleUrl: './user-filter.component.scss',
})
export class UserFilterComponent {

  regexAlphaNumAccents = /^[a-zA-Z0-9À-ÿ ]*$/;

}
