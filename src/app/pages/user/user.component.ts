import { SubSink } from 'subsink';
import { ResponseAPI } from './../../shared/interfaces/response-api';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { UserFilterComponent } from './user-filter/user-filter.component';
import { UserListComponent } from './user-list/user-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { User } from '../../shared/interfaces/user';
import { UserService } from '../../shared/services/http/user.service';
import { UserFilter } from '../../shared/interfaces';
import { identity, pickBy } from 'lodash';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  imports: [ CardModule, UserFilterComponent, UserListComponent, ButtonModule, RouterModule ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit, OnDestroy  {

  filter: UserFilter = {
    name: '',
    cpf: ''
  };

  dataSource: User[] = [];

  private sub = new SubSink();

  private userService = inject(UserService);
  private messageService = inject(MessageService);

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  doFilterUsers(filteParamsr: UserFilter): void {
    const filter = JSON.parse(JSON.stringify(filteParamsr));
    this.filter = { ...filter };
    this.loadUsers();
  }

  onRemoveUser(cpf: string): void {
    this.sub.sink = this.userService.deleteUser(cpf).subscribe({
      next: ()=>{
        this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Usuário removido com Sucesso!' });
      },
      error: (err: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: err.error.errors[0].message });
      }
    });
  }

  private loadUsers(): void {
    const filter = pickBy(this.filter, identity)
    this.sub.sink = this.userService.getUsers(filter).subscribe({
      next: (res: ResponseAPI<User[]>) => {
        this.dataSource = res.body;
      },
      error: (err: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: err.error.errors[0].message });
      }
    });
  }

}
