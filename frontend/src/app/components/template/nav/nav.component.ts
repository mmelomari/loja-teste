import { Component, OnInit } from '@angular/core';

@Component({ //isso é um decorator - usado para configurar as propriedades do angular
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
