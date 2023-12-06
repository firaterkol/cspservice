import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from './report-model';
import {environment} from "../environments/environment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cspui';
  readonly APIUrl = environment.API_BASE_URL;
  selectedReport: Report;

  reports:any = [];

  constructor(private http:HttpClient){}


  ngOnInit(): void {
    this.http.get(this.APIUrl+'report/').subscribe(data =>{
      this.reports=data;
      console.log(this.reports);
    });
  }

}
