import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from "primeng/table";
import { ClockIn } from '../../shared/interfaces';
import { ClockInService } from '../../shared/services/http/clock-in.service';
import { SubSink } from 'subsink';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-clock-in.component',
  imports: [TableModule, CardModule, ButtonModule, RouterModule],
  templateUrl: './clock-in.component.html',
  styleUrl: './clock-in.component.scss',
})
export class ClockInComponent implements OnInit, OnDestroy {

  currentTime: string = '';
  currentDate: string = '';
  currentGMT: string = '';
  interval!: ReturnType<typeof setInterval>;
  timesTamp!: ClockIn;

  private sub = new SubSink();

  private clockInService = inject(ClockInService);
  private messageService = inject(MessageService);

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.updateTime(new Date());
    this.updateDate(new Date())
    this.setIntervalDateTime();
  }

  sendTimesTamp(): void {
    const timesTampNow = new Date().toISOString();
    let data: ClockIn = {
      ...this.timesTamp,
      cpf: '45454545454',
      timestamp: timesTampNow,
      type: 'LUNCH_OUT',
      location: 'Cabo de Sando Agostinho',
      latitude: '012345',
      longitude: '543211'
     }

     console.log(data)
     this.sub.sink = this.clockInService.sendClockIn(data).subscribe({
      next: () => {
         this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Ponto Batido com Sucesso!' });
      },
      error: (err: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: err.error.errors[0].message });
      }
     })

  }

  private setIntervalDateTime(): void {
    this.interval = setInterval(() => {
      const date = new Date();
      this.updateTime(date);
      this.updateDate(date);
    }, 1000);
  }

  private updateTime(date: Date): void {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    this.currentTime = `${hours}:${minutes}:${seconds}`;

    const gmtMatch = date.toString().match(/GMT[^\s]+/);
    this.currentGMT = gmtMatch ? gmtMatch[0] : 'GMT';
  }

  private updateDate(date: Date): void {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    this.currentDate = `${day}/${month}/${year}`;
  }
}
