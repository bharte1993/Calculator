 
 var display = document.getElementById("display").value;


function clearDisplay(val)
{ 
 display=val;
}
function numInput(val)
{
     display+=val;
}
function insertDecimal(dec) {
    for (i = 0; i< display.length; i++){
        if (display.charAt(i) === '.') {
            return;
        }
   }
    display+=dec;
}
function operator(op){
   if (display.charAt(display.length) === op) {
            return;
      }
  
    display+=op;
}



function calculate() 
{ 
  display=eval("display");
}  
