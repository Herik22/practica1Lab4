import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Actor } from '../entidades/actor';

@Injectable({
  providedIn: 'root'
})
export class ServicesFirebaseService {

  constructor(private afauth:AngularFireAuth,private fireStore:AngularFirestore) {}

  async login(email:string,password:string){
    try {
      return await this.afauth.signInWithEmailAndPassword(email,password)
    }catch (error) {
  
      throw error
    }
  }

  agregarActor(actor:Actor){
    return this.fireStore.collection('actoresCollection').add(JSON.parse(JSON.stringify(actor)));
  }

  async traerColeccion(nombreColeccion:string){
    return  await  this.fireStore.collection(nombreColeccion).snapshotChanges()
  }
  
}
