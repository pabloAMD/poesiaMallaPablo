import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-registro-u',
  templateUrl: './registro-u.page.html',
  styleUrls: ['./registro-u.page.scss'],
})
export class RegistroUPage implements OnInit {

  user: Usuario=new Usuario();


  contrasena:string;

  constructor(private auth: AuthService,public router: Router,public storage: AngularFireStorage) { }
  ngOnInit() {
  }

  async onSubmitRegistro(){ 
    await this.auth.Register(this.user.correo, this.contrasena).then(res=>{
      this.user.uid=res.user.uid;
      this.auth.registrarUsuario(this.user);
      this.router.navigate(['/registro'])

    }).catch(err => alert("No existe el usuario"+err));
    


  }

}
