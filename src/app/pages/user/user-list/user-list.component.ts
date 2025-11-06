import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { TableModule } from 'primeng/table';
import { User } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-user-list',
  imports: [ TableModule, CardModule, ButtonModule, IconFieldModule ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {

  @Input() set dataSource(value: User[]) {
    this.customers = value;
  }

  @Output() removeUserEvent: EventEmitter<string> = new EventEmitter();

  customers: User[] = [];

  removeUser(cpf: string):void{
   this.removeUserEvent.emit(cpf)
  }


}

