import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Output() event = new EventEmitter();


  constructor() { }

  ngOnInit() { 
  }

  jobCompany:string;
  jobDepartment:string;

  sendToParent() {
    this.event.emit({jobCompany:this.jobCompany,jobDepartment:this.jobDepartment});
  }


  public courses=[
      {'name':'--Select Courses--' },
      {'name':'C++' },
      {'name':'JAVA' },
      {'name':'PHP' },
      {'name':'ANGULAR' },
      {'name':'TALLY' },
      {'name':'DCA' },
  ];

}
