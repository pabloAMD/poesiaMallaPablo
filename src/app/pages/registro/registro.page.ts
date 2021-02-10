import { Component, OnInit } from '@angular/core';
import { Poesia } from '../../modelo/poesia';
import { Router } from '@angular/router';
import { PoesiaService } from '../../servicios/poesia.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { UUID } from 'angular2-uuid';
import {​​ finalize }​​ from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  imagePoesia:any;
  poesia:Poesia= new Poesia();
  turi:any;
  constructor(public router: Router, public poesiaService: PoesiaService, public storage:AngularFireStorage) { }

  ngOnInit() {
  }

  crearProducto(){
    console.log(this.imagePoesia)
    this.poesiaService.guardarPoesia(this.poesia);
    this.router.navigate(["/"])
  }

  cargarImgBase(){
    let uuid = UUID.UUID();
    let path= "imagenes/"+uuid;
    let varRef = this.storage.ref(path);
    let subiendo=this.storage.upload(path,this.imagePoesia);
    subiendo.snapshotChanges().pipe(finalize(()=>{
      varRef.getDownloadURL().subscribe((subs)=>{
        this.poesia.img=subs;
        this.crearProducto();
      })
    })).subscribe((ano)=>{})
    

  }

  cargaImagen(event){
    console.log(event);
    if(event.target.files && event.target.files[0]){
      let recupera= new FileReader();
      this.imagePoesia=  event.target.files[0];

    }
  }

}
