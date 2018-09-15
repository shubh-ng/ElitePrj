import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  @Output() event = new EventEmitter();
  
  constructor() { }

  clgName:string;
  department:string;
  semester:string;


  ngOnInit() {
  }

  sendToParent() {
    this.event.emit({clgName: this.clgName, department: this.department, semester: this.semester});
  }

  // sendDepartment() {
  //   this.event1.emit(this.department);
  // }

  // sendYear() {
  //   this.event2.emit(this.year);
  // }

}
