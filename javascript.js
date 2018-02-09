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
     
  
   

    display.value += dec;
    decimal=true;
     
}
function operator(op){
     var display = document.getElementById("d");
     if(op==='-'&&display.value.charAt(display.value.length-1) === "*"||display.value.charAt(display.value.length-1) === "/"){
        document.getElementById("d").value += op;
         return; 
     }
  if (display.value.charAt(display.value.length-1) === "+"||display.value.charAt(display.value.length-1) === "-"||display.value.charAt(display.value.length-1) === "*"||display.value.charAt(display.value.length-1) === "/"||display.value.charAt(display.value.length-1) === ".") {
           return;
      }
  
    document.getElementById("d").value += op;
    decimal=false;
     
     
}

function calculate() { 
	try{
  	 	document.getElementById("d").value=eval(document.getElementById("d").value );
 	}catch(err){
          document.getElementById("d").value="Syntex Error";
            
 }
}



document.onkeydown=function(e){
var key=e.charCode||e.keyCode;
if(key===13){
  
calculate();
}
if((key<37&&key>15)||(key<91&&key>64)||(key<193&&key>111)||key===220||key===222){
    
      e.preventDefault();
 }
}



