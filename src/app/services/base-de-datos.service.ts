import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {
  baseDeDatos:Persona[] = [new Persona("juan",45,false),new Persona("alfred",432,false)]
  indexEditar:number=0;
  constructor() { }
  giveArray(
  ){
    return this.baseDeDatos;
  }
  editarIndex(list:Persona){
    this.indexEditar=this.baseDeDatos.indexOf(list)
  }
  agregarADatos(datos:Persona){
    this.baseDeDatos.push(datos)
  }
  eliminarPerfil(object:Persona){
    let index= this.baseDeDatos.indexOf(object)
    this.baseDeDatos.splice(index,1);
  }
  editarPerfil(object:Persona){

    this.baseDeDatos.splice(this.indexEditar,1,object);
  }
}
export class Persona{
 dni;
 nombre;
 editar;

  constructor(n:string | null,d:number | null,e:boolean) {
    this.dni=d;
    this.nombre=n;
    this.editar=e;
  }}
