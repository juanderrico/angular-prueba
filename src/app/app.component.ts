import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  baseDeDatos = [new Persona("juan",45),new Persona("alfred",432)]
  imagenEliminar = "assets/images/eliminar-icono.png"
  imagenEditar = "assets/images/editar-icono.png"
  nombreAgregar:string | null=null;
  dniAgregar:number | null=null;
  inputblanco:boolean=false;
  agregarADatos(){

    this.baseDeDatos.push(new Persona(this.nombreAgregar,this.dniAgregar))
    this.nombreAgregar=null;
    this.dniAgregar=null;

  }
  eliminarPerfil(object:Persona){
    let index= this.baseDeDatos.indexOf(object)
    this.baseDeDatos.splice(index,1);
  }
  editarPerfil(){
  }
  comprobarDni(){
    let active=false;
    for(let list of this.baseDeDatos){

      if(list.dni==this.dniAgregar){
        active=true
        return true
      }

        }  return active
    }
    inputBlanco(){
      if(this.dniAgregar==null || this.nombreAgregar==null){
        return true
      }
      else{return false}
    }


}
export class Persona{
 dni;
 nombre;

  constructor(n:string | null,d:number | null) {
    this.dni=d;
    this.nombre=n;
  }}
