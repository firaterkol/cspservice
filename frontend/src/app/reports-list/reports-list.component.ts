import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Report } from '../report-model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']

})
export class ReportsListComponent implements AfterViewInit, OnChanges {

  @Input() reportElements:any = [];
  @Output() rowWasSelected = new EventEmitter<Report>();
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort: MatSort;
  readonly APIUrl = environment.API_BASE_URL;

  dataSourceElements= new MatTableDataSource<any>();

  displayedColumns: string[] = ["_id", "domain", "date"];
  clickedRowData:any;
  element: any;
  constructor(private http:HttpClient){}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reportElements'] && changes['reportElements'].currentValue) {
      this.dataSourceElements.data = changes['reportElements'].currentValue;
      this.dataSourceElements.paginator = this.paginator;
    }
  }
  
  ngAfterViewInit(): void {
    this.dataSourceElements.paginator = this.paginator;
    this.dataSourceElements.sort = this.sort;
  }

  clickedRow(row:any){
    
    this.http.get(this.APIUrl+'report/'+row._id).subscribe(data =>{
      this.element = data;
      this.rowWasSelected.emit(new Report(row._id, row.domain, row.date, this.element['csp-report']));
      console.log(row._id, row.domain, row.date, this.element['csp-report'])
    });
  }

  

}
