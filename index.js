let btn=document.querySelectorAll("button");
let inp=document.querySelector("input");
 
let string="";
 Array.from(btn).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            inp.value=string;
        }
       else if(e.target.innerHTML=="AC") {
          string="";
          inp.value=string;
             }
             else if(e.target.innerHTML=="DEL"){
               string= string.slice(0,-1);
                inp.value=string;
             }
        else {
        string+=e.target.innerHTML;
        inp.value=string;
        }
    })
 });