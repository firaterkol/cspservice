import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Report } from '../report-model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css'],

})
export class ReportsListComponent{

  @Input() reportElements:any = [];
  @Output() rowWasSelected = new EventEmitter<Report>();
  readonly APIUrl = environment.API_BASE_URL;

  displayedColumns: string[] = ["_id", "domain", "date"];
  clickedRowData:any;
  element: any;
  constructor(private http:HttpClient){}

  clickedRow(row:any){
    
    this.http.get(this.APIUrl+'report/'+row._id).subscribe(data =>{
      this.element = data;
      this.rowWasSelected.emit(new Report(row._id, row.domain, row.date, this.element['csp-report']));
      console.log(row._id, row.domain, row.date, this.element['csp-report'])
    });
    
  }

}
