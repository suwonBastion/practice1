var a1 = new item("사빠딸1",3000,1); 
var a2 = new item("사빠딸2",3000,1); 
var a3 = new item("사빠딸3",3000,1); 
var a4 = new item("사빠딸4",3000,1); 
var a5 = new item("사빠딸5",3000,1); 
var a6 = new item("사빠딸6",3000,1); 
var a7 = new item("사빠딸7",3000,1); 
var a8 = new item("사빠딸8",3000,1); 
var a9 = new item("사빠딸9",3000,1); 
var a10 = new item("사빠딸10",3000,1); 
var a11 = new item("사빠딸11",3000,1); 
var a12 = new item("사빠딸12",3000,1); 
var a13 = new item("사빠딸13",3000,1); 
var a14 = new item("사빠딸14",3000,1); 
var a15 = new item("사빠딸15",3000,1); 
var a16 = new item("사빠딸16",3000,1); 
var a17 = new item("사빠딸17",3000,1); 
var a18 = new item("사빠딸18",3000,1); 
var t = [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18];

function item(a,b,c){
  this.name = a;
  this.val = b;
  this.qua = c;    
}
var end=0;
var e=document.querySelector('#total');
var pb = document.querySelectorAll(".pur");
var ptag = document.querySelectorAll('#inside p');
var dele = document.querySelectorAll(".del");


for(let i =0;i<pb.length;i++){  
  pb[i].addEventListener('click',function(){    
    if(ptag[i].innerHTML==""){       
    ptag[i].innerHTML = t[i].name+" "+t[i].val+" "+t[i].qua;
    print(i);
    }else{
      add(i);
    }  
  })
}
for(let i=0;dele.length;i++){
  dele[i].addEventListener('click',function(){
    if(t[i].qua>1){
     minus(i);
    }else{
      ptag[i].innerHTML="";
      t[i].qua=1;
      printm(i);
    }
  })
}

  function printm(a){
    if(end!=0){
    end=end-t[a].val;
    e.innerHTML=end;
    }
  }
  function print(a){    
    end+=t[a].val;
    e.innerHTML=end;    
  }
  function minus(a){
    t[a].qua-=1;
    ptag[a].innerHTML = t[a].name+" "+t[a].val+" "+t[a].qua;
    printm(0);
  }
  function add(a){
    t[a].qua+=1;
    ptag[a].innerHTML = t[a].name+" "+t[a].val+" "+t[a].qua;
    print(a);
  }
  function reset(){
    for(let i=0;i<ptag.length;i++){
      ptag[i].innerHTML="";
      t[i].qua=1;
      end=0;
      e.innerHTML="";
    }
  }