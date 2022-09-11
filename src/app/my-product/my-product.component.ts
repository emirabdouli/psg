import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {
Uid : any
SuccessMessage :any
  constructor(private fs:AngularFirestore , private as :AuthService) { 
    this.as.user.subscribe(user=>{
      this.Uid=user.uid

    })
  }
  addproduct(f :any){
    let data =f.value
    this.fs.collection("products").doc(this.Uid).set({
      Title:data.Title,
      Description:data.Description,
      Image:data.Image,

    }).then(()=>this.SuccessMessage("added!")   )

  }

  ngOnInit(): void {
  }

}
