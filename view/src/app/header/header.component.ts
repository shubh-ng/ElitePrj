import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger(
      "navAnimation", [
        state("start", style({display:"none"})),
        state("end", style({display:"inline"})),
        transition("start => end", animate('0.5s ease-in')),
        transition("end => start", animate('0.5s ease-in')),
      ] 
    )
  ]
})
export class HeaderComponent implements OnInit {


  state:string = "start";

  toggleState() {
    this.state = this.state==="start"?"end":"start";
  }

  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.removeAccessToken();
    localStorage.removeItem("token");
    alert("Logged out!");
    this.router.navigate(['']);
  }

}
