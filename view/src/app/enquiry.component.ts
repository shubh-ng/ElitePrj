import { Component, OnInit } from '@angular/core';
import { MatInput,MatFormField, MatButton,MatCheckbox,MatOption,MatSelect,MatCard,MatDatepicker,MatRadioButton, MatSnackBar } from '@angular/material';
import { LoginService } from '../services/login.service';
import { SchoolDetailsComponent } from '../school-details/school-details.component';
import { EnquiryService } from '../services/enquiry.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { GetAllCoursesService } from '../services/getAllCourses.service';


@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})

export class EnquiryComponent implements OnInit {
  progressStart = false;
  form;
  role;


  ngOnInit() {
    this.getAllCourses();
    this.form = new FormGroup ({
      fname : new FormControl("", Validators.compose ([
        Validators.required
      ])),
      lname : new FormControl("", Validators.compose ([
        Validators.required
      ])),
      mobile_no : new FormControl("", Validators.compose ([
        Validators.required
      ])),
      gender : new FormControl("", Validators.compose ([
        Validators.required
      ])),
      house_no : new FormControl("", Validators.compose ([
        Validators.required
      ])),
      city : new FormControl("", Validators.compose ([
        Validators.required
      ])),
      district : new FormControl("", Validators.compose ([
        Validators.required
      ])),
      street : new FormControl("", Validators.compose ([
        Validators.required
      ])),
      email : new FormControl("", Validators.compose ([
        Validators.required
      ])),
      enquiry_date : new FormControl("", Validators.compose ([
        Validators.required
      ])),
      type : new FormControl("", Validators.compose ([
        Validators.required
      ]))
    });
  }

  isValid:boolean = false;
  studentType:string;
  school:string; college:string; job:string;

  // JSON request for enquiry form data
  enquiryDate:string;
  enquiryRequest:any = {
    type : null, org : null, dept : null,
    standard : null, c_id : null
  }

  //JSON response for enquiry data
  enquiryResponse:any;

  constructor(private enquiryService:EnquiryService,
              private router:Router, private getAllCoursesService:GetAllCoursesService) {
  }

  // logout() {
  //   this.loginService.removeAccessToken();
  //   localStorage.removeItem("token");
  //   alert("Logged out!");
  //   this.router.navigate(['']);
  // }

  value:any;
  jsonValue:any={name:[]};
  addEnquiryData(user) {
    user.type = this.role;
    user.org = this.enquiryRequest.org;
    user.dept = this.enquiryRequest.dept;
    user.pincode = this.enquiryRequest.pincode;
    user.standard = this.enquiryRequest.standard;
    console.log(this.value);
    // for(let i=0; i<this.value.length; i++) {
    //   this.jsonValue.name[i] = this.value[i];
    // }
    this.jsonValue = JSON.stringify(this.value);
    console.log(this.jsonValue);
    user.c_id = this.value;
    this.enquiryService.getAddEnquiryStatus(user).subscribe(
      resp=>{
        this.enquiryResponse = resp.json();
        console.log(this.enquiryResponse);
      }
    );
  }

  getCourses(item) {
    let checkBoxes = document.querySelectorAll('input[name="'+item+'"]:checked'),values = [];
    Array.prototype.forEach.call(checkBoxes, function(el){
      values.push(el.value);
    });

    for(let i=0; i<values.length; i++)
      console.log(values[i]);
    this.value = values;
  }


  setClgDetails(data:any) {
    this.enquiryRequest.org = data.clgName;
    this.enquiryRequest.dept = data.department;
    this.enquiryRequest.standard = data.year;  
    console.log(data);
  }

  setSchoolDetails(data:any) {
    this.enquiryRequest.org = data.schoolName;
    this.enquiryRequest.standard = data.schoolName;
    console.log(data);
  }

  setJobDetails(data:any) {
    this.enquiryRequest.org = data.jobCompany;
    this.enquiryRequest.department = data.jobDepartment;
    console.log(data);
  }

  assignType(){
    if(this.studentType==="school"){
      this.school = "true";
      this.college = null;this.job = null;
    }else if(this.studentType==="college"){
      this.college = "true"; 
    }else if(this.studentType==="job"){
      this.job = "true"; 
      this.college = null;this.school = null;
    }
  }


  genders=[
    "male","female"
  ]

  courses:any;

  getAllCourses() {
    this.progressStart = true;
    this.getAllCoursesService.getAllCourses().subscribe(
      resp=>{
        this.courses = resp.json().list;
        this.progressStart = false;
      }
    )
  }

  studentTypes=[
    "school",
    "college",
    "job"
  ]

}
