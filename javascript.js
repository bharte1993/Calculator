 var decimal=false;
 function clearDisplay()
{ 
   document.getElementById("display").value ="";
   decimal=false;
   firstCalculation=false;
}
function numInput(val)
{
document.getElementById("display").value += val;
}
function insertDecimal(dec) {
   if (decimal===true) {
           return;
        }
      document.getElementById("display").value += dec;
      decimal=true;
     }
function setOperator(op){
   var display = document.getElementById("display");
   l=display.value.charAt(display.value.length-1);
   const set = new Set(["+", ".", "-", "*", "/"]);
     if(op==='-'&&l === "*"||l === "/"){
        display.value += op;
         return; 
     }
      if(set.has(l)){
          return;
     }
  display.value += op;
      decimal=false;
      
     
    }
function getlastOperation(displayValue){
  var lastoperation=displayValue.charAt(displayValue.length-1);
  for (i=displayValue.length-2;i>0; --i){
      lastoperation=displayValue.charAt(i)+lastoperation;
      if(displayValue.charAt(i) === "+"||displayValue.charAt(i) === "-"||displayValue.charAt(i) === "*"||displayValue.charAt(i) === "/"){
            return lastoperation;
       }
}
     return lastoperation;
}

function calculate() { 

	try{     
                 display=document.getElementById("display");
                ckeckOperations=display.value.includes("+")||display.value.includes("-")||display.value.includes("*")||display.value.includes("/");
                   if(ckeckOperations){ 
                   lastOperation=getlastOperation(display.value);
                 }
                
                  if(ckeckOperations){
                     display.value=eval(display.value);
                   }
                  else{ 
                         a=display.value+lastOperation;
                         display.value=eval(a);
                    } 
                 }catch(err){
         document.getElementById("display").value="Syntex Error";
 }
}

document.onkeydown=function(e){
var key=e.charCode||e.keyCode;
if(key===13){
  calculate();
}
}



