function calculate(m1,m2,m3,m4,m5){
    var marks1 = parseInt(document.getElementById(m1).value);
    var marks2 = parseInt(document.getElementById(m2).value);
    var marks3 = parseInt(document.getElementById(m3).value);
    var marks4 = parseInt(document.getElementById(m4).value);
    var marks5 = parseInt(document.getElementById(m5).value);

    var total=marks1+marks2+marks3+marks4+marks5;
    var avg=total/5;
    var grade;
    if (avg >= 90) {
        grade = "A+";
    } else if (avg >= 80) {
        grade = "A";
    } else if (avg >= 70) {
        grade = "B";
    } else if (avg >= 60) {
        grade = "C";
    } else if (avg >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    document.getElementById("grade").innerHTML = grade;
    document.getElementById("average").innerHTML = avg;
}