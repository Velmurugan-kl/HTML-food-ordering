var n;
var f=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var b=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var s=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var a=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var c=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var d=[0,0,0,0,0,0,0,0,0,0,0,0,0];
function add(qty,item,p){
    if(qty>0&&qty<11){
        put(qty,item,p);
    }
    else if(qty>10){
        window.alert("YOU ARE LIMITED TO ATMOST 10 QUANTITY !!!");
    }
    else if(qty<=0){
        window.alert("ENTER THE MINIMUM QUANTITY !!!")
    }
}
function put(qty,item,i){
    i[item-1]=qty;
    pass(i);
}
function pass(e){
    if(e==f){
        a=f;
    }
    else if(e==b){
        c=b;
    }
    else if(e==s){
        d=s;
    }
    for(j=0;j<13;j++){
        console.log(a[j],c[j],d[j]);
    }
}
function fun(){
    var na=document.form1.username.value;
    var pass=document.form1.number.value;
  
    if(na==null || na== " ")
      {
        window.alert("name can t be blank");
        return false;
      }
      else if(na.length<8)
      {
        window.alert("username must be at least 8 characters")
        return false;
      }
      else if(pass==null || pass== " ")
      {
        window.alert("enter your password");
        return false;
      }
  
    else if(pass.length<10)
     {
       window.alert("Number must be 10 .");
       return false;
     }
     return true;
  }
