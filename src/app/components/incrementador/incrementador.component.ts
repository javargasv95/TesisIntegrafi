import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtprogress', {static: false}) txtprogress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  constructor() {
    // console.log('leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  @Output('actualizavalor') cambioValor: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    // console.log('leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

onChanges( newvalue: number) {

  if (newvalue >= 100) {
  this.progreso = 100;
} else if (newvalue <= 0) {
    this.progreso = 0;
} else {
  this.progreso = newvalue;
}

  this.txtprogress.nativeElement.value = this.progreso;
  this.cambioValor.emit(this.progreso);
  this.txtprogress.nativeElement.focus();
}


cambiarValor( valor: number ) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }

}
