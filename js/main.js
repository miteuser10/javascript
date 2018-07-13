function checkNumber() {
    var num = document.getElementById("num").value;
    var message;
    if (num % 2 == 0) {
        message = "Number" + num + " is even";
    } else {
         message = "Number" + num + " is odd";
    }
    document.getElementById("res").innerHTML = message;
    
}
function BillCalc(){
    var units= document.getElementById("units").value;
    var min_amount=0;
    var amount=0;
    var total_amount=0;
    if(units >= 0 && units < 100){
        amount= units * 5;
    }else if (units>=100 && units<500){
        amount=units*6;
    }
    else{
        amount=units*10;
    }
    total_amount=min_amount+ amount;
    message = "Your Total Bill is"+total_amount;
    document.getElementById("bill").innerHTML=message;
}