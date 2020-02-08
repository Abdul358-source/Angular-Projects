import { Injectable } from '@angular/core';
const KEY = 'eAuditStorage';


@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  logout() {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  set(key: string, value: any) {
    const localValue = this.eAuditObject();
    localValue[key] = value;
    sessionStorage.setItem(KEY, JSON.stringify(localValue));
  }
  get(key: string): any {
    const localValue = this.eAuditObject();
    return localValue[key];
  }

  clear(): void {
    sessionStorage.clear();
  }

  eAuditObject(): any {
    return JSON.parse(sessionStorage.getItem(KEY)) || {};
  }
  
}
