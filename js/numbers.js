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

function reverse(){
    num = getUserInput();
    var rev = 0;
    while (num != 0){
        rev =  (rev * 10) + (parseInt(num % 10));
        num = parseInt(num / 10);
    }
    showResult("Result: "+rev);
    
}

function palindrome(){
    num = getUserInput();
    temp = num;
   var rev = 0;
    while (num != 0){
        rev =  (rev * 10) + (num % 10);
        num = parseInt(num / 10);
    }
    if (temp == rev){
    showResult(temp+ " is Palindrome ");
    }
    else{
        showResult(temp+ " is not palindrome");
    }
    
}

function sumOfDig(){
    num = getUserInput();
    sum = 0;
    while (num != 0){
        sum = sum + num % 10;
        num = parseInt(num / 10);
    }
    showResult(sum);
}

function sumGetsSingleDigit(){
    num = getUserInput();
    sum = 0;
    while (num > 9){
        var r = num % 10;
        sum = r + parseInt(num/10);
        num = sum;
    }
    showResult(sum);
}
function getUserInput() {
    num = document.getElementById("num").value;
    return num;
}
function showResult(message) {
   document.getElementById("result").innerHTML="<h4>"+message+"</h4>";
}