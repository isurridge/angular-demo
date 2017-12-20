import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {

  }

  get(key: string): any {
    return localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    return localStorage.setItem(key, value);
  }

  remove(key: string): void {
    return localStorage.removeItem(key);
  }
}
