import { Component, Input } from '@angular/core';
import { Report } from '../report-model';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})

export class ReportDetailsComponent {

  @Input() reportDetails: Report;
  
  
}
