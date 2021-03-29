import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  originalViews =[
    {name:"Terminal instructables",type:"Technical"},
    {name:"Outlet branding",type:"Marketing"},
    {name:"Terminal support",type:"Technical"},
    {name:"Installation guides",type:"Technical"},
    {name:"Accounting procedures",type:"Financial"},
    {name:"Career opportunities",type:"Human Resources"},
    {name:"Training",type:"Human Resources"},
    {name:"Customer onboarding",type:"Financial"},
    {name:"Printing guidance",type:"Marketing"}
  ]
  originalDocTypes = [
    {label:"All"},
    {label:"Financial"}, 
    {label:"Technical"},
    {label:"Marketing"}, 
    {label:"Human Resources"}  
  ] 

  views = this.originalViews;
  doctypes = this.originalDocTypes;
  selectedDoc : string;
  selectedDocTyp : string;

  constructor() { }

  ngOnInit(): void {
   
  }
  
  onChangedocType($event : any){
    this.selectedDocTyp = $event;
    this.onSearchResults($event,this.selectedDoc);
    }

  namesearch($event: any){
    this.selectedDoc = $event;    
    this.onSearchResults(this.selectedDocTyp,$event);      
  }
onSearchResults(type:any,searchdata:any){  
    let docTypedata = this.typeFilter(type);
    this.views = this.searchFilter(docTypedata,searchdata); 
}
typeFilter($event:any):Array<any>{
  if($event ==="All"){
    return this.originalViews;
  }else {
    return this.originalViews.filter(val=>val.type === $event);
  }
}
searchFilter(typeresult:Array<any>,searchdata:string):Array<any>{
     if(searchdata){
      return typeresult.filter(val =>  val.name.toLowerCase().includes(searchdata.toLowerCase()));
     }
      return typeresult; 
  }
}
