import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

@Input()
  photoCover:string = ""

  @Input()
  photoGit:string = ""

  @Input()
  photoYt:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
