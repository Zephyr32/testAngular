import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private StateNav = new BehaviorSubject<boolean>(false);
  currentStateNav = this.StateNav.asObservable();

  constructor() { }

  changeStateNav(value: boolean) {
    this.StateNav.next(value)
  }

}