import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent extends BaseComponent implements OnInit {
  public tableList:any;
  public lastPage;
  public nameSorting:number;
  public searchstr:any;
  public currPage:any;

  constructor() {
    super();
    this.currPage=0;
    this.lastPage=1;
    this.nameSorting=1;
  
  }
  override ngOnInit(): void {
    var temp:any=localStorage.getItem("DeptrecordList")
    var records=JSON.parse(temp);
    this.lastPage=Math.floor(+(records.length/5) + +1)
    if(sessionStorage.getItem("Deptpage")==null){
    sessionStorage.setItem("Deptpage",JSON.stringify(1));
    sessionStorage.setItem("DeptnameSorting",JSON.stringify(0))}
    var t=sessionStorage.getItem("Deptpage")
    if(t!=null)
    this.currPage=JSON.parse(t);
    this.getRecord()
    
  }
  getRecord():void{
    var temp:any;
    temp=localStorage.getItem("DeptrecordList");
    var rec=JSON.parse(temp);

    //sort
    var records:Array<any>;
    this.currPage=sessionStorage.getItem("Deptpage")
    records=this.sortStringData(rec,this.nameSorting);
   this.tableList=this.displayRecord(records,this.currPage)
   this.lastPage=Math.floor(+(records.length/5) + +1);

  }
  
  previous(){
    sessionStorage.setItem("Deptpage",JSON.stringify(+this.currPage - +1));
    this.getRecord();

  }
  next(){
    sessionStorage.setItem("Deptpage",JSON.stringify(+this.currPage + +1));
    this.getRecord();

  }
  first(){
    sessionStorage.setItem("Deptpage",JSON.stringify(1));
    this.getRecord()

  }
  last(){
    sessionStorage.setItem("Deptpage",JSON.stringify(this.lastPage))
    this.getRecord()

  }
  delete(objectID:number){
    
    if (confirm("Do you wish to delete this record?")) {
      var temp=localStorage.getItem("DeptrecordList");
      if(temp!=null)
      var records=JSON.parse(temp);
      localStorage.setItem("DeptrecordList",JSON.stringify(this.deleteRecord(records,objectID)))
      this.getRecord();
    } else {
      //nothing
    }
  }
  search(){
     this.tableList=this.searchRecord(this.tableList,this.searchstr);
  }
  clear(){
    this.getRecord()
  }  
 nameSort(){
  this.nameSorting=+this.nameSorting * -1
  sessionStorage.setItem("DeptnameSorting",JSON.stringify(this.nameSorting));
  this.getRecord()
}
 
}
