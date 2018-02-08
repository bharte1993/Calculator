 var decimal=false;
 function clearDisplay()
{ 
 document.getElementById("d").value ="";
   decimal=false;
}
function numInput(val)
{

document.getElementById("d").value += val;

}
function insertDecimal(dec) {
  var display = document.getElementById("d");
     
       if (decimal===true) {
           return;
        }
     
        if(decimal===true){
    if (display.value.charAt(display.value.length-1) === "+"||display.value.charAt(display.value.length-1) === "-"||display.value.charAt(display.value.length-1) === "*"||display.value.charAt(display.value.length-1) === "/") {
           return;
      }
}

    display.value += dec;
    decimal=true;
     
}
function operator(op){
     var display = document.getElementById("d");
  if (display.value.charAt(display.value.length-1) === "+"||display.value.charAt(display.value.length-1) === "-"||display.value.charAt(display.value.length-1) === "*"||display.value.charAt(display.value.length-1) === "/"||display.value.charAt(display.value.length-1) === ".") {
           return;
      }
  
    document.getElementById("d").value += op;
    decimal=false;
     
     
}

function calculate() 
{ 
  document.getElementById("d").value=eval(document.getElementById("d").value );
}  
