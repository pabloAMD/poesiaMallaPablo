import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-u',
  templateUrl: './login-u.page.html',
  styleUrls: ['./login-u.page.scss'],
})
export class LoginUPage implements OnInit {

  correo:string;
  contra:string;
  codigoUsuario : string;
  


  constructor(private autentification: AuthService, public router: Router) { }

  ngOnInit() {
  }

  async onSubmitLogin(){

    await this.autentification.login(this.correo,this.contra).then(res => {
      this.router.navigate(['/registro'])
    }).catch(err => alert("No existe el usuario"));

  }


}
