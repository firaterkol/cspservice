import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Report } from '../report-model';
import { CspEvaluator } from 'csp_evaluator/dist/evaluator.js';
import { CspParser } from 'csp_evaluator/dist/parser.js';
import { Version } from 'csp_evaluator/dist/csp';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css'],

})
export class ReportsListComponent {
  @Input() reportElements:any = [];
  @Output() rowWasSelected = new EventEmitter<Report>();

  displayedColumns: string[] = ["_id", "message", "url"];
  clickedRowData:any;
  evaluation: any;
  clickedRow(row:any){
    try {
      const parsed = new CspParser('script-src \'nonce-{random}\' \'unsafe-inline\' \'unsafe-eval\' \'strict-dynamic\' https: http:;' +
      'object-src \'none\';'+
      'base-uri \'self\';').csp;
      console.log("----------------");
      console.log("---parser---");
      console.log(new CspParser('script-src \'nonce-{random}\' \'unsafe-inline\' \'unsafe-eval\' \'strict-dynamic\' https: http:;' +
      'object-src \'none\';'+
      'base-uri \'self\';'));
      console.log("---parser---");
      console.log("----------------");
      console.log("---parsed---");
      console.log(parsed);
      console.log("---parsed---");
      console.log("----------------");
      this.evaluation = new CspEvaluator(parsed).evaluate();
      console.log("---evaluation---");
      console.log(this.evaluation);
      console.log("---evaluation---");
      console.log("----------------");
    } catch (error) {
      console.log(error);
    }

    this.rowWasSelected.emit(new Report(row._id, row.message, row.url, this.evaluation));
    console.log(new Report(row._id, row.message, row.url, this.evaluation));
  }

}
