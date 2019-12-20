import { Component, OnInit } from '@angular/core';
import { EmloyeeService } from '../emloyee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee list details</h2>
  <ul *ngFor = "let employee of employees">
    <li>{{employee.id}}.{{employee.name}}-{{employee.age}}</li>
  </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  constructor(private _employeeService: EmloyeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
