import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmloyeeListComponent } from './emloyee-list/emloyee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmloyeeService } from './emloyee.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmloyeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmloyeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
