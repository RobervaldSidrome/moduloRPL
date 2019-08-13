import { Injectable } from '@angular/core';
import { Responsavel } from './responsavel';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ResponsavelService {

  constructor(private db: AngularFireDatabase) { }

  incluir(responsavel: Responsavel){
    this.db.list('registroresponsavel').push(responsavel)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  atualizar(responsavel: Responsavel, key: string){
    this.db.list('registroresponsavel').update(key, responsavel)
      .catch((error: any) => {
         console.error(error); 
      });
  }

  buscarTodos(){
    return this.db.list('registroresponsavel')
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(r => ({key: r.payload.key, ...r.payload.val() }));
        })
      );
  }

  excluir(key: string){
    this.db.object(`responsavel/${key}`).remove();
  }

}
