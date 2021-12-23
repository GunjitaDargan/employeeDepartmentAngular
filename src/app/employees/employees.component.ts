// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-employees',
//   templateUrl: './employees.component.html',
//   styleUrls: ['./employees.component.css']
// })

// export class EmployeesComponent implements OnInit {
//   public tableList:any;
//   public currPage:number;
//   public lastPage:number;
//   public nameSorting:number;
//   public ageSorting:number;
//   public searchstr:any;




//   constructor() {
//     if(sessionStorage.getItem("page")==null){
//     this.currPage=1;
//     sessionStorage.setItem("page",JSON.stringify(this.currPage));
//   }

//   else{
//     this.currPage=0;
//   }
//   if(sessionStorage.getItem("nameSorting")==null){
//     this.nameSorting=0;
//     sessionStorage.setItem("nameSorting",JSON.stringify(this.nameSorting));
//   }
//   else{
//     var t=sessionStorage.getItem("nameSorting");
//     if(t!=null)
//     this.nameSorting=JSON.parse(t);
//     else
//     this.nameSorting=0;
//   }
//   if(sessionStorage.getItem("ageSorting")==null){
//     this.ageSorting=0;
//     sessionStorage.setItem("ageSorting",JSON.stringify(this.ageSorting));
//   }
//   else{
//     var t=sessionStorage.getItem("ageSorting");
//     if(t!=null)
//     this.ageSorting=JSON.parse(t);
//     else
//     this.ageSorting=0;
//   }
//   this.lastPage=1;
  
//   }
  

  

//   ngOnInit(): void {
    
//     var pg=sessionStorage.getItem("page")
//     if(pg!=null)
//     this.getRecord(JSON.parse(pg));
//     var temp:any;
//     temp=localStorage.getItem("recordList");
//     var records=JSON.parse(temp);
//     this.lastPage=Math.floor(+(records.length/5) + +1)
    

    
//   }
//   getRecord(PageNo :number):void{
//     this.currPage=PageNo;
//     var temp:any;
//     temp=localStorage.getItem("recordList");
//     var rec=JSON.parse(temp);

//     //sort
//     var records:Array<any>;
//     records=this.sortRecords(rec);

//     var res=[];
//     var counter=0;
//     var from=+((PageNo-1)*5);
    
//     for(var i=from;i<from+5;i++){
//       if(records[i]!=null)
//       res[counter++]=records[i];
//     }
//     this.tableList=res;

//   }
//   sortRecords(records:any):Array<any>{
//   //   temp.sort(function(a,b){
//   //     var one=a["age"];
//   //     var two=b["age"];
//   //     return (one-two);
//   // });
//     if(this.nameSorting==1){
//       records.sort(function(a:any,b:any){
//         var one=a["name"].toLowerCase();
//         var two=b["name"].toLowerCase();
//         if(one>two)return 1;
//         else return -1;
//       });
//       return records;

//     }
//     else if(this.nameSorting==-1){
//       records.sort(function(a:any,b:any){
//         var one=a["name"].toLowerCase();
//         var two=b["name"].toLowerCase();
//         if(one<two)return 1;
//         else return -1;
//       });
//       return records;
      
//     }
//     else if(this.ageSorting==1){
//       records.sort(function(a:any,b:any){
//         var one=a["age"];
//         var two=b["age"];
//         return (one-two);
//       });
//       return records;

//     }
//     else if(this.ageSorting==-1){
//       records.sort(function(a:any,b:any){
//         var one=a["age"];
//         var two=b["age"];
//         return (two - one);
//       });
//       return records;

//     }
//     else{
//       return records;

//     }

//   }
//   previous(){
//     var temp=sessionStorage.getItem("page");
//     if(temp!=null)
//     var pg=JSON.parse(temp);
//     var npg=pg-1;
//     sessionStorage.setItem("page",JSON.stringify(npg));
//     this.getRecord(npg);

//   }
//   next(){
//     var temp=sessionStorage.getItem("page");
//     if(temp!=null)
//     var pg=JSON.parse(temp);
//     var npg =+pg + +1;
//     sessionStorage.setItem("page",JSON.stringify(npg));
//     this.getRecord(npg);

//   }
//   first(){
//     sessionStorage.setItem("page",JSON.stringify(1));
//     this.getRecord(1)

//   }
//   last(){
//     var temp:any;
//     temp=localStorage.getItem("recordList");
//     var records=JSON.parse(temp);
//     sessionStorage.setItem("page",JSON.stringify(Math.floor(+(records.length/5) + +1)));
//     this.getRecord(Math.floor(+(records.length/5) + +1));

//   }
//   delete(ids:number){
//     if (confirm("Do you wish to delete this record?")) {
//       var temp:any;
//       temp=localStorage.getItem("recordList");
//       var records=JSON.parse(temp);
//       var idx=0;
//       for(var i=0;i<records.length;i++){
//         if(records[i].id==ids){
//           idx=i;
//           break;
//         }
//       }
//       records.splice(idx,1);
//       localStorage.setItem("recordList",JSON.stringify(records));
//       var pg=sessionStorage.getItem("page");
//       if(pg!=null)
//       this.getRecord(JSON.parse(pg));
//     } else {
//       //nothing
//     }
    
//   }
//   search(){
//       var txt=this.searchstr;
//     console.log(txt);
//     var temp:any;
//     temp=localStorage.getItem("recordList");
//     var rec=JSON.parse(temp);
//     var fin:Array<any>;
//     fin=[];
//     var c=0;
//     for(var i=0;i<rec.length;i++){
//       if(rec[i]["name"]==txt){
//         fin[c++]=rec[i];
//       }
//     }
//     this.tableList=fin;
    

//   }
//   clear()
// {
//   var t=(localStorage.getItem("recordList"));
//   if(t!=null)
//     this.tableList=JSON.parse(t);
//       var pg=sessionStorage.getItem("page");
//       if(pg!=null)
//       this.getRecord(JSON.parse(pg));
// }  
// nameSort(){
//   this.ageSorting=0;
//   if(this.nameSorting==1){
//     this.nameSorting=-1;
//   }
//   else
//   this.nameSorting=1;
//   sessionStorage.setItem("nameSorting",JSON.stringify(this.nameSorting));
//   sessionStorage.setItem("ageSorting",JSON.stringify(this.ageSorting));
//   var t=sessionStorage.getItem("page");
//   if(t!=null)
//   this.getRecord(JSON.parse(t));

// }
// ageSort(){
//   console.log("a")
//   this.nameSorting=0;
//   if(this.ageSorting==1)
//     this.ageSorting=-1;
//   else
//     this.ageSorting=1;
//   sessionStorage.setItem("ageSorting",JSON.stringify(this.ageSorting));
//   sessionStorage.setItem("nameSorting",JSON.stringify(this.nameSorting));
//   var t=sessionStorage.getItem("page");
//   if(t!=null)
//   this.getRecord(JSON.parse(t));


// }

// }

// new code 
//
//
//
//
//
//
//

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
