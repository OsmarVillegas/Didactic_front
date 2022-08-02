import { Component, OnInit } from '@angular/core';
import { Actividad } from '../../model/actividad';
import { Inject } from '@angular/core';
import { ActividadService } from '../../service/actividad.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-tema',
  templateUrl: './agregar-tema.component.html',
  styleUrls: ['./agregar-tema.component.css']
})
export class AgregarTemaComponent implements OnInit {

  form:FormGroup;

  constructor(public Instructor:ActividadService, private formularioTemas:FormBuilder) {
    this.form = this.formularioTemas.group({
      _id: [0,],            //<<<
      Tema: [0],
      nombre: [''],
      valor: [0],
      tipo: [0],
      cveTemaPreresiquisto: [0],
      intentos: [0],
      contenido: [""]
    })
   }


  formReset(form:NgForm){
    this.Instructor.actividad=form.value;
    form.reset();
  }

  formDelete(){
    
  }

  ngOnInit(): void {
  }

}
