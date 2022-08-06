import { Component, OnInit, Input } from '@angular/core';
import { BaseDeDatosService } from '../../services/base-de-datos.service';

@Component({
  selector: 'app-content-bar',
  templateUrl: './content-bar.component.html',
  styleUrls: ['./content-bar.component.scss']
})
export class ContentBarComponent implements OnInit {
  datos:Persona[]=[]
  imagenEliminar = "assets/images/eliminar-icono.png"
  imagenEditar = "assets/images/editar-icono.png"
  nombreAgregar:string | null=null;
  dniAgregar:number | null=null;
  errorEspacioEnBlanco:boolean=false;

  dniEnBlanco:boolean=false;
  nombreEnBlanco:boolean=false;
  editarIndex(list:Persona){
    this.baseDeDatos.editarIndex(list)
  }
  agregarADatos(){
  if(!this.comprobarDni() && !this.inputBlanco()){
    this.baseDeDatos.agregarADatos(new Persona(this.nombreAgregar,this.dniAgregar,false))
    this.nombreAgregar=null;
    this.dniAgregar=null;
    this.errorEspacioEnBlanco=false;
    this.nombreEnBlanco=false;
    this.dniEnBlanco=false;}
    else if(this.inputBlanco()){this.errorEspacioEnBlanco=true}

  }
  eliminarPerfil(object:Persona){
    this.baseDeDatos.eliminarPerfil(object)

  }
  editarPerfil(object:Persona){

    this.baseDeDatos.editarPerfil(object)
  }
  comprobarDni(){
    let active=false;
    for(let list of this.datos){

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





  constructor(public baseDeDatos:BaseDeDatosService) { }

  ngOnInit(): void {
    this.datos=this.baseDeDatos.giveArray();
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
