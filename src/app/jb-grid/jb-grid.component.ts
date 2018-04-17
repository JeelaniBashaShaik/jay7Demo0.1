import { Component, OnInit,Input,Output,ViewChild,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jb-grid',
  templateUrl: './jb-grid.component.html',
  styleUrls: ['./jb-grid.component.css']
})
export class JbGridComponent implements OnInit {

  @Input('rows') rows:any;
  @Input('columns') columns:any;
  @Input('gridHeight') gridHeight:any;
  @Input('gridWidth') gridWidth:any;
  @Input('headerRowHeight') headerRowHeight:any;
  @Input('selectionType') selectionType:string;
  @Output()  selectedData: EventEmitter<any> = new EventEmitter();
  @ViewChild('normalCellTemplate') normalCellTemplate:any;
  
  columnWidth:any;
  isCheckboxable:boolean = false;
  columnProps=[];
  rowsCopy=[];
  gridRows=[];
  isAsc:boolean=false;
  lastPropToSort:string;
  selectedRows:any=[];
  columnsForBody=[];
  gridRowWidth:number=0;
  headerRowWidth:number;
  dragSourceColumnIndex:number;
  dropDestinationColumnIndex:number;
  constructor() { }

call10(x){
  console.log(x);
}
  fgh = null;
  call(e,columnIndex){
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
    this.fgh = e.target;
    //console.log(this.fgh,"123");
   // console.log(columnIndex,"source");
    this.dragSourceColumnIndex = columnIndex;
  }
  
allowDrop(ev) {
      ev.preventDefault();
  }
  
  drop(ev,c) {
      ev.preventDefault();
  //console.log(ev);
 // console.log(c,"dest");
  this.dropDestinationColumnIndex=c;
    if (this.fgh != ev.target) {
      this.fgh.innerHTML = ev.target.innerHTML;
      ev.target.innerHTML = ev.dataTransfer.getData('text/html');
    }
    //console.log(this.columns,"columns");
    console.log(this.fgh.innerHTML,"source html");
    console.log(ev.target.innerHTML,"dest html");
  console.log(this.dragSourceColumnIndex,"source");
  console.log(this.dropDestinationColumnIndex,"destionation");
  console.log(this.columns,"before");
/*   let item1 = this.columns[this.dragSourceColumnIndex];
  let item2 = this.columns[this.dropDestinationColumnIndex];
  let dupCol = [];
  this.columns[this.dropDestinationColumnIndex] = item1;
  this.columns[this.dragSourceColumnIndex] = item2;
  this.columns = [...this.columns];
  console.log(this.columns,"after"); */
/*   console.log(this.columns,"before")
  let dupColumns=[...this.columns];
  let item1 = dupColumns[this.dragSourceColumnIndex];
  let item2 = dupColumns[this.dropDestinationColumnIndex];
  dupColumns[this.dropDestinationColumnIndex] = item1;
  dupColumns[this.dragSourceColumnIndex] = item2;
  console.log(dupColumns,"after");
  this.columns = [...dupColumns];
  console.log(this.columns);                 */
  }


  ngOnInit() {
    if(this.selectionType == 'multiple'){
      this.isCheckboxable = true;
    }else if(this.selectionType == 'single'){
      this.isCheckboxable = false;
    }
    this.headerRowWidth = this.gridWidth;
    let x:number;  
    if(this.isCheckboxable){
      this.columns = [{name:'checkboxColumn',width:'25'},...this.columns];
      x = this.columns.length;
      this.columnWidth = ((this.gridWidth-x-25)/(x-1));
      this.columns.map(column=>{
        if(column.name != 'checkboxColumn'){
          column['width'] = this.columnWidth;
          column['cellTemplate'] = this.normalCellTemplate;
        } 
      })
    }else{
      x = this.columns.length;
      this.columnWidth = ((this.gridWidth-x)/x);
      this.columns.map(column=>{
        column['width'] = this.columnWidth;
        column['cellTemplate'] = this.normalCellTemplate;
      })
      this.columnsForBody = [...this.columns];
    }
    this.columnProps = Object.keys(this.rows[0]);
   this.rowsCopy = [...this.rows];
   this.gridRows = [...this.rows];
   this.gridRows.map((row,index)=>{
     row['trackingIndex'] = index;
     row['checked'] = false;
   })


  }

  resolveKeys(row){
    return Object.keys(row);
  }

  sort(prop){    
    if(this.lastPropToSort != prop){
      this.rows = [...this.rowsCopy];
      this.rows.sort(function(a, b){
        let item1=a[prop], item2=b[prop]
        if (item1 < item2)
            {return -1 }
        if (item1 > item2)
            {return 1}
        
        return 0 
    })
    }else{
      this.rows.reverse();
    }
    this.lastPropToSort = prop;
    this.isAsc = !this.isAsc;
  }
  
  resolveName(prop){
    if(prop == 'checkboxColumn'){
      return ' ';
    }
    return prop.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
  }


  selectRow({checked},row,trackingIndex){
    if(checked){
      this.selectedRows = [row,...this.selectedRows];
    }else{
      this.selectedRows = this.selectedRows.filter(row=>row.trackingIndex != trackingIndex);
    }
    console.log(this.selectedRows);
    this.selectedData.emit(this.selectedRows);
  }


  
}

