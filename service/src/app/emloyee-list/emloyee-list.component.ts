import { Component, OnInit } from '@angular/core';
import { EmloyeeService } from '../emloyee.service';

@Component({
  selector: 'app-emloyee-list',
  template: `
    <h2>Employee list</h2>
    <ul *ngFor = "let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: ['./emloyee-list.component.css']
})
export class EmloyeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmloyeeService) { }


  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
