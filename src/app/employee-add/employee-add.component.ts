import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { retry } from 'rxjs';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  id:any;
  name:string="";
  age:number=0;
  editButton:any;
  deleteButton:any;

  constructor(private router: Router){
    this.id=null;
  }

 

  ngOnInit(): void {
    
  }
  submit(){
    
    console.log(this.id);
    console.log(this.name);
    console.log(this.age);
    var obj={"id":this.id,"name":this.name,"age":this.age}
    if(this.isUnique(this.id)==0){
    var temp:any;
    temp=localStorage.getItem("recordList");
    var arr=[];
    arr=JSON.parse(temp);
    arr.push(obj);
    localStorage.setItem("recordList",JSON.stringify(arr));
    this.router.navigate(['/employees'])
    }
    else{
      window.alert("A record with this id already exists!");
      this.router.navigate(['/add-employees'])
    }

  }
  isUnique(ids:number):number{
    var flag=0;
    var temp:any;
      temp=localStorage.getItem("recordList");
      var records=JSON.parse(temp);
      for(var i=0;i<records.length;i++){
        if(records[i].id==ids){
          flag=1;
         break;
        }
      }
      return flag;
  }
  counter(i: number) {
    return new Array(i);
}
 
}
