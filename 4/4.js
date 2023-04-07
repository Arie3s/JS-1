function func(){
    for (let index = 0; index < 15; index++) {
        if(index%2==0){
            document.write(index + " is even");
        }else{
            document.write(index + " is odd");
        }    
        document.write("<br>")    
    }
}