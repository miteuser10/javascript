function calc(ope){
    num1 = parseInt(document.getElementById("num1").value);
     num2 = parseInt(document.getElementById("num2").value);
switch(ope){
        case 'add': message= num1+" + "+num2+" = "+(num1+num2);
                    break;
                case 'sub': message= num1+" - "+num2+" = "+(num1-num2);
                    break;
                case 'mul': message= num1+" * "+num2+" = "+(num1*num2);
                    break;
                case 'div': message= num1+" / "+num2+" = "+(num1/num2);
                    break;
                case 'mod': message= num1+" % "+num2+" = "+(num1%num2);
                    break;
        default: message= "Invalid";
                                                    }

 document.getElementById("res").innerHTML= message;
}