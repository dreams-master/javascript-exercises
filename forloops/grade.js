for (let score = 60; score <= 100; score++) {
    let grade;
    if (score > 90) {
        grade = "A";
    } else if (score > 80) {
        grade = "B";
    } else if (score > 70) {
        grade = "C";
    } else if (score > 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    console.log("For " + score + ", you got a " + grade);
}
