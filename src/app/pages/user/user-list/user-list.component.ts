import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-user-list',
  imports: [ TableModule, CardModule, ButtonModule, IconFieldModule ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
   customers = [
  {
    "fullName": "João Mendes",
    "cpf": "01234567890",
    "email": "joao.mendes@example.com",
    "phone": "(11) 98765-4321",
    "dateBirthday": "1990-03-12",
    "role": "Desenvolvedor",
    "dailyHours": 8,
    "startTime": "08:00",
    "endTime": "17:00"
  },
  {
    "fullName": "Maria Souza",
    "cpf": "12345678901",
    "email": "maria.souza@example.com",
    "phone": "(21) 99876-5432",
    "dateBirthday": "1988-07-25",
    "role": "Analista de Sistemas",
    "dailyHours": 8,
    "startTime": "09:00",
    "endTime": "18:00"
  },
  {
    "fullName": "Carlos Oliveira",
    "cpf": "23456789012",
    "email": "carlos.oliveira@example.com",
    "phone": "(31) 91234-5678",
    "dateBirthday": "1995-11-10",
    "role": "Designer",
    "dailyHours": 6,
    "startTime": "10:00",
    "endTime": "16:00"
  },
  {
    "fullName": "Fernanda Lima",
    "cpf": "34567890123",
    "email": "fernanda.lima@example.com",
    "phone": "(41) 99123-4567",
    "dateBirthday": "1992-05-08",
    "role": "Gerente de Projetos",
    "dailyHours": 9,
    "startTime": "08:30",
    "endTime": "17:30"
  },
  {
    "fullName": "Rafael Santos",
    "cpf": "45678901234",
    "email": "rafael.santos@example.com",
    "phone": "(51) 99321-0987",
    "dateBirthday": "1993-02-19",
    "role": "Engenheiro de Software",
    "dailyHours": 8,
    "startTime": "07:30",
    "endTime": "16:30"
  },
  {
    "fullName": "Juliana Rocha",
    "cpf": "56789012345",
    "email": "juliana.rocha@example.com",
    "phone": "(61) 99567-1234",
    "dateBirthday": "1997-10-03",
    "role": "QA Tester",
    "dailyHours": 7,
    "startTime": "09:00",
    "endTime": "17:00"
  },
  {
    "fullName": "Pedro Costa",
    "cpf": "67890123456",
    "email": "pedro.costa@example.com",
    "phone": "(71) 99456-7890",
    "dateBirthday": "1989-12-15",
    "role": "Administrador de Sistemas",
    "dailyHours": 8,
    "startTime": "08:00",
    "endTime": "17:00"
  },
  {
    "fullName": "Larissa Almeida",
    "cpf": "78901234567",
    "email": "larissa.almeida@example.com",
    "phone": "(81) 99234-5678",
    "dateBirthday": "1994-09-28",
    "role": "Analista de RH",
    "dailyHours": 6,
    "startTime": "09:00",
    "endTime": "15:00"
  },
  {
    "fullName": "Gabriel Teixeira",
    "cpf": "89012345678",
    "email": "gabriel.teixeira@example.com",
    "phone": "(91) 99111-2233",
    "dateBirthday": "1991-06-21",
    "role": "Suporte Técnico",
    "dailyHours": 8,
    "startTime": "08:00",
    "endTime": "17:00"
  },
  {
    "fullName": "Camila Fernandes",
    "cpf": "90123456789",
    "email": "camila.fernandes@example.com",
    "phone": "(85) 99678-1234",
    "dateBirthday": "1996-01-17",
    "role": "Product Owner",
    "dailyHours": 8,
    "startTime": "09:00",
    "endTime": "18:00"
  }
]

}

