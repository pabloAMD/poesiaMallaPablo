import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { PoesiaService } from '../../servicios/poesia.service';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  poesia:any[];
  comentarios: any[];
  codigoUsuario : string;
  constructor(public router: Router, public poesiaService: PoesiaService, public storage:AngularFireStorage, private autentification: AuthService) { }

  ngOnInit() {
    this.recuperarCategoriasEm();
  }

  

  async recuperarCategoriasEm(){
    await this.poesiaService.getPoesia().subscribe((respuesta:any)=>{
     
      this.poesia = respuesta;
      console.log("holaaaaaaaaaaaa",this.poesia);
      this.recuperarComentarios();

    })
    
   
  }

  async recuperarComentarios(){
    await this.poesiaService.findCategoriaPorID(this.poesia[0].uid).subscribe((respuesta:any)=>{
     
      this.comentarios = respuesta;
      console.log("holaaaaaaaaaaaa",this.comentarios);

    })
  }

  async publicar(){

    this.router.navigate(["/login-u"]);

  }


}
