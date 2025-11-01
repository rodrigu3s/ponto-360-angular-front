import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [PanelModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
