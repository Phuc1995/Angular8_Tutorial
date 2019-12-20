import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  <div [ngSwitch]="color">abc
  <div *ngSwitchCase="'red'">You picked red color</div>
  <div *ngSwitchCase="'blue'">You picked blue color</div>
  <div *ngSwitchCase="'green'">You picked green color</div>
  <div *ngSwitchDefault>Pick again</div>
</div>
    
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
export class TestComponent implements OnInit {

  public name = "ABC";
  public id = "myId"
  public disabled = false;
  public success = "text-success";
  public hasError = true;
  public isSpecial = true;
  public highlightColor = "orange";
  public greeting = "";
  public color = "blue";

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }


  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "hello: " + this.name;
  }

  onClick(){
    console.log("welcome");
    this.greeting = "Welcome abc";
  }

  logMessage(value){
    console.log(value);
  };
}
