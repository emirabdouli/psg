import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageError:any

  constructor(private sa:AuthService ,private route:Router) { }
  login(f :any){
let data=f.value 
this.sa.SignIn(data.email,data.password).then(()=>{console.log("login") 
this.route.navigate(["/"])})
.catch(()=>{ 
  this.messageError="incorrect email and password"
})

}

  ngOnInit(): void {
  }

}
