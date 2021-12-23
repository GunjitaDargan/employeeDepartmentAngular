import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent extends BaseComponent implements OnInit {
  public tableList:any;              //list of records to be displayed 
  public lastPage;                   //total number of pages
  public nameSorting:number;         //signifies the order in which names are sorted
  public ageSorting:number;          //signifies the order in which employee age is sorted
  public searchstr:any;              //string to be searched
  public currPage:any;               //the current page

  constructor() {
    super();
    this.currPage=0;
    this.lastPage=1;
    this.ageSorting=1;
    this.nameSorting=1;
  
  }
  override ngOnInit(): void {
    var temp:any=localStorage.getItem("recordList")
    var records=JSON.parse(temp);
    this.lastPage=Math.floor(+(records.length/5) + +1)
    if(sessionStorage.getItem("page")==null){
    sessionStorage.setItem("page",JSON.stringify(1));
    sessionStorage.setItem("nameSorting",JSON.stringify(0))
    sessionStorage.setItem("ageSorting",JSON.stringify(0))}
    var t=sessionStorage.getItem("page")
    if(t!=null)
    this.currPage=JSON.parse(t);
    this.getRecord()
    
  }
  /* Polpulate the record table with respect to pagination*/
  getRecord():void{
    var temp:any;
    temp=localStorage.getItem("recordList");
    var rec=JSON.parse(temp);

    //sort
    var records:Array<any>;
    this.currPage=sessionStorage.getItem("page")
    if(this.nameSorting!=0)
    records=this.sortStringData(rec,this.nameSorting);
    else
    records=this.sortNumericData(rec,this.ageSorting)
   this.tableList=this.displayRecord(records,this.currPage)
   this.lastPage=Math.floor(+(records.length/5) + +1);

  }
  /*Pagination functions*/
  previous(){
    sessionStorage.setItem("page",JSON.stringify(+this.currPage - +1));
    this.getRecord();

  }
  next(){
    sessionStorage.setItem("page",JSON.stringify(+this.currPage + +1));
    this.getRecord();

  }
  first(){
    sessionStorage.setItem("page",JSON.stringify(1));
    this.getRecord()

  }
  last(){
    sessionStorage.setItem("page",JSON.stringify(this.lastPage))
    this.getRecord()

  }
  /*To delete a record from the table*/
  delete(objectID:number){
    
      if (confirm("Do you wish to delete this record?")) {
        var temp=localStorage.getItem("recordList");
        if(temp!=null)
        var records=JSON.parse(temp);
        localStorage.setItem("recordList",JSON.stringify(this.deleteRecord(records,objectID)))
        this.getRecord();
      } else {
        //nothing
      }
    }
  search(){
     this.tableList=this.searchRecord(this.tableList,this.searchstr);
  }
  /*To clear the search results*/
  clear(){
    this.getRecord()
  }  
  /*Sort with respect to employee name*/
 nameSort(){
  this.nameSorting=+this.nameSorting * -1
  this.ageSorting=+this.ageSorting * +0
  sessionStorage.setItem("nameSorting",JSON.stringify(this.nameSorting));
  sessionStorage.setItem("ageSorting",JSON.stringify(this.ageSorting));
  this.getRecord()
}
/*Sort with respect to employee name*/
 ageSort(){
  this.nameSorting=+this.nameSorting * +0
  this.ageSorting=+this.ageSorting * -1
  sessionStorage.setItem("ageSorting",JSON.stringify(+this.ageSorting));
  sessionStorage.setItem("nameSorting",JSON.stringify(+this.nameSorting));
  this.getRecord()
}
}
