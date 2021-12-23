import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  id:any;
  name:string="";
  editButton:any;
  deleteButton:any;

  constructor(private router: Router){
    this.id=null;
  }

 

  ngOnInit(): void {
    
  }
  submit(){
    var obj={"id":this.id,"name":this.name}
    if(this.isUnique(this.id)==0){
    var temp:any;
    temp=localStorage.getItem("DeptrecordList");
    var arr=[];
    arr=JSON.parse(temp);
    arr.push(obj);
    localStorage.setItem("DeptrecordList",JSON.stringify(arr));
    this.router.navigate(['/department'])
    }
    else{
      window.alert("A record with this id already exists!");
      this.router.navigate(['/add-department'])
    }

  }
  isUnique(ids:number):number{
    var flag=0;
    var temp:any;
      temp=localStorage.getItem("DeptrecordList");
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
