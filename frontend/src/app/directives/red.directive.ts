import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'//esse é o seletor da diretiva
})
export class RedDirective { 
  //vai ser injetada uma refencia para o elemento, para poder colocar cor nele

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b'
  }
    
}
