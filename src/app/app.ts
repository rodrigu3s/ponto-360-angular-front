import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { SideBarService } from './shared/services/side-bar.service';
import { Toast, ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, NgClass, Toast, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('ponto-360-angular-front');
  private sideBarService = inject(SideBarService);

  isSideBarCondensed = false;

  ngOnInit(): void {
    this.sideBarService.condensed$.subscribe((isCondensed)=> {
      this.isSideBarCondensed = isCondensed;
    });
  }
}
