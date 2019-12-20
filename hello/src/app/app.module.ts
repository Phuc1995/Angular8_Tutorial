import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ComponentsMiscComponent } from './components-misc/components-misc.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StructuralDirectivesComponent,
    ComponentsMiscComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
