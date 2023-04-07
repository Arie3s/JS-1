function compareNumbers(num1, num2) {
    var a = document.getElementById(num1);
    var b = document.getElementById(num2);
    if (a.value > b.value) {
      console.log(a.value);
    } else {
      console.log(b.value);
    }
  }
  