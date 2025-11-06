import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideBarService {

  private isOpen = new Subject<boolean>();

  condensed$ = this.isOpen.asObservable();

  setCondensed(value: boolean): void {
    this.isOpen.next(value);
  }

}
