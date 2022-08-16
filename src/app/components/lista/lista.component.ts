import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from "../../models/persona.model"
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() baseDeDatos!: Array<Persona>;
  @Output() eliminar = new EventEmitter<Persona>();
  @Output() editar = new EventEmitter<Persona>();
  @Output() modificar = new EventEmitter<Persona>();
  imagenEliminar = "assets/images/eliminar-icono.png"
  imagenEditar = "assets/images/editar-icono.png"
  editarBool=false;
  nombreEditar:string | null=null;
  dniEditar:number | null=null;
  errorEspacioEnBlanco:boolean=false;
  nombreEnBlanco:boolean=false;
  dniEnBlanco:boolean=false;

  eliminarPerfil(object:Persona){
   this.eliminar.emit(object)
  }

  editarPerfil(list:Persona){
    list.editar=true
    this.nombreEditar=list.nombre
    this.dniEditar=list.dni
  }

  modificarPerfil(object:Persona){
    if(!this.comprobarDni(object.dni) && !this.inputBlanco()){
    this.editar.emit(object)
    this.modificar.emit(new Persona(this.nombreEditar,false,this.dniEditar))
    this.editarBool=false
    this.nombreEnBlanco=false;
    this.dniEnBlanco  =false;
  }
  else if(this.inputBlanco()){this.errorEspacioEnBlanco=true}}

  comprobarDni(dni?:number | null){
    let active=false;
    for(let list of this.baseDeDatos){
      if(dni!=this.dniEditar && list.dni==this.dniEditar){
        return true
      }
    }  return false
    }

    inputBlanco(){
      if(this.dniEditar==null || this.nombreEditar==null){
        if(this.dniEditar==null && this.nombreEditar==null){
          this.dniEnBlanco=true;
          this.nombreEnBlanco=true;
        }
        else if (this.nombreEditar==null) {
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

  constructor() { }

  ngOnInit(): void {}}
