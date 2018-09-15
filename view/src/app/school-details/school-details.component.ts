import { EventEmitter,Component, OnInit, Injectable, Output } from '@angular/core';
declare var $:any;

@Injectable()
@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent implements OnInit {
  @Output() event = new EventEmitter();

  schoolName:string;
  sclClass:string;

  sendToParent() {
    this.event.emit({schoolName:this.schoolName, sclClass:this.sclClass});
  }

  studentClass = [
    "8th","9th","10th",
    "11th (Maths)","11th (Bio)","11th (Commerce)",
    "12th (Maths)","12th (Bio)","12th (Commerce)"
  ]

  constructor() {
  }

  ngOnInit() {

  }
}

