import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-components-misc',
  template: `
    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | slice:2:3}}</h2>
    <h2>{{person | json}}</h2>

    <h2>{{5.678 | number:'1.-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>

    <h2>{{0.25 | percent}}</h2>
    <h2>{{0.25 | currency}}</h2>
    <h2>{{250000 | currency:'VND'}}</h2>
    <h2>{{0.25 | currency:'GBP':'code'}}</h2>

    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
  `,
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
  }
`]
})
export class ComponentsMiscComponent implements OnInit {

 public name = "Codevolution";
 public messag = "Welcome to Codevolution"; 
 public date = new Date();
 public person = {
    "firtName": "Phuc",
    "lastName": "Nguyen"
 };


  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit("Hey");
  }
}
