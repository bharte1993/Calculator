 var displayNum = "";
 var storedNum = "";
 var operation = 0;
 var queuedOperation = 0;
 var calculationFinished = false;
 var xyz="";

function clearDisplay() {
    
    var display = document.getElementById("display");
    displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;        
    display.value = displayNum;

}

function numInput(num) {
      xyz+=num;
    var display = document.getElementById("display");
    if (calculationFinished == true) {
        display.value = num;
        calculationFinished = false;
    }
    
    else {
      display.value += num;
    }
}

function insertDecimal(dec) {
    var display = document.getElementById("display");
    for (i = 0; i < display.value.length; i++)
        if (display.value.charAt(i) == '.') {
            
           return;
        }
     display.value += dec;
}

function setOperation(command) {
 
   var display = document.getElementById("display");  
    if (command == 'add') {
        operation = 1;
       display.value+="+";
    }
    else if (command == 'subtract') {
        operation = 2;
        display.value+="-";
    }
    if (command == 'multiply') {
        operation = 3;
         display.value+="*";
    }

   
   
            displayNum = xyz;
  
            evalDisplay = eval(displayNum),
            evalStored = eval(storedNum);
   

        
    if (queuedOperation == 0) {
        storedNum = xyz
    }
    else if (queuedOperation == 1) {
        storedNum = evalStored + evalDisplay;
    }
    else if (queuedOperation == 2) {
        storedNum = evalStored - evalDisplay;
    }
    else if (queuedOperation == 3) {
        storedNum = evalStored * evalDisplay;
    }

  
   
  
    queuedOperation = operation;
   // display.value = '';
        xyz="";
}

function calculate() {
 
   // var display = document.getElementById("display");
            displayNum = xyz;
    var evalDisplay = eval(displayNum),
            evalStored = eval(storedNum);

    
    if (operation == 1) {
        displayNum = evalStored + evalDisplay;
    }
    else if (operation == 2) {
        displayNum = evalStored - evalDisplay;
    }
    else if (operation == 3) {
        displayNum = evalStored * evalDisplay;
    }

    display.value = displayNum;
    if (operation != 0){
        calculationFinished = true;
}
   
    operation = 0;
    queuedOperation = 0;
    displayNum = "";
    storedNum = "";
    xyz="";
}
