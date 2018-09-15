import { Component, OnInit, Injector } from '@angular/core';
// import {FormControl,Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isValid:boolean = false;

  progressStart:boolean = false;
  loginStatus:string="Login";
  isReallyLogin:string;
  loginResponse:any;
  loginRequest = {
    mob : null, password :null, role :null
  }

  ngOnInit() {
  }  

  private router:Router;
  constructor(private loginService:LoginService, private injector:Injector){
  }


  //radio button array for roles
  roles = ["admin","student","faculty"];

  passwordIcon = "fa fa-eye";
  passwordType = "password";
  
  fieldErrors = {
    userError:"",passError:"",roleError:""
  }

  color = {
    color:"red"
  }
 
  login() {
    
      if(this.validate()) {
        this.loginStatus = "Logging in...."
        this.progressStart = true;
        this.loginService.loadLoginStatus(this.loginRequest).subscribe(
          
          resp=>{
            this.loginResponse = resp.json();
            this.isReallyLogin = resp.json().status;
            
            if(this.isReallyLogin != '0') {
              this.loginStatus = "Logged in....";
              this.loginService.setAccessToken(resp.json().token);
              this.router.navigate(['header']);
            }
            else {
              this.loginStatus = "Incorrect username/password, Please try again!"
              this.progressStart = false;
            }
          }
        )
      }
  }

  
  validate() {
    if(this.loginRequest.mob==null) {
      this.fieldErrors.userError = "Mobile required";
      this.isValid = false;
    }else{
      this.fieldErrors.userError = "";
      this.isValid = true;
    }
    if(this.loginRequest.password==null) {
      this.fieldErrors.passError = "Password required";
      this.isValid = false;
    }else{
      this.fieldErrors.passError = "";
      this.isValid = true;
    }
    if(this.loginRequest.role==null) {
      this.fieldErrors.roleError = "Role required";
      this.isValid = false;    
    }else{
      this.fieldErrors.roleError = "";
      this.isValid = true;    
    }
    
    if(
      this.loginRequest.mob!=null && this.loginRequest.role!=null 
      && this.loginRequest.password!=null
    )
      this.isValid = true;
    else
      this.isValid = false;

    return this.isValid;
  }

  //toggle password icon function
  togglePasswordIcon(){
    this.passwordIcon = this.passwordIcon==="fa fa-eye"?"fa fa-eye-slash":"fa fa-eye";
    this.passwordType = this.passwordType==="password"?"text":"password";
  }
       
}