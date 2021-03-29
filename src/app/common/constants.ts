export const docuementViews =[
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
export const  docuementTypes = [
    {label:"All"},
    {label:"Financial"}, 
    {label:"Technical"},
    {label:"Marketing"}, 
    {label:"Human Resources"}  
  ] 

export function  typeFilter($event:any):Array<any>{
    if($event ==="All"){
      return docuementViews;
    }else {
      return docuementViews.filter(val=>val.type === $event);
    }
  }
  export function  searchFilter(typeresult:Array<any>,searchdata:string):Array<any>{
       if(searchdata){
        return typeresult.filter(val =>  val.name.toLowerCase().includes(searchdata.toLowerCase()));
       }
        return typeresult; 
    }