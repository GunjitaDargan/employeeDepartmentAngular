import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})


/* The base component will act as a parent component for all the listing pages that we may create*/


export class BaseComponent implements OnInit {
  constructor(){
  }
  ngOnInit(): void {
  }
  /**
   * 
   * @param records Array of records of any type
   * @param deleteID Numeric ID of record to be deleted
   * @returns Array of updated records without the record to be deleted
   */

  public deleteRecord(records:Array<any>,deleteID:number):Array<BaseComponent>{
    var index:number=-1;
   for(var i=0;i<records.length;i++){
    if(records[i]["id"]==deleteID){
      index=i
      break;
    }
  }
   records.splice(index,1)
   return records
  }
  /**
   * 
   * @param records  Array of records of any type
   * @param string Record name to be searched in array
   * @returns Array of records that match the search
   */

  public searchRecord(records:Array<any>,string:String):Array<BaseComponent>{
    var temp:Array<any>=[];
    var c=0;
    for(var i=0;i<records.length;i++){
      if(records[i]["name"]==string){
        temp[c++]=records[i];
      }
    }
    return temp
  }
  /**
   * 
   * @param records Array of records of any type
   * @param pageNumber The current page number
   * @returns Trimmed data set specific for the current pafe
   */

  public displayRecord(records:Array<BaseComponent>,pageNumber:number):Array<BaseComponent>{
    var res=[];
    var counter=0;
    var from=+((pageNumber-1)*5);
    
    for(var i=from;i<from+5;i++){
      if(records[i]!=null)
      res[counter++]=records[i];
    }
    return res
  }
  /* Sorts any data set based on the name parameter of each object */
  /**
   * 
   * @param records Array of records of any type
   * @param direction Numeric value signifying +1 for ascending order and -1 otherwise
   * @returns Array sorted
   */
  public sortStringData(records:Array<any>,direction:number):Array<BaseComponent>{
    if(direction==1){
      records.sort(function(a:any,b:any){
        var one=a["name"].toLowerCase();
        var two=b["name"].toLowerCase();
        if(one>two)return 1;
        else return -1;
      });
    }
    if(direction==-1){
      records.sort(function(a:any,b:any){
        var one=a["name"].toLowerCase();
        var two=b["name"].toLowerCase();
        if(one<two)return 1;
        else return -1;
      });
    }
    return records
 

}
public sortNumericData(records:Array<any>,direction:number):Array<BaseComponent>{
  if(direction==1){
    records.sort(function(a:any,b:any){
      var one=a["age"]
      var two=b["age"]
      if(one>two)return 1;
      else return -1;
    });
  }
  if(direction==-1){
    records.sort(function(a:any,b:any){
      var one=a["age"]
      var two=b["age"]
      if(one<two)return 1;
      else return -1;
    });
  }
  return records


}
}





