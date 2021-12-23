import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  id:any;
  name:string="";

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
    temp=localStorage.getItem("DeptrecordList");
    var arr=[];
    arr=JSON.parse(temp);
    for(var i=0;i<arr.length;i++){
      if(arr[i].id==this.id){
        this.name=arr[i].name;
       
        break;
      }
    }
  }
  submit(){
   
    var temp:any;
    temp=localStorage.getItem("DeptrecordList");
    var arr=[];
    arr=JSON.parse(temp);
    for(var i=0;i<arr.length;i++){
      if(arr[i].id==this.id){
        arr[i].name=this.name;
        
      }
    }
  
    localStorage.setItem("DeptrecordList",JSON.stringify(arr));
    this.router.navigate(['/department'])

  }
  counter(i: number) {
    return new Array(i);
}
 
  

}

