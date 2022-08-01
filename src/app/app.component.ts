import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  baseDeDatos = [new Persona("juan",45,false),new Persona("alfred",432,false)]
  imagenEliminar = "assets/images/eliminar-icono.png"
  imagenEditar = "assets/images/editar-icono.png"
  nombreAgregar:string | null=null;
  dniAgregar:number | null=null;
  errorEspacioEnBlanco:boolean=false;
  indexEditar:number=0;
  dniEnBlanco:boolean=false;
  nombreEnBlanco:boolean=false;
  editarIndex(list:Persona){
    this.indexEditar=this.baseDeDatos.indexOf(list)
  }
  agregarADatos(){
  if(!this.comprobarDni() && !this.inputBlanco()){
    this.baseDeDatos.push(new Persona(this.nombreAgregar,this.dniAgregar,false))
    this.nombreAgregar=null;
    this.dniAgregar=null;
    this.errorEspacioEnBlanco=false;
    this.nombreEnBlanco=false;
    this.dniEnBlanco=false;}
    else if(this.inputBlanco()){this.errorEspacioEnBlanco=true}

  }
  eliminarPerfil(object:Persona){
    let index= this.baseDeDatos.indexOf(object)
    this.baseDeDatos.splice(index,1);
  }
  editarPerfil(object:Persona){

    this.baseDeDatos.splice(this.indexEditar,1,object);
  }
  comprobarDni(){
    let active=false;
    for(let list of this.baseDeDatos){

      if(list.dni==this.dniAgregar){

        return true
      }

        }  return active
    }
    inputBlanco(){
      if(this.dniAgregar==null || this.nombreAgregar==null){
        if(this.dniAgregar==null && this.nombreAgregar==null){
          this.dniEnBlanco=true;
          this.nombreEnBlanco=true;
        }
        else if (this.nombreAgregar==null) {
          this.nombreEnBlanco=true;
          this.dniEnBlanco=false;
        }
        else {
          this.dniEnBlanco=true;
        this.nombreEnBlanco=false;}
        return true
      }
      else{return false
        }
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
