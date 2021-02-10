import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router:Router, public afs: AngularFirestore) { }

  logout(){
    
      this.AFauth.signOut().then(()=>{
        this.router.navigate(["/login"])
      });
      
    
  }
  login(correo:string, contrasena:string){

      return new Promise((resolve, reject)=>{
        this.AFauth.signInWithEmailAndPassword(correo,contrasena).then(user =>{
          resolve(user)
        }).catch(err => reject(err));
      })
      
  }
  async sendVerificationEmail(): Promise<void> {}
  async loginGoogle(): Promise<void> {}

  async Register(correo:string, contrasena:string){
    return this.AFauth.createUserWithEmailAndPassword(correo,contrasena);

  }

  registrarUsuario(user:Usuario){
    let refUser= this.afs.collection("Users");


    console.log(user.uid,user.nombre, user.apellido,user.correo);
    refUser.doc(user.uid).set(Object.assign({},user),{merge:true});
  
  }


  async resetContra(): Promise<void> {}

 

}
