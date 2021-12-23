import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id:any;
  name:string="";
  age:number=0;
  editButton:any;
  deleteButton:any;


  constructor( private route :ActivatedRoute,private router: Router) { 
    this.id=null;
  }

  ngOnInit(): void {
    let ids=this.route.snapshot.paramMap.get("id");
    if(ids!=null)
    this.id=parseInt(ids);
    var temp:any;
    temp=localStorage.getItem("recordList");
    var arr=[];
    arr=JSON.parse(temp);
    for(var i=0;i<arr.length;i++){
      if(arr[i].id==this.id){
        this.name=arr[i].name;
        this.age=arr[i].age;
        break;
      }
    }
  }
  submit(){
    console.log(this.id);
    console.log(this.name);
    console.log(this.age);
    // var obj={"id":this.id,"name":this.name,"age":this.age}
    var temp:any;
    temp=localStorage.getItem("recordList");
    var arr=[];
    arr=JSON.parse(temp);
    for(var i=0;i<arr.length;i++){
      if(arr[i].id==this.id){
        arr[i].name=this.name;
        arr[i].age=this.age;
      }
    }
  
    localStorage.setItem("recordList",JSON.stringify(arr));
    this.router.navigate(['/employees'])

  }
  counter(i: number) {
    return new Array(i);
}
 
  

}
