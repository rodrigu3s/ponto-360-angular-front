import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { SideBarService } from '../../services/side-bar.service';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule, RouterModule, ButtonModule, TooltipModule, IconFieldModule, RippleModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {

  private sideBarService = inject(SideBarService);

  expanded = false;

  toggleSidebar() {
    this.expanded = !this.expanded;
    this.sideBarService.setCondensed(this.expanded);
  }
}
