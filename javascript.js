 var displayNum = "";
 var storedNum = "";
 var operation = 0;
 var queuedOperation = 0;
 var calculationFinished = false;
 var numericDigits="";

function clearDisplay() {
    
    var display = document.getElementById("display");
    displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;
    numericDigits="";        
    display.value = displayNum;
    calculationFinished = false;

}

function numInput(num) {
      numericDigits+=num;
      var display = document.getElementById("display");
      display.value +=num;
  }

function insertDecimal(dec) {
    var display = document.getElementById("display");
    for (i = 0; i< display.value.length; i++)
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

   
   
          

        
    if (queuedOperation == 0&&calculationFinished==false) {
              storedNum = numericDigits;
    }
    else if (queuedOperation == 1&&calculationFinished==false) {
             displayNum =numericDigits ;
             evalDisplay = eval(displayNum),
             evalStored = eval(storedNum);
             storedNum = evalStored + evalDisplay;
    }
     
    else if (queuedOperation == 2&&calculationFinished==false) {
            displayNum =numericDigits ;
            evalDisplay = eval(displayNum),
            evalStored = eval(storedNum);
            storedNum = evalStored - evalDisplay;
    }
    else if (queuedOperation == 3&&calculationFinished==false) {
            displayNum =numericDigits;
            evalDisplay = eval(displayNum),
            evalStored = eval(storedNum);
            storedNum = evalStored * evalDisplay;
    }

            queuedOperation = operation;
            numericDigits="";
}



function calculate() {
 
   // var display = document.getElementById("display");
            displayNum = numericDigits;
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
    calculationFinished = true;
    storedNum=displayNum;
    numericDigits="";
}
