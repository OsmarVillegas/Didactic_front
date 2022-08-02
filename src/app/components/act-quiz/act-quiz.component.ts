import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../service/actividad.service';

@Component({
  selector: 'app-act-quiz',
  templateUrl: './act-quiz.component.html',
  styleUrls: ['./act-quiz.component.css']
})
export class ActQUIZComponent implements OnInit {

  constructor(public Instructor:ActividadService) { }

  ngOnInit(): void {
  }

}
