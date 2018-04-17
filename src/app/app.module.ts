import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CsvModule } from './csv/csv.module';

import { AppComponent } from './app.component';
import { JbGridComponent } from './jb-grid/jb-grid.component';
import { NgxDataGridModule } from '@jeelanibashashaik07/ngxdatagrid';




@NgModule({
  declarations: [
    AppComponent,
    JbGridComponent
  ],
  imports: [
    BrowserModule,CsvModule,NgxDataGridModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
