import { Injectable } from '@angular/core';
import { Actividad, QUIZ } from '../model/actividad';
import { AgregarTemaComponent } from '../components/agregar-tema/agregar-tema.component';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {


  public nomContenido = 'default';

  public actividad: Actividad ={Tema:0, nombre:'', valor:0, tipo:0, cveTemaPreresiquisto:0, intentos:0, contenido:this.nomContenido}

  public QUIZ: QUIZ = { Tema:0, pregunta: '', valor: 0, TipoPregunta: 0 , nivel: '' }

  QUIZS: QUIZ[] = [
    {_id:1, Tema:1, pregunta: '¿Pregunta?', valor: 1, TipoPregunta: 0 , nivel: ''},
    {_id:2, Tema:1, pregunta: '¿Qué podria preguntar?', valor: 2, TipoPregunta: 0 , nivel: ''},
    {_id:3, Tema:1, pregunta: '¿Cuantos años tienes?', valor: 2, TipoPregunta: 0 , nivel: '' },
    {_id:4, Tema:1, pregunta: '¿Cuentas cuantas ranas tiene el pez?', valor: 5, TipoPregunta: 0 , nivel: ''} 
    
  ]
  
  actividades: Actividad[] = [
    {_id:1, Tema:1, nombre:'A sumar, ¿Cuánto es 1 + 1?', valor: 60, tipo: 5 , cveTemaPreresiquisto: 1, intentos: 2, contenido:'QUIZ'},
    {_id:2, Tema:1, nombre:'¿Números?, que son y para que sirven', valor: 60, tipo: 4 , cveTemaPreresiquisto: 1, intentos: 2, contenido:'Laboratorio'}
  ]

  createTema(){
    this.calcularContenido()
    this.actividades.push(this.actividad);
    console.log(this.actividades);
    
  }

  eliminarTema(_id:any){
    const indexOfObject = this.actividades.findIndex(object => {
      return object._id === _id;
    });

    this.actividades.splice(indexOfObject,1);
    return  this.actividades;

  }

  calcularContenido(){

    let num = Number(this.actividad.tipo);
    
    console.log(num);

    switch(num){
      case 1:
        this.actividad.contenido = 'Lectura';
        break;

      case 2:
        this.actividad.contenido = 'Video';
        break;

      case 3:
        this.actividad.contenido = 'Juego';
        break;
      
      case 4:
        this.actividad.contenido = 'Laboratorio';
        break;
      
      case 5:
        this.actividad.contenido = 'QUIZ';
        break;
    }

    console.log('Después de ejecutarlos: ' + this.nomContenido);
  }

constructor() { }

}
