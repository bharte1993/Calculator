 var decimal=false;
 var lastOperationCall=false;
 function clearDisplay()
{ 
   document.getElementById("display").value ="";
   decimal=false;
   lastOperationCall=false;
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
     if((op==='-'&&l === "*")||(op=='-'&&l === "/")){
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
     
}

function calculate() { 

	try{     
                 display=document.getElementById("display");
                 checkOperations=display.value.includes("+")||display.value.includes("-")||display.value.includes("*")||display.value.includes("/");
                   if(checkOperations&&lastOperationCall===false){ 
                   lastOperation=getlastOperation(display.value);
                 }
                
                  if(checkOperations&&lastOperationCall===false){
                     display.value=eval(display.value);
                   }
                  else{ 
                         lastOperationCall=true;
                         a=display.value+lastOperation;
                         display.value=eval(a);
                    } 
                 }catch(err){
         document.getElementById("display").value="Syntex Error";
 }
}

function keyPress(e){
var key=(e.which) ? (e.which) : (e.keyCode) || (e.charCode);
if(key===13){
  calculate();
}
if((key>64&&key<91)||key===186||key===188||key===190||key===191||key===192||key===220||key===222||key===219||key===221||key===187||key===189){ 
 
  return false;
 }
}



