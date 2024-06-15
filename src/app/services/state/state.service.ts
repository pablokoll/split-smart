import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  getState<T>(key: string): T {
    const state = localStorage.getItem(key);
    return state ? JSON.parse(state) : null;
  }

  setState<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeState(key: string): void {
    localStorage.removeItem(key);
  }

  clearState(): void {
    localStorage.clear();
  }
}
