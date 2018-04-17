import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent {

@Input() rows;
@Input() fileOptions;

  downloadFile(){
    let headers = Object.keys(this.rows[0]);
    let content:string='';
    let headerLength = headers.length;
    headers.map((header,headerIndex)=>{
      if(headerIndex == 0){
        content = content + this.modifyHeaderName(header); // skipping the delimiter before first header
      }else{
        content = content + this.fileOptions.delimiter + this.modifyHeaderName(header);
      }
    })
    content = content + '\r\n';                           // appending new line after the header row
    this.rows.map((row,rowIndex)=>{
      headers.map((header,headerIndex)=>{
        if(row[header] == null || undefined){
          row[header] = '';                              // replacing all the null and undefined values because
        }                                                //(we dont want null or undefined to be printed in the downloaded file)
        if(headerIndex == 0){
          content = content + row[header];
        }else{
          content = content + this.fileOptions.delimiter + row[header];
        }
      })
      content = content + '\r\n';
    })
    let downloadLink = document.createElement("a");     // creating a temporary anchor element 
    let blob = new Blob([content],{type : "text/plain"});
    let url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = this.fileOptions.fileName + '.csv';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  modifyHeaderName(header:string){
    return header.replace(/([A-Z])/g, ' $1').split(' ').join('_').toUpperCase();
  }

}