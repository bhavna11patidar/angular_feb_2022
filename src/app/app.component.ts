import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world';
  /*myname="Bhavna patidar";
  getValue(){
    return "Get value function";
  }
  title1="hello";
  fruits=["Apple","Mango","Banana"];
  fruits1=[...this.fruits, "Papaya", "Kiwi"];
  g_color="green";
  num=10;
  getData(){
    return ("Data")
  }
  btnClick(){
    alert("btnClick function called")
  }
  btnClickWithPara(x:number|string){
    alert(x)
    //alert("btnClickWithPara called");
  }
  btnClickWithMultiPara(x:number, y:number, z:number, a:number){
      alert(x+y+z+a)
  }
  resOperator(...s:any) {
    console.log(s);
  }
  mouseEnterFun(){
    console.log("mouseEnterFun called")
  }
  mouseLeaveFun(){
    console.log("mouseLeaveFun ")
  }
  btnClickWithPara1(x:any){
    alert(x)
    //alert("btnClickWithPara called");
  }

  onKeyUpFun(name:string){
   // console.log("onKeyUpFun")
   console.log(name);
  }

  onDownUpFun(data:string){
    console.log(data)
  }
  thisFun(a:any){
    console.log(a)
  }
  count:number=0;
  clickCount(){
    console.log(++this.count)
  }
  newCount=0;
  counter(x:number){
    x==1 ? this.newCount++ : this.newCount--; 
    if(this.newCount<=0){
      this.newCount=0;
    }
  }

  myTitle="My Title";
  myName="Bhavna";
  a=false;
  show=false;
  color="white";

  //users=["Bhavna", "Ninad", "Swapnil","Mehul"];
  users=[
    {
      name:"Bhavna", email:"bhavna@gmail.com",socialAcc:["Twitter", "facebook"]
    },
    {
      name:"Swapni", email:"swapnil@gmail.com",socialAcc:["Insta","Twitter", "facebook"]
    },
    {
      name:"Ninad", email:"ninad@gmail.com",socialAcc:["facebook", "Insta"]
    },
    {
      name:"Mehul", email:"mehul@gmail.com",socialAcc:["facebook"]
    }
  ];

  mainColor='blue';
  bgColor="red";
  changeColor(){
    if(this.mainColor=="green"){
      this.mainColor="blue";
      this.bgColor="red";
    }else{
    this.mainColor="green";
    this.bgColor="skyblue";
    }
  }

  display=true;
  toggleElement(){
    this.display=!this.display;
  }
  */
 //data:number=10;
 /*data:number=Math.floor(Math.random()*10);
 users=[
  {
    name:"Bhavna", email:"bhavna@gmail.com"
  },
  {
    name:"Swapni", email:"swapnil@gmail.com"
  },
  {
    name:"Ninad", email:"ninad@gmail.com"
  },
  {
    name:"Mehul", email:"mehul@gmail.com"
  }
];
*/
childData:string="";
  updataDataViaChild(item:string){
    this.childData=item;
    //console.log(item);
  }
  name:string="";
 /* getVal(data:string){
    console.log(data);
  }
  */
  getVal(data:HTMLInputElement){
    console.log(data);
  }
  myname:string="Bhavna";
  convertCaps(){
    return this.myname.toUpperCase();
  }
  today=new Date();
  greet="This is my Angular session";

  sum(...num:number[]){
   // console.log(num);
   var d=0;
      for(var x=0; x<num.length; x++){
          d+=num[x];
          //console.log(this.d);
      }

      return d;
  }
}


