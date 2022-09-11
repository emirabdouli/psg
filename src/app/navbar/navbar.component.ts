import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private af:AngularFireAuth , private route:Router ) { }
  ngOnInit(): void {}
    logout(){
      this.af.signOut().then(()=>{console.log("logout")
    this.route.navigate(['/login'])})
      .catch(()=>{console.log("error")})
    }
  }


 


