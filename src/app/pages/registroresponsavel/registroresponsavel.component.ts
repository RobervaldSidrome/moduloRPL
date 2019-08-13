import { Component, OnInit } from "@angular/core";
//import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Responsavel } from "src/app/pages/registroresponsavel/shared/responsavel";
import { ResponsavelService } from 'src/app/pages/registroresponsavel/shared/responsavel.service';
import { ResponsavelDataService } from 'src/app/pages/registroresponsavel/shared/responsavel-data.service';


@Component({
  selector: "app-registroresponsavel",
  templateUrl: "registroresponsavel.component.html"
})
export class RegistroResponsavel implements OnInit {
  
  responsavel: Responsavel;
  key: string;

  constructor(private responsavelService: ResponsavelService, 
              private responsavelDataService: ResponsavelDataService
              ) { }


              
  ngOnInit() {//Seta os atributos no formGroup para validar os campos obrigatórios

      this.responsavel = new Responsavel();

  }

  onSubmit(){
    if(this.key){

    }else{
      this.responsavelService.incluir(this.responsavel);
    }

    this.responsavel = new Responsavel();
  }
}
