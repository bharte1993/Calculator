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
 lastOperationCall=false;
   var display = document.getElementById("display");
   l=display.value.charAt(display.value.length-1);
   const set = new Set(["+", ".", "-", "*", "/"]);
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
                      console.log("dg");
                     lastOperationCall=true;
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

function keydown(e){
var key=(e.which) ? (e.which) : (e.keyCode) || (e.charCode);
console.log(String.fromCharCode(key));
if(key===37||key===39){
 return true;
}
if(key===13){
  calculate();
}
if(key>95&&key<106){
 return true;
}
if(String.fromCharCode(key)==='n'||String.fromCharCode(key)==='k'||String.fromCharCode(key)==='m'||String.fromCharCode(key)==='j'||String.fromCharCode(key)==='o'){
if(String.fromCharCode(key)==='n'){
   insertDecimal('.');
  }
if(String.fromCharCode(key)==='m'){
   setOperator('-');
  }
if(String.fromCharCode(key)==='o'){
   setOperator('/');
  }
if(String.fromCharCode(key)==='j'){
   setOperator('*');
  }
if(String.fromCharCode(key)==='k'){
   setOperator('+');
  }
}
if(key>31&&(key<48||key>57)){
   return false;
}

}
