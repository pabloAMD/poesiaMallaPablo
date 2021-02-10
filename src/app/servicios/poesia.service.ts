import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Poesia } from '../modelo/poesia';
import { Comentario } from '../modelo/comentario';

@Injectable({
  providedIn: 'root'
})
export class PoesiaService {

  constructor(public afs: AngularFirestore) { }


  getPoesia() : Observable<any>{
    return this.afs.collection("poesia").valueChanges();
  }

  findCategoriaPorID(uidPoesia:string) :Observable<any>{
    console.log(uidPoesia)
    return this.afs.collection("comentarios",ref => ref.where("uidPoesia","==",uidPoesia)).valueChanges();

  }


  guardarPoesia(poesia: Poesia){
    const refTu= this.afs.collection("poesia");

    if (poesia.uid==null) {
      poesia.uid= this.afs.createId();
    }

    refTu.doc(poesia.uid).set(Object.assign({},poesia),{merge:true});
  }

  guardarComentarios(comentario: Comentario){
    const refTu= this.afs.collection("comentarios");

    if (comentario.uid==null) {
      comentario.uid= this.afs.createId();
    }

    refTu.doc(comentario.uid).set(Object.assign({},comentario),{merge:true});
  }

}
