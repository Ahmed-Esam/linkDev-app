import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  isValid:boolean = true;

  toggleMenu(){
    this.isValid = !this.isValid;
  }

  ngOnInit(): void {
  }

}
