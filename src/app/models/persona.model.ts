export class Persona{
 dni;
 nombre;
 editar;
 constructor(n:string | null,e:boolean,d:number | null){
   this.dni=d;
   this.nombre=n;
   this.editar=e;
 }
}
