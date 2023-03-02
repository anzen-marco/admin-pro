import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {
  public cssLink = document.querySelector('#theme');

  ngOnInit(): void {
    let temaElegido = localStorage.getItem('tema') || './assets/css/colors/red.css';    
    this.cssLink.setAttribute('href', temaElegido);
  }
}