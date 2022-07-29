import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
    this.modificar.emit(new Persona(this.nombreEditar,this.dniEditar,false))
    this.editarBool=false
  }
  else if(this.inputBlanco()){this.errorEspacioEnBlanco=true}}

  comprobarDni(dni?:number | null){
    let active=false;
    for(let list of this.baseDeDatos){
      if(dni!=this.dniEditar && list.dni==this.dniEditar){
        return true
      }
        }  return active
    }

    inputBlanco(){
      if(this.dniEditar==null || this.nombreEditar==null){
        return true
      }
      else{return false}
    }

  constructor() { }

  ngOnInit(): void {}}
  export class Persona{
   dni;
   nombre;
   editar;

    constructor(n:string | null,d:number | null, e:boolean) {
      this.dni=d;
      this.nombre=n;
      this.editar=e;
    }}
