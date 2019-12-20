import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-structural-directives]',
  template: `
    <div [ngSwitch]="color">abc
        <div *ngSwitchCase="'red'">You picked red color</div>
        <div *ngSwitchCase="'blue'">You picked blue color</div>
        <div *ngSwitchCase="'green'">You picked green color</div>
        <div *ngSwitchDefault>Pick again</div>
    </div>

    <div *ngFor = "let color of colors; index as i"> 
        <h2>{{i}}-{{color}}</h2>
    </div>
  `,
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  public color = "green";
  public colors = ["red","blue","green","yellow"];

  constructor() { }

  ngOnInit() {
  }

}
