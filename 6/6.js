function loop(){
    for (let index = 1; index < 101; index++) {
        if(index%3==0 && index%5==0){
            document.write("FizzBuzz");
        }else if (index%3==0){
            document.write("Fizz");
        }else if(index%5==0){
            document.write("Buzz");
        }else{
            document.write(index);
        }
        document.write("<br>");        
    }
}