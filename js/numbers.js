function checkPrime() {
    num= getUserInput();
    flag = true;
  if (num < 2)
    flag = false;
  for (i = 2; i <= Math.sqrt(num); i++){
    if (num % i == 0) {
      flag = false;
      break;
    } }
    if (flag)
        showResult("The Number " +num+ " is prime");
    else
         showResult("The Number " +num+ " is not prime");
}

function factorial() {
    num = getUserInput();
    var res= 1;
    for ( i = 2; i<= num;i++) {
        res *= i;
    }
     showResult("Factorial of "+num+" is "+res);
}

function factor() {
    num= getUserInput();
    var res = " ";
    for (i = 1;i <= num; i++) {
        if (num % i == 0) {
            res +=i+" ";
        }
    }
    showResult("Factors of "+num+" are "+res);
    
}
    
function fibonacci(){
    num= getUserInput();
    var res =" ";
    if(num == 1)
        res = 0;
    else if (num ==2)
        res = "0 1"
    else{
        var a = 0 , b = 1;
        res = "0 1";
    }
    for(i = 3;i <= num;i++) {
        var c = a + b;
        res += " "+c;
        a = b;
        b = c;
    }
   
    showResult("Result"+res);
    
}

function getUserInput() {
    num = document.getElementById("num").value;
    return num;
}
function showResult(message) {
   document.getElementById("result").innerHTML="<h4>"+message+"</h4>";
}