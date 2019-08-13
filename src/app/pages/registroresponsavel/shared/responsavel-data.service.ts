import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Responsavel } from "./responsavel";

@Injectable({
  providedIn: 'root'
})
export class ResponsavelDataService {

  private responsavelSource = new BehaviorSubject({responsavel: null, key:''});
  currentResponsavel = this.responsavelSource.asObservable();

  constructor() { }

  changeResponsavel(responsavel: Responsavel, key: string){
    this.responsavelSource.next({responsavel: responsavel, key: key});
  }

}
