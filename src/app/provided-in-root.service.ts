import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvidedInRootService {

  static i = 0;

  constructor() {
    ProvidedInRootService.i++;
    console.log('Service provided in ROOT - ID = ' + ProvidedInRootService.i);
  }
}
