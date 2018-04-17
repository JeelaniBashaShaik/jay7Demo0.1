import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvComponent } from './csv.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CsvComponent],
  exports: [CsvComponent]
})
export class CsvModule { }
